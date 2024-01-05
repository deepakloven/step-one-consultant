import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Appbar from './components/Appbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Service from './components/Service';
import SouthKorea from './components/SoutheKorea';
import StudyAbroad from './components/StudyAbroad';

function App() {
  return (
    <>
    <Router>
      <div className="App">
      <Appbar/>
        <Routes>
        <Route exact path="/home" element={<Home />} />
         <Route exact path="/aboutus" element={<AboutUs />} />
         <Route exact path="/studyabroad" element={<StudyAbroad />} />
         <Route exact path="/contact" element={<Contact/>} />
         <Route exact path="/service" element={<Service/>} />
         <Route exact path="/southkorea" element={<SouthKorea/>} />
         <Route element={<Home />} />
        </Routes>
        {/* <Home/> */}
        
        <Footer/>
       
        
      </div>
    </Router>
    </>
  );
}

export default App;
