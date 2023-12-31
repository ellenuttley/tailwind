import { useEffect, useState } from 'react';
import SideBar from "./components/SideBar";
import AboutEllen from "./components/AboutEllen"
import SeeMyWork from './components/SeeMyWork';
import ReadAStory from './components/ReadAStory';

require('typeface-spectral')

export default function App() {   
  const [view, setView] = useState('AboutEllen')
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDarkMode);
  }, []);

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
    <div className="mainscreen">
    <SideBar setView={setView} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      {view === 'About Ellen' && <AboutEllen />}
      {view === 'See My Work' && <SeeMyWork />}
      {view === 'Read A Story' && <ReadAStory />}
    </div>
    </div>
  );
}