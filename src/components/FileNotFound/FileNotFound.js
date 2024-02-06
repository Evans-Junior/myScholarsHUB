import React,{useEffect,useState} from 'react'
import './FileNotFound.css'

export default function FileNotFound() {
    const [available, setAvailable] = useState(true);
    useEffect(() => {
        const pathIncludesAdmin = window.location.pathname.includes("opportunities");
        setAvailable(!pathIncludesAdmin);
      }, []);

  return (
    <div className='file_Not_Found'>
    <p>{available===true?"Scroll down":""}</p>
    <h1>{available===true?"Comming Soon...":"404 - Not Found"}</h1>
      <p>{available===true?"Get ready for more applications":"The page you are looking for doesn't exist."}</p>
    </div>
  )
}