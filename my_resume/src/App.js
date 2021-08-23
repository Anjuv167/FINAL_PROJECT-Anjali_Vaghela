import React from 'react';
import './App.css';

import Introduction from './components/Introduction';
import NavBar from './components/NavBar';
import Education from './components/Education';
import Experience from './components/Experience';
import Skill from './components/Skill';
import Contact from './components/Contact';



function App() {
    
      return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <NavBar/>
            <Introduction/>
            <Education/>
            <Experience/>
            <Skill/>
            <Contact/>
        </main>
      );
    }
  
  export default App;