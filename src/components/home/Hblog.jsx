import React, { useState } from "react";
import "../blog/blog.css";
import { blog } from "../../dummydata";
import Heading from "../common/heading/Heading";
import EditBlogModal from "./EditBlogModal";

const Hblog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);

  const openDialogue = (blogData) => {
    setCurrentBlog(blogData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentBlog(null);
  };

  const handleSave = (updatedBlog) => {
    // Save the updated blog data to your state or backend
    console.log(updatedBlog);
  };

  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading subtitle="OUR BLOG" title="" />
          {/* <Heading subtitle='OUR BLOG' title='Recent From Blog' /> */}
          <div className="grid2">
            {blog.slice(0, 3).map((val) => (
              <div className="items shadow" key={val.id} onClick={() => openDialogue(val)}>
                <div className="img">
                  <img src={val.cover} alt={val.title} />
                </div>
                <div className="text">
                  <div className="admin flexSB">
                    <span>
                      <i className="fa fa-map-marker" aria-hidden="true"></i>
                      <label htmlFor="">{val.location}</label>
                    </span>
                    <span>
                      <i className="fa fa-calendar-alt"></i>
                      <label htmlFor="">{val.date}</label>
                    </span>
                    <span>
                      <label htmlFor="">{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p className="about_students">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {currentBlog && (
          <EditBlogModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            blogData={currentBlog}
            onSave={handleSave}
          />
        )}
      </section>
    </>
  );
};

export default Hblog;
