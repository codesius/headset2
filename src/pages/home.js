import React, { useEffect, useRef } from 'react';
import '../styles/home.css';
import Navbar from '../components/navbar';
import Instagram from '../assets/img/instagram.png';
import Telegram from '../assets/img/telegram.png';
import Whatsapp from '../assets/img/whatsapp.png';
import ThreeD from './3d';
import ContactForm from './contact'
import Footer from '../components/footer'

function Home() {
  const newsSectionRef = useRef(null);
  const contactSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const checkVisibility = (sectionRef) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();

      if (rect.top <= window.innerHeight / 2) {
        sectionRef.current.style.opacity = 1;
        sectionRef.current.style.transform = "translateX(0)";
      } else {
        sectionRef.current.style.opacity = 0;
        sectionRef.current.style.transform = "translateX(-100%)";
      }
    };

    checkVisibility(newsSectionRef); 
    checkVisibility(contactSectionRef);
    checkVisibility(aboutSectionRef);

    const handleScroll = () => {
      checkVisibility(newsSectionRef);
      checkVisibility(contactSectionRef);
      checkVisibility(aboutSectionRef);

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header>
        <Navbar />
        <div className='headerElements'>
          <div className='empty'></div>
          <div className='header'>
            <h1 className='title'>PRE-ORDER NOW!</h1>
            <hr></hr>
            <button className='purchase'>PURCHASE FROM AMAZON</button>
          </div>
          <div className='socialbar'>
            <div className="social">
              <a href="#"><img src={Instagram} alt="" title="Instagram" /></a>
              <a href="#"><img src={Telegram} alt="" title="Telegram" /></a>
              <a href="#"><img src={Whatsapp} alt="" title="WhatsApp" /></a>
            </div>
          </div>
        </div>
      </header>
      <div className="about-section" ref={aboutSectionRef}>
        <h1 className='section-name'>ABOUT US</h1>
        <div className="about">
        
          <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet turpis eget ligula lacinia condimentum. Fusce eget turpis posuere tincidunt. Donec sed velit sed nulla convallis tempor. Vivamus rutrum turpis id neque efficitur, sit amet consectetur ligula accumsan.</p>
          <ThreeD className='threed' />
        </div>
      </div>
      <div className='inter'></div>
      <div className="news-section" ref={newsSectionRef}>
        <h1 className='section-name'>SUPPORT</h1>
        <div className="news">
          <p>
            <span>- Help at Your Fingertips:</span> <br></br> Get quick assistance with our comprehensive FAQs. <br></br>
            <span>- Tech Support Anytime:</span> <br></br> Reach out via chat, email, or phone for technical help. <br></br>
            <span>- Join the Community:</span> <br></br> Engage in our forums for tips, tricks, and user insights. <br></br>
            <span>- Easy Setup Guides:</span> <br></br> Access user manuals and guides for smooth setup. <br></br>
            <span>- Your Voice Matters:</span> <br></br> Share feedback and suggestions to shape our products. <br></br>
          </p>
        </div>
      </div>
      <div className='inter'></div>
      <div className="contact-section" ref={contactSectionRef}>
        <h1 className='section-name'>CONTACT</h1>
        <div className="contact">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
