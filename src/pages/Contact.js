import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE
        {' '}
        <br />
        COFFEE
        <br />
        {' '}
        CHAT ☕️
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Backend Development</p>
        <p>React Native</p>
        <p>Android/Web Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Coffee</p>
        <p>Space</p>
        <p>Pizza</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span><a href="mailto:palkeshsharma456@gmail.com">cOnTaCt mE</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/Palkesh-ai" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/palkesh-ai/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </span>
        <span>
          {' '}
          <a href="https://wellfound.com/u/palkesh-sharma" target="_blank" rel="noreferrer">WELLFOUND</a>
        </span>
        <span><a href="https://x.com/PalkeshSharma9" target="_blank" rel="noreferrer">X (FKA TWITTER)</a></span>
      </div>
    </div>
  </div>
);

export default Contact;
