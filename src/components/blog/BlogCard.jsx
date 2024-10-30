import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import AddOpportunityModal from './AddOpportunityModal';
import { db } from '../../firebase/firebase';
import { getStorage, ref, deleteObject } from 'firebase/storage';

const BlogCard = () => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    id: '',
    title: '',
    desc: '',
    image: '',
    location: '',
    date: '',
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogCollection = collection(db, 'blogs');
        const blogSnapshot = await getDocs(blogCollection);
        const blogList = blogSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogList);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleEdit = (blog) => {
    setCurrentBlog(blog);
    setEditModal(true);
  };

  const closeEditModal = () => {
    setEditModal(false);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const blogDocRef = doc(db, 'blogs', currentBlog.id);
      await updateDoc(blogDocRef, currentBlog);

      const updatedBlogs = blogs.map((blog) => 
        blog.id === currentBlog.id ? { ...blog, ...currentBlog } : blog
      );
      setBlogs(updatedBlogs);
      closeEditModal();
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      const blogDocRef = doc(db, 'event', blogId);
      await deleteDoc(blogDocRef);

      const blog = blogs.find((b) => b.id === blogId);
      if (blog && blog.image) {
        const storage = getStorage();
        const imageRef = ref(storage, blog.image);
        await deleteObject(imageRef);
      }

      setBlogs(blogs.filter((b) => b.id !== blogId));
      console.log('Blog deleted successfully');
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <>
      {user && (
        <>
          <button onClick={openModal}>Add New Event</button>
          {showModal && <AddOpportunityModal onClose={closeModal} />}
        </>
      )}
      {blogs.map((val) => (
        <div className='items shadow' key={val.id}>
          <div className='img'>
            <img src={val.image || val.cover} alt='' style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className='text'>
            <div className='admin flexSB adjusted'>
              <span>
                <i className='fa fa-user'></i>
                <label htmlFor=''>{val.location}</label>
              </span>
              <span>
                <i className='fa fa-calendar-alt'></i>
                <label htmlFor=''>{val.date}</label>
              </span>
            </div>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
            {/* Buttons for edit and delete */}
            {user && (
              <>
                <button onClick={() => handleEdit(val)}>Edit</button>
                <button onClick={() => handleDelete(val.id)}>Delete</button>
              </>
            )}
          </div>
        </div>
      ))}
      {editModal && (
        <div className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h2 className='title_Post'>Edit Event</h2>
              <span className='close' onClick={closeEditModal}>&times;</span>
            </div>
            <form className='modal-form' onSubmit={handleUpdate}>
              <input
                type='text'
                placeholder='Event Title'
                value={currentBlog.title}
                onChange={(e) => setCurrentBlog({ ...currentBlog, title: e.target.value })}
                required
              />
              <input
                type='date'
                placeholder='Event Date'
                value={currentBlog.date}
                onChange={(e) => setCurrentBlog({ ...currentBlog, date: e.target.value })}
                required
              />
              <input
                type='text'
                placeholder='Location'
                value={currentBlog.location}
                onChange={(e) => setCurrentBlog({ ...currentBlog, location: e.target.value })}
                required
              />
              <textarea
                placeholder='Description'
                value={currentBlog.desc}
                onChange={(e) => setCurrentBlog({ ...currentBlog, desc: e.target.value })}
                required
              ></textarea>
              <input
                type='text'
                placeholder='Image URL'
                value={currentBlog.image}
                onChange={(e) => setCurrentBlog({ ...currentBlog, image: e.target.value })}
              />
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCard;
