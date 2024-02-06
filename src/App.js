import React,{useEffect,useState} from 'react';
import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Apply from "./components/apply/Apply"
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import opportunities from './components/opportunities/opportunities';
import FileNotFound from './components/FileNotFound/FileNotFound';

function App() {
  const [loading,setLoading]=useState(false)
  const [available, setAvailable] = useState(true);

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
        <Route path='/apply' component={Apply} />
        <Route path='/team' component={Team} />
        <Route path='/Blogs' component={Blog} /> {/* Place before the '*' route */}
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Contact} />
        <Route path='*' component={FileNotFound} /> {/* '*' route should be at the end */}
        </Switch>
        <Footer />
            </>
      }
        
      </Router>
    </>
  )
}

export default App
              {/* <Route path='/Apply' component={Apply} /> */}
