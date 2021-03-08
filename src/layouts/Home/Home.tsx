import React from 'react';

import './Home.scss';
import caseOne from '../../assets/case-study-one.png';
import down from '../../assets/down.png';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="home">
    <p className="home__location">📍 Sydney, Australia</p>
    <div className="home__blockquote-container">
      <blockquote className="home__blockquote">
        I am a support data analyst who love to utilize my
        skills to explore and solve real-life challenges
        a variety of skill sets that will add value.
      </blockquote>
    </div>
    <div className="home__project">
      <div className="home__project-head">
        <p className="home__project-title">Featured projects</p>
        <p className="home__project-link">All projects</p>
      </div>
      <section className="home__project-case">
        <Link to="/">
          <div className="home__project-case-study" id="careApp">
            <img src={caseOne} alt='Case Study One' loading="lazy"/>
          </div>
        </Link>
        <section className="home__project-case-desc">
          <h2 className="home__project-case-title">The Care App</h2>
          <h3 className="home__project-case-content">As a product design intern, I worked with the Community Integrity team to redesign and ship a part of Facebook’s identity
          confirmation experience on web, iOS and android in 180+ countries.</h3>
          <h5 className="home__project-case-date">AUG 2019 - NOV 2019 • SYDNEY, AUS</h5>
        </section>
      </section>
    </div>

  </div>
);

export default Home;
