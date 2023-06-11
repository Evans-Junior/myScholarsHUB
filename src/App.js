import React,{useEffect,useState} from 'react';
import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Apply from "./components/apply/Apply"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading,setLoading]=useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },3000)
  },[])

  return (
    <>
      <Router>
      {
        
        loading?
        <div className='loader'>
        <ClimbingBoxLoader 
        size={10}
        color={"#d79237"}
        loading={loading}
        />
        <p>Loading ...</p>
        </div>
        
        :
        <>
        <Header />
        <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/about' component={About} />
              <Route path='/opportunities' component={CourseHome} />
              <Route path='/team' component={Team} />
              <Route path='/pricing' component={Pricing} />
              <Route path='/Blogs' component={Blog} />
              <Route path='/contact' component={Contact} />
              <Route path='/login' component={Contact} />
              <Route path='/Apply' component={Apply} />
        </Switch>
        <Footer />
            </>
      }
        
      </Router>
    </>
  )
}

export default App
