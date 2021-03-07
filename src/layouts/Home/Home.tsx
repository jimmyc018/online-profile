import React from 'react';

import './Home.scss';
import caseOne from'../../assets/case-study-one.png';

const Home = () => (
  <div className="home">
    <p className="home__location">📍 Sydney, Australia</p>
    <div className="home__blockquote-container">
      <blockquote className="home__blockquote">
        I am a support data analyst who love to utilize my
        skills to explore and solve real-life challenges using
        a variety of skill sets that will add value.
      </blockquote>
    </div>
    <div className="home__project">
      <div className="home__project-head">
        <p className="home__project-title">Featured projects</p>
        <p className="home__project-link">All projects</p>
      </div>
      <section className="home__project-case">
        <div className="home__project-case-study">
          <img src={caseOne} alt='Case Study One' loading="lazy"/>
        </div>
      </section>
    </div>
  </div>
);

export default Home;
