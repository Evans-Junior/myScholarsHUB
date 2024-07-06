import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../firebase/firebase';

const AddOpportunityModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [link, setLink] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleImageUpload = async (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
      setImageUrl(URL.createObjectURL(selectedFile));
    }
  };

  const handleAddOpportunity = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      let uploadedImageUrl = null;
      if (image) {
        const storage = getStorage();
        const storageRef = ref(storage, `opportunity_images/${image.name}`);
        await uploadBytes(storageRef, image);
        uploadedImageUrl = await getDownloadURL(storageRef);
      }

      const dbRef = collection(db, 'blogs');
      await addDoc(dbRef, {
        title,
        deadline,
        description,
        image: uploadedImageUrl,
        link,
        location,
      });

      setMessage('Opportunity posted successfully!');
      onClose();
    } catch (error) {
      setMessage('Error adding document: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h2 className='title_Post'>Post an Opportunity</h2>
          <span className='close' onClick={onClose}>&times;</span>
        </div>
        <form className='modal-form' onSubmit={handleAddOpportunity}>
          <input
            type='text'
            placeholder='Title'
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
          <input
            type='text'
            name='location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Location'
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
            Select an image for the Event
          </label>
          <input
            id='imageUpload'
            type='file'
            accept='.jpg, .jpeg, .png'
            onChange={handleImageUpload}
            className='file-input'
            required
          />
          {imageUrl && (
            <img
              src={imageUrl}
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
  );
};

export default AddOpportunityModal;
