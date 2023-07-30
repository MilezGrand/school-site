import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './components/About/About';
import Admission from './components/Admission/Admission';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Pricing from './components/Pricing/Pricing';
import Education from './components/Education/Education';
import Main from './components/Main/Main';
import Nav from './components/Header/Nav/Nav';
import Popup from './components/Popup/Popup';

import { createPortal } from 'react-dom';

function App() {
  const mainRef = React.useRef(null);
  const aboutRef = React.useRef(null);
  const admissionRef = React.useRef(null);
  const pricingRef = React.useRef(null);
  const educationRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const menuRef = React.useRef(null);

  const [popupOpen, setPopupOpen] = React.useState(false);

  return (
    <div>
      <Router>
        <Menu
          mainRef={mainRef}
          aboutRef={aboutRef}
          admissionRef={admissionRef}
          pricingRef={pricingRef}
          educationRef={educationRef}
          contactRef={contactRef}
          menuRef={menuRef}
        />
        <Header
          mainRef={mainRef}
          aboutRef={aboutRef}
          admissionRef={admissionRef}
          pricingRef={pricingRef}
          educationRef={educationRef}
          contactRef={contactRef}
          menuRef={menuRef}
          setPopupOpen={setPopupOpen}
          popupOpen={popupOpen}
        />
        <Main sectionRef={mainRef} setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
        <About sectionRef={aboutRef} />
        <Pricing sectionRef={pricingRef} />
        <Education sectionRef={educationRef} />
        <Admission sectionRef={admissionRef} />
        <Contact sectionRef={contactRef} setPopupOpen={setPopupOpen} popupOpen={popupOpen} />
        <Footer />
      </Router>

      {popupOpen && createPortal(<Popup setPopupOpen={setPopupOpen} />, document.body)}
    </div>
  );
}

export default App;
