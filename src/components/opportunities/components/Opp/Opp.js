import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import './opp.css';
import '../Companies/companies.css';
import { sliderSettings } from '../../../utils/common';
import { getFirestore, collection, getDocs, doc, updateDoc,deleteDoc } from 'firebase/firestore/lite';
import { getAuth,onAuthStateChanged } from 'firebase/auth';
import {
  getStorage,
  ref as storageRef,
  deleteObject
} from 'firebase/storage';

export default function Opp({ search }) {
  const [data, setData] = useState([]);
  const [ascendingOrder, setAscendingOrder] = useState(false);
  const opportunityRef = useRef(null);
  const [user, setUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editedCard, setEditedCard] = useState({});
  const firestore = getFirestore();
  const storage = getStorage();
  
  useEffect(() => {
    const fetchDataFromFirebase = async () => {
      try {
        const firestore = getFirestore();
        const info = await getData(firestore);
        setData(info);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromFirebase();
  }, []);

  const scrollToOpp = () => {
    opportunityRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (search !== '') {
      scrollToOpp();
    }
  }, [search]);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const getData = async (firestore) => {
    const opportunities = collection(firestore, '/opportunities/');
    const oppSnapshot = await getDocs(opportunities);
    const oppList = oppSnapshot.docs.map((doc) => ({
      uid: doc.id,
      ...doc.data()
    }));
    return oppList;
  };

  const handleSortByDate = () => {
    setAscendingOrder(!ascendingOrder);
    const sortedData = [...data].sort((a, b) => {
      return ascendingOrder
        ? new Date(a.deadline) - new Date(b.deadline)
        : new Date(b.deadline) - new Date(a.deadline);
    });
    setData(sortedData);
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const handleEdit = (selectedCard) => {
    setEditedCard(selectedCard);
    toggleFormVisibility();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      const firestore = getFirestore();
      const { uid, ...updatedFields } = editedCard;
  
      const opportunityDocRef = doc(firestore, 'opportunities', uid);
      await updateDoc(opportunityDocRef, updatedFields);
  
      console.log('Document updated successfully');
  
      // Update the state by mapping over the data array and updating the specific opportunity
      const updatedData = data.map((item) =>
        item.uid === uid ? { ...item, ...updatedFields } : item
      );
  
      setData(updatedData);
  
      toggleFormVisibility(); // Close the form after successful update
    } catch (error) {
      console.error('Error updating document:', error);
    }
    console.log('new data:', data);
  };

  
  const handleDelete = async (selectedCard) => {
    console.log('Delete button clicked');
    try {
      const { uid, imageUrl } = selectedCard;
  
      const opportunityDocRef = doc(firestore, 'opportunities', uid);
      await deleteDoc(opportunityDocRef);
  
      if (imageUrl) {
        const imageRef = storageRef(storage, imageUrl);
        await deleteObject(imageRef);
      }
  
      console.log('Document deleted successfully');
  
      // Update the state by filtering out the deleted opportunity
      const updatedData = data.filter((item) => item.uid !== uid);
      setData(updatedData);
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const filteredData = search
    ? data.filter((card) => card.title.toLowerCase().includes(search.toLowerCase()))
    : data;

  return (
    <section className='r-wrapper' ref={opportunityRef}>
      <div className='paddings innerWidth r-container'>
        <div className='r-head' style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className='orangeText'>Best Choices</span>
            <span className='primaryText'>Popular Opportunities</span>
          </div>
          {user && (
            <>
              <button onClick={handleSortByDate}>
                {ascendingOrder ? 'Sort by Ascending Date' : 'Sort by Descending Date'}
              </button>
            </>
          )}
        </div>
        {filteredData.length > 0 ? (
          <Swiper {...sliderSettings}>
            <SiderButtons />
            {filteredData.map((card, index) => (
              <SwiperSlide key={index}>
                {user ? (
                  <div className='flexColStart r-card'>
                    <img src={card.image} alt='icon' />
                    <span className='primaryText r-price'>{card.title}</span>
                    <span className='secondaryText'><strong>Deadline: </strong>{card.deadline}</span>
                    <span className='secondaryText'>{card.description}</span>
                    <div className="button-container">
                      <button onClick={() => handleEdit(card)}>Edit</button>
                      <button onClick={() =>handleDelete(card)}>Delete</button>
                  </div>
                  </div>
                ) : (
                  <a href={card.link} target='_blank' rel='noopener noreferrer'>
                    <div className='flexColStart r-card'>
                      <img src={card.image} alt='icon' />
                      <span className='primaryText r-price'>{card.title}</span>
                      <span className='secondaryText'><strong>Deadline: </strong>{card.deadline}</span>
                      <span className='secondaryText'>{card.description}</span>
                    </div>
                  </a>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className='no-opportunities'>No opportunities available.</div>
        )}
      </div>
      {showForm && (
        <div className='modal'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h2 className='title_Post'>Edit Opportunity</h2>
              <span className='close' onClick={toggleFormVisibility}>&times;</span>
            </div>
            <form className='modal-form' onSubmit={handleFormSubmit}>
              <input
                type='text'
                placeholder='Opportunity Title'
                value={editedCard.title}
                onChange={(e) => setEditedCard({ ...editedCard, title: e.target.value })}
                required
              />
              <input
                type='date'
                placeholder='Deadline'
                value={editedCard.deadline}
                onChange={(e) => setEditedCard({ ...editedCard, deadline: e.target.value })}
                required
              />
              <textarea
                placeholder='Description'
                value={editedCard.description}
                onChange={(e) => setEditedCard({ ...editedCard, description: e.target.value })}
                required
              ></textarea>
              <input
                type='text'
                placeholder='More Information Link'
                value={editedCard.link}
                onChange={(e) => setEditedCard({ ...editedCard, link: e.target.value })}
                required
              />
              <button type='submit'>Save</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

const SiderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className='flexCenter r-buttons'>
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};