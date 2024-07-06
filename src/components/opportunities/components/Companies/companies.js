import React, { useState, useEffect } from 'react';
import './companies.css';
import { getFirestore, collection, addDoc,getDocs  } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../../../firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default function Companies({ updateData }) {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [deadline, setDeadline] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [link, setLink] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); // Loading state
    const [message, setMessage] = useState(''); // Feedback message

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setMessage('');
    };

    const handleImageUpload = (e) => {
        const selectedFile = e.target.files[0];
        setImage(selectedFile);
    };

    const fetchDataFromFirebase = async () => {
        try {
            const firestore = getFirestore();
            const opportunitiesCollection = collection(firestore, 'opportunities');
            const oppSnapshot = await getDocs(opportunitiesCollection);
            const oppList = oppSnapshot.docs.map((doc) => ({
                uid: doc.id,
                ...doc.data()
            }));
            return oppList;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    const handlePostOpportunity = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            let imageUrl = null;
            if (image) {
                const storage = getStorage();
                const storageRef = ref(storage, `opportunity_images/${image.name}`);
                await uploadBytes(storageRef, image);
                imageUrl = await getDownloadURL(storageRef);
            }

            const docRef = await addDoc(collection(db, 'opportunities'), {
                title,
                deadline,
                description,
                image: imageUrl,
                link,
            });

            setMessage('Opportunity posted successfully!');
            resetForm();
            const newData = await fetchDataFromFirebase();
            updateData(newData);
        } catch (error) {
            setMessage('Error adding document: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setTitle('');
        setDeadline('');
        setDescription('');
        setImage(null);
        setLink('');
        closeModal();
    };

    return (
        <section className='c-wrapper'>
            <div className='padding innerWith flexCenter c-container' style={{paddingBottom: "20px"}}>
                {/* Partner logos */}
                <img src='./images/partners/dhs.png' alt='icon' />
                <img src='./images/partners/hopscof.png' alt='icon' />
                <img src='./images/partners/scholars.png' width={500} alt='icon' />
                <img src='./images/partners/nolb.jpg' alt='icon' />
                <img src='./images/partners/uni.jpg' alt='icon' />
            </div>
            {user && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom:'80px'}}>
                    <button onClick={openModal}>Post an Opportunity</button>
                </div>
            )}

            {showModal && (
                <div className='modal'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2 className='title_Post'>Post an Opportunity</h2>
                            <span className='close' onClick={closeModal}>&times;</span>
                        </div>
                        <form className='modal-form' onSubmit={handlePostOpportunity}>
                            <input
                                type='text'
                                placeholder='Opportunity Title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                minLength={5}
                                maxLength={50}
                            />
                            <input
                                type='date'
                                placeholder='Deadline'
                                value={deadline}
                                onChange={(e) => setDeadline(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder='Description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                minLength={10}
                                maxLength={200}
                            ></textarea>
                            <label htmlFor='imageUpload' className='file-input-label'>
                                Select an image for the opportunity
                            </label>
                            <input
                                id='imageUpload'
                                type='file'
                                accept='.jpg, .jpeg'
                                onChange={handleImageUpload}
                                className='file-input'
                                required
                            />
                            {image && (
                                <img
                                    src={URL.createObjectURL(image)}
                                    alt='Uploaded Preview'
                                    style={{ width: '100%', marginTop: '10px' }}
                                />
                            )}
                            <input
                                type='text'
                                placeholder='More Information Link'
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                required
                            />
                            <button type='submit' disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            )}
        </section>
    );
}
