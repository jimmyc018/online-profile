import React from 'react';

import './Home.scss';
import caseOne from '../../assets/case-study-one1.png';
import { Link } from 'react-router-dom';
import AnimateOnScrollComp, { AnimationDirection } from '../../components/AnimateOnScrollComp/AnimateOnScrollComp';
import TypedAnimationComp from '../../components/TypedAnimationComp/TypedAnimationComp';

const Home = () => (
  <div className="home">
    {/* <AnimateOnScrollComp direction={AnimationDirection.Right}> */}
    <p className="home_location">📍 Sydney, NSW</p>
    <p className="home__greeting">
      Hi, I'm <TypedAnimationComp strings={[
        'Jimmy Chan!',
        'a UX Designer',
        'a Data Analyst',
        'a UI Developer'
      ]} className="home__name-link">
      </TypedAnimationComp>
    </p>
    <blockquote className="home__blockquote">
      A creative individualist who loves to explore and utilize his skills using
      a variety of skillsets to solve <span className="home__text-emphasis">real-life challenges</span>, while also adding value.
    </blockquote>
    <p className="home__lets-talk"><a href="mailto:jimmychan018@gmail.com" id="home__lets-talk">Let's work together →</a></p>
    {/* </AnimateOnScrollComp> */}
    <div className="home__project">
      {/* <div className="home__project-head">
        <img src={document} alt="document-icon" loading="lazy" className="home__project-document-icon"/>
        <p className="home__project-title">Projects I've Done</p>
      </div> */}
      <section className="home__project-case">
        {/* <AnimateOnScrollComp className="home__project-case-study">
        </AnimateOnScrollComp> */}
        <div className="home__project-case-studies">
          <div className="home__project-case-study">
            <div className="home__project-case-study-img-container">
              <div className="home__project-case-study-content">
                <h3 className="home__project-case-study-name">Care App</h3>
                <p className="home__project-case-study-type">User Research</p>
              </div>
              <Link to="/ProjectOne"><img src={caseOne} alt='Case Study One' loading="lazy"/></Link>
            </div>
            {/* <div>
              <p className="home__project-case-study-type">Care is an iOS and Andriod platform to help reduce wait time and increase better user
            experience for patients by also assisting practitioners to save valuable time they require.</p>
            </div> */}
          </div>
{/*
          <div className="home__project-case-study-img-container">
              <div className="home__project-case-study-content">
                <h3 className="home__project-case-study-name">Care App</h3>
                <p className="home__project-case-study-type">User Research</p>
              </div>
              <Link to="/ProjectOne"><img src={caseOne} alt='Case Study One' loading="eager"/></Link>
          </div> */}
        </div>
        {/* <div className="home__project-case-mini-area">
          <AnimateOnScrollComp className="home__project-case-desc">
            <h2 className="home__project-case-title">Care app</h2>
            <h3 className="home__project-case-content">Care is an iOS and Andriod platform to help reduce wait time and increase better user
            experience for patients by also assisting practitioners to save valuable time they require.
            </h3>
            <div className="home__project-case-btn">
              <Link className="button disabled-link" to="/ProjectOne" type="button">Coming Soon</Link>
            </div>
          </AnimateOnScrollComp>
          <AnimateOnScrollComp className="home__project-case-tags">
            <span className="tag">Mobile App</span>
            <span className="tag">UX Research</span>
            <span className="tag">Health</span>
          </AnimateOnScrollComp>
        </div> */}
      </section>
    </div>
    {/* <section className="home__bio">
        <h3 className="home__bio-lets-chat">Want to know more about me? Let's have a chat 💬?</h3>
        <a href="mailto:jimmychan018@gmail.com" className="home__shoot-me-message">Send me a message ✉️</a>
    </section> */}
  </div>
);

export default Home;
