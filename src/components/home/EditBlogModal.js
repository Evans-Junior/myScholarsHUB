import React, { useState, useEffect } from 'react';

const EditBlogModal = ({ isOpen, onClose, blogData, onSave }) => {
  const [formData, setFormData] = useState(blogData);

  useEffect(() => {
    setFormData(blogData);
  }, [blogData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title || ''}
            onChange={handleChange}
            placeholder="Title"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location || ''}
            onChange={handleChange}
            placeholder="Location"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date || ''}
            onChange={handleChange}
            placeholder="Date"
            required
          />
          <textarea
            name="desc"
            value={formData.desc || ''}
            onChange={handleChange}
            placeholder="Description"
            required
          />
          <input
            type="text"
            name="cover"
            value={formData.cover || ''}
            onChange={handleChange}
            placeholder="Cover Image URL"
            required
          />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditBlogModal;
