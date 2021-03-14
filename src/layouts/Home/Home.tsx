import React from 'react';

import './Home.scss';
import caseOne from '../../assets/case-study-one.png';
import caseTwo from '../../assets/case-study-two.png';
import document from '../../assets/down.svg';
import { Link } from 'react-router-dom';
import AnimateOnScrollComp, { AnimationDirection } from '../../components/AnimateOnScrollComp/AnimateOnScrollComp';
import TypedAnimationComp from '../../components/TypedAnimationComp/TypedAnimationComp';

const Home = () => (
  <div className="home">
    {/* <AnimateOnScrollComp direction={AnimationDirection.Right}> */}
    <p className="home__greeting">
      Hi, I'm <TypedAnimationComp strings={[
        'Jimmy Chan.',
        'a UX Designer',
        'a Data Analyst',
        'a Frontend Developer'
      ]} className="home__name-link">
      </TypedAnimationComp>
    </p>
    <blockquote className="home__blockquote">
      A <span className="home__name-link-2">creative</span> individualist who loves to explore and utilize his skills using
      a variety of skillsets to solve <span className="home__text-emphasis">real-life challenges</span>, while also adding value.
    </blockquote>
    <p className="home_location">📍 Sydney, NSW</p>
    {/* </AnimateOnScrollComp> */}
    <div className="home__project">
      <div className="home__project-head">
        <img src={document} alt="document-icon" loading="lazy" className="home__project-document-icon"/>
        <p className="home__project-title">Projects I've Done</p>
      </div>
      <section className="home__project-case">
        {/* <AnimateOnScrollComp className="home__project-case-study" id="careApp">
        </AnimateOnScrollComp> */}
        <div className="home__project-case-studies">
          <div className="home__project-case-study" id="careApp">
            <div className="home__project-case-study-content">
              <h3 className="home__project-case-study-name">The Care App</h3>
              <p className="home__project-case-study-type">UX Design</p>
            </div>
            <img src={caseOne} alt='Case Study One' loading="eager"/>
          </div>

          {/* <div className="home__project-case-study" id="careApp">
            <div className="home__project-case-study-content">
              <h3 className="home__project-case-study-name">Pokédex</h3>
              <p className="home__project-case-study-type">Coming Soon</p>
            </div>
            <img src={caseTwo} alt='Case Study Two' loading="eager"/>
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
  </div>
);

export default Home;
