import React from 'react';

import './Home.scss';
import caseOne from '../../assets/testing.png';
import caseTwo from '../../assets/Shot3.png';
import { Link } from 'react-router-dom';
import AnimateOnScrollComp, { AnimationDirection } from '../../components/AnimateOnScrollComp/AnimateOnScrollComp';
import TypedAnimationComp from '../../components/TypedAnimationComp/TypedAnimationComp';

const Home = () => (
  <div className="home">
    {/* <AnimateOnScrollComp direction={AnimationDirection.Right}> */}
    {/* <p className="home_location">📍 Sydney, ☀️ Australia</p> */}
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
      {/* <span className="home__text-emphasis"> */}
      A creative individualistwho loves to explore and utilize his skills using
      a variety of skillsets to solve real-life challenges, while also adding value.
    </blockquote>
    <blockquote className="home__blockquote-company">
      Currently working at <span className="company_name">Westpac Group</span>.
    </blockquote>
    <p className="home__lets-talk"><a href="mailto:jimmychan018@gmail.com" id="home__lets-talk">Let's work together →</a></p>
    {/* </AnimateOnScrollComp> */}
    <div className="home__project">
      <section className="home__project-case">
        {/* <AnimateOnScrollComp className="home__project-case-study">
        </AnimateOnScrollComp> */}
        <div className="home__project-case-studies">
          <div className="home__project-case-study">
            <div className="home__project-case-study-img-container">
              {/* <div className="home__project-case-study-content">
                <h3 className="home__project-case-study-name">Care App</h3>
                <p className="home__project-case-study-type">User Research</p>
              </div> */}
              <img src={caseOne} alt='Case Study One' loading="lazy"/>
            </div>

            <div className="home__project-case-btn">
              <div className="home__project-case-tags">
                <span className="tag">Mobile App</span>
                <span className="tag">UX Research</span>
                <span className="tag">Health Care</span>
              </div>
              <Link className="button disabled-link" to="/ProjectOne" type="button">Coming Soon</Link>
            </div>

            {/* <div>
              <p className="home__project-case-study-1">The Care App</p>
              <p className="home__project-case-study-2">UX + UI</p>
            </div> */}
          </div>

          <div className="home__project-case-study">
            <div className="home__project-case-study-img-container">
              {/* <div className="home__project-case-study-content">
                <h3 className="home__project-case-study-name">Coming Soon</h3>
                <p className="home__project-case-study-type">User Research</p>
              </div> */}
              <img className="imgOne" src={caseTwo} alt='Case Study One' loading="lazy"/>
            </div>
            <div className="home__project-case-btn">
              <div className="home__project-case-tags">
                <span className="tag">Data Analytics</span>
                <span className="tag">UX Research</span>
              </div>
              <Link className="button disabled-link " to="/ProjectOne" type="button">Coming Soon</Link>
            </div>
          </div>

          {/* <div>
              <p className="home__project-case-study-type">Care is an iOS and Andriod platform to help reduce wait time and increase better user
            experience for patients by also assisting practitioners to save valuable time they require.</p>
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
