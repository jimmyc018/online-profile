import React from 'react';

import './Home.scss';
import caseOne from '../../assets/case-study-one.png';
import document from '../../assets/document.svg';
import { Link } from 'react-router-dom';
import AnimateOnScrollComp from '../../components/AnimateOnScrollComp';

const Home = () => (
  <div className="home">
    {/* <p className="home__location">📍 Sydney, Australia</p> */}
    <p className="home__location">Hello, I'm <span className="home__name-link">Jimmy Chan</span>.</p>
    <div className="home__blockquote-container">
      {/* <blockquote className="home__blockquote">
        Hello, I'm a UI Front-End Developer who love to utilize my
        skills to explore and solve real-life challenges
        a variety of skill sets that will add value.
      </blockquote> */}
      <blockquote className="home__blockquote">
        A Front-End Developer who loves to explore and utilize his skills using
        a variety of skillsets to solve <span className="home__text-emphasis">real-life challenges</span>, while also adding value.
      </blockquote>
    </div>
    <div className="home__project">
      <div className="home__project-head">
        <img src={document} alt="document-icon" loading="lazy" className="home__project-document-icon"/>
        <p className="home__project-title">Featured projects</p>
        {/* <p className="home__project-link">All projects</p> */}
      </div>
      <section className="home__project-case">
        <AnimateOnScrollComp className="home__project-case-study" id="careApp">
          <img src={caseOne} alt='Case Study One' loading="eager"/>
        </AnimateOnScrollComp>
        <div className="home__project-case-mini-area">
          <AnimateOnScrollComp className="home__project-case-desc">
            <h2 className="home__project-case-title">Care app</h2>
            <h3 className="home__project-case-content">As a product design intern, I worked with the Community Integrity team to redesign and ship a part of Facebook’s identity
            confirmation experience on web, iOS and android in 180+ countries.</h3>
            <div className="home__project-case-btn">
              <Link className="button" to="/ProjectOne" type="button">View Case</Link>
            </div>
          </AnimateOnScrollComp>
          <AnimateOnScrollComp className="home__project-case-tags">
            <span className="tag">Mobile App</span>
            <span className="tag">UX Research</span>
            <span className="tag">Health</span>
          </AnimateOnScrollComp>
        </div>
      </section>
    </div>

  </div>
);

export default Home;
