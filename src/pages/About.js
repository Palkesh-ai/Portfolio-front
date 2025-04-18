import React from 'react';
import './About.css';
import ReduxIcon from '../assets/redux.png';
import HTML from '../assets/html.png';
import mongo from '../assets/mongo.png';
import jQuery from '../assets/jquery.png';
import Ruby from '../assets/ruby.png';
import JEST from '../assets/jest.png';
import Flutter from '../assets/flutter.png';
import VSCode from '../assets/vscode.png';
import Figma from '../assets/figma.png';
import ReactIcon from '../assets/react.png'
import RSpecLogo from '../assets/rspec.png'
import NPMlogo from '../assets/npm.png'
import GitLogo from '../assets/git.png'
import GitHublogo from '../assets/github.png'
import GMeet from '../assets/meet.png'
import Zoomlogo from '../assets/zoom.webp'
import SkypeLogo from '../assets/skype.png'
import Slack from '../assets/slack.png'
import WebPack from '../assets/webpack.png'
import PostGres from '../assets/postgres.png'
import Rails from '../assets/rails.png'
import Canva from '../assets/canva.png'
import CDT from '../assets/cdt.png'
import CSS from '../assets/css.png'
import BootStrap from '../assets/bootstrap.png'
import JavaScript from '../assets/javascript.png'
import Sass from '../assets/sass.png'
import PostMan from '../assets/postman.png'
import WordPress from '../assets/wordpress.png'
import Tailwind from '../assets/tailwind.png'
import NextJSLogo from '../assets/nextjs.png'
import NodeJSLogo from '../assets/nodejs.png'
import MySQL from '../assets/mysql.png'
import AdobeXD from '../assets/adobexd.png'

const About = () => (
  <section className="about" id="about">
    <div className="about-me">
      <h2 className="title about-title">aBOUT mE</h2>
      <p className="paragraph about-para">
      ⚡ Full-stack developer specializing in React.js, React Native, and the MERN stack. I thrive on building innovative apps, from real-time messaging with WebSockets to AI-driven image generators. Passionate about optimizing performance, enhancing user experiences, and driving tech initiatives with the Google Developer Student Club. Always ready to take on challenges and deliver impactful solutions! 🚀💻
      </p>
      <button className="hire-me">
        <a href="https://drive.google.com/file/d/1Eq965dXDC_XfH2ieg00dEwIQ4PDL7Iti/view?usp=sharing" target="_blank" rel="noreferrer">
          GET MY CV
        </a>
      </button>
    </div>
    <div className="about-skills">
      <h2 className="skill-title">Front-End</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={ReactIcon}
            alt=""
          />
          <p>React</p>
        </div>
        <div className="skill">
          <img
            src={JavaScript}
            alt=""
          />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img
            src={ReduxIcon}
            alt=""
          />
          <p>Redux</p>
        </div>
        <div className="skill">
          <img
            src={HTML}
            alt=""
          />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <img
            src={CSS}
            alt=""
          />
          <p>CSS3</p>
        </div>
        {/* <div className="skill">
          <img
            src={jQuery}
            alt=""
          />
          <p>jQuery</p>
        </div>
        <div className="skill">
          <img
            src={Sass}
            alt=""
          />
          <p>SASS</p>
        </div>
        <div className="skill">
          <img
            src={BootStrap}
            alt=""
          />
          <p>Bootstrap</p>
        </div> */}
        <div className="skill">
          <img
            src={NextJSLogo}
            alt=""
          />
          <p>Next.js</p>
        </div>

        <div className="skill">
          <img
            src={Tailwind}
            alt=""
          />
          <p>Tailwind CSS</p>
        </div>


      </div>
      <h2 className="skill-title">Back-End</h2>
      <div className="skills">
        {/* <div className="skill">
          <img
            src={Ruby}
            alt=""
          />
          <p>Ruby</p>
        </div>
        <div className="skill">
          <img
            src={Rails}
            alt=""
          />
          <p>Ruby on Rails</p>
        </div> */}

        <div className="skill">
          <img
            src={NodeJSLogo}
            alt=""
          />
          <p>Node.js</p>
        </div>
      </div>

      <h2 className="skill-title">Database</h2>
      <div className="skills">
        {/* <div className="skill">
          <img
            src={PostGres}
            alt=""
          />
          <p>PostgreSQL</p>
        </div> */}
        {/* <div className="skill">
          <img
            src={MySQL}
            alt=""
          />
          <p>MySQL</p>
        </div> */}
        <div className="skill">
          <img
            src={mongo}
            alt=""
          />
          <p>MongoDB</p>
        </div>
        
      </div>

      <h2 className="skill-title">Mobile</h2>
      <div className="skills">
        <div className="skill">
          <img
            src={ReactIcon}
            alt=""
          />
          <p>React Native</p>
        </div>
        {/* <div className="skill">
          <img src={Flutter} alt="" />
          <p>Flutter</p>
        </div> */}

      </div>
      <h2 className="skill-title">Tools</h2>
      <div className="skills">
        <div className="skill">
          <img src={GitLogo} alt="" />
          <p>Git</p>
        </div>
        <div className="skill">
          <img src={GitHublogo} alt="" />
          <p>GitHub</p>
        </div>
        {/* <div className="skill">
          <img src={RSpecLogo} alt="" />
          <p>RSpec</p>
        </div>
        <div className="skill">
          <img src={JEST} alt="" />
          <p>JEST</p>
        </div> */}
        <div className="skill">
          <img src={CDT} alt="" />
          <p>Chrome Dev Tools</p>
        </div>
        <div className="skill">
          <img src={VSCode} alt="" />
          <p>VS Code</p>
        </div>
        {/* <div className="skill">
          <img src={WebPack} alt="" />
          <p>Webpack</p>
        </div> */}
        <div className="skill">
          <img src={PostMan} alt="" />
          <p>Postman</p>
        </div>
        <div className="skill">
          <img src={NPMlogo} alt="" />
          <p>npm</p>
        </div>
        {/* <div className="skill">
          <img src={WordPress} alt="" />
          <p>WordPress</p>
        </div> */}
      </div>
      <h2 className="skill-title">Design</h2>
      <div className="skills">
        <div className="skill">
          <img src={Canva} alt="" />
          <p>Canva</p>
        </div>
        <div className="skill">
          <img src={Figma} alt="" />
          <p>Figma</p>
        </div>
        {/* <div className="skill">
          <img src={AdobeXD} alt="" />
          <p>Adobe XD</p>
        </div> */}
      </div>
      <h2 className="skill-title">Communication</h2>
      <div className="skills">
        <div className="skill">
          <img src={Slack} alt="" />
          <p>Slack</p>
        </div>
        <div className="skill">
          <img src={SkypeLogo} alt="" />
          <p>Skype</p>
        </div>
        <div className="skill">
          <img src={GMeet} alt="" />
          <p>Google Meet</p>
        </div>
        <div className="skill">
          <img src={Zoomlogo} alt="" />
          <p>Zoom</p>
        </div>
      </div>
      <h2 className="skill-title">Soft Skills</h2>
      <div className="skills">
        <p className="soft-skill">Remote Pair-Programming</p>
        <p className="soft-skill">Communication</p>
        <p className="soft-skill">Mentoring</p>
        <p className="soft-skill">Collaboration</p>
        <p className="soft-skill">Leadership</p>
        <p className="soft-skill">Problem Solving</p>
        <p className="soft-skill">Time Management</p>
        <p className="soft-skill">Decision Making</p>
        <p className="soft-skill">Critical Thinking</p>
      </div>
    </div>

  </section>
);

export default About;
