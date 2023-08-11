
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home.jsx';
import Schedule from './components/Schedule/Schedule.jsx';
import Classes from './components/Classes/Classes.jsx';
import Pricing from './components/Pricing/Pricing.jsx';
import Testmonials from './components/Testmonials/Testmonials.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useEffect } from 'react';
import Aos from 'aos';



function App() {

  useEffect(()=>{
    Aos.init()
  },[])
  return <>
  
  <Navbar/>
  <Home/>
  <Schedule/>
  <Classes/>
  <Pricing/>
  <Testmonials/>
  <Footer/>
  </>
}

export default App;
