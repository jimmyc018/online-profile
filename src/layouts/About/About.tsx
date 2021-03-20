import React from 'react';

import './About.scss';

const About = () => (
  <div className="about">
    <div className="about__section">
      <div className="about__summary">
        <div className="about__at-galance">
          <h2 className="about__heading">Meet Jimmy</h2>
          <div className="about__status">
            <p className="about__status-favourite">Favourite Sport - 🏓</p>
            <p className="about__status-favourite">Favourite Food - 🍙</p>
            <p className="about__status-favourite">Favourite Mood - 😃</p>
          </div>
          <p className="about__description-one">
            Hi there!, I'm a UI Front-End Developer working for Westpac Group. Currently,
            I'm working on SQL scripting, data extracting, metadata creation
            and reporting analysis.
          </p>
          <br/>
          <p className="about__description-two">I received a Bachelor's degree from Computer Science
             and Information System program at the Univeristy of Auckland. In the spring of 2019,
              I studied a Intermediate UX/UI Design course at Academy Xi which had helped me developed one case study.
          </p>
          <a className="button about__resume-link" href="https://www.dropbox.com/s/ttk8h1czez3wwsa/Jimmy%20Chan%20Resume.pdf?dl=1">Download Resumé</a>
        </div>
      </div>
    </div>
    {/* <div className="about__experience">
      <h3 className="about__experience-heading">My Experience</h3>
      <p className="about__experience-company">Westpac Group</p>
    </div> */}
  </div>
);


export default About;
