import React from 'react';

import './Home.scss';
import caseOne from '../../assets/case-study-one.png';
import document from '../../assets/down.svg';
import { Link } from 'react-router-dom';
import AnimateOnScrollComp, { AnimationDirection } from '../../components/AnimateOnScrollComp/AnimateOnScrollComp';

const Home = () => (
  <div className="home">
    {/* <AnimateOnScrollComp direction={AnimationDirection.Right}> */}
    <p className="home__greeting">Hi, I'm <span className="home__name-link"><a className="link_to_resume" href="https://www.dropbox.com/s/ttk8h1czez3wwsa/Jimmy%20Chan%20Resume.pdf?dl=1">Jimmy Chan</a></span>.</p>
    <div className="home__blockquote-container">
      <blockquote className="home__blockquote">
        A front-end developer who loves to explore and utilize his skills using
        a variety of skillsets to solve <span className="home__text-emphasis">real-life challenges</span>, while also adding value.
      </blockquote>
    </div>
    {/* </AnimateOnScrollComp> */}
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
            <h3 className="home__project-case-content">Care is an iOS and Andriod platform to help reduce wait time and increase better user
            experience for patients by also assisting practitioners to save valuable time they require.
            </h3>
            <div className="home__project-case-btn">
              {/* <Link className="button" to="/ProjectOne" type="button">View Case</Link> */}
              <Link className="button disabled-link" to="/ProjectOne" type="button">Coming Soon</Link>
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
