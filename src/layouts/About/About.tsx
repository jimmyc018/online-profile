import React from 'react';

import './About.scss';

const About = () => (
  <div className="about">
    <div className="about__section">
      <div className="about__summary">
        <div className="about__at-galance">
          <h2 className="about__heading">Hi, I'm Jimmy</h2>
          <p className="about__description-one">
            Hi there!, I'm a UI Front-End Developer working for Westpac Group. Currently,
            I'm working on <span className="about__tasks">SQL scripting, data extracting, metadata creation
            and reporting analysis</span>.
          </p>
          <br/>
          <p className="about__description-two">I received a Bachelor's degree from <span className="about__study-details">Computer Science
             and Information System program at the Univeristy of Auckland</span>. In the spring of 2019,
              I studied a Intermediate UX/UI Design course at Academy Xi which had helped me developed one case study.
          </p>
          <a className="button about__resume-link" href="https://www.dropbox.com/s/ttk8h1czez3wwsa/Jimmy%20Chan%20Resume.pdf?dl=1">Download Resumé</a>
        </div>
      </div>
    </div>
  </div>
);


export default About;
