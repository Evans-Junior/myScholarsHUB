import React,{useEffect,useState} from "react"
import {motion} from "framer-motion"
import {social_media} from "../../../dummydata"
import "./header.css"

const Head = () => {
  const [text, setText] = useState("");
  const words = ["ScholarsHUB"];
  const fullText = words.join(" ");
  const delay = 150;
  const deleteDelay = 1000;

  useEffect(() => {
    let i = 0;
    let timer = null;

    const startAnimation = () => {
      timer = setTimeout(() => {
        const newText = fullText.slice(0, i + 1);
        setText(newText);
        i++;

        if (i === fullText.length) {
          setTimeout(() => {
            i = 0;
            setText("");
            startAnimation();
          }, deleteDelay);
        } else {
          startAnimation();
        }
      }, delay);
    };

    startAnimation();

    return () => clearTimeout(timer);
  }, [fullText, delay, deleteDelay]);

  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>my{text}</h1>
            <span>Where preparedness meets opportunity.</span>
          </div>

          <div className='social'>
          {
            social_media.map((val)=>{
              return(
                <a href={val.link} className="social_media_link" target="_blank" rel="noreferrer">
                <motion.i whileHover={{scale: 1.5}} initial={{ x: -100, y: -100, opacity: 0.6 }} className={val.icon}></motion.i>
                </a>
              )
            })
          }
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
