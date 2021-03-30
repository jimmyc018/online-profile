import React from 'react';
import cover from '../../assets/Shot2.png';
import diagramOne from '../../assets/Diagram_1.png';

import './ProjectOne.scss';


const ProjectOne = () => (
  <div className="projectOne">
    <h1 className="projectOne__heading">Care App</h1>
    <div className="projectOne__cover">
    <img src={cover} alt='Project Cover' loading="eager"/>
    </div>

    <div className="projectOne__content-row">
      <div className="projectOne__content-left-col">
        <p className="projectOne__content-title">My Role</p>
        <p className="projectOne__content-desc">UX Designer for Care</p>
        <hr/>
        <p className="projectOne__content-title">Dates</p>
        <p className="projectOne__content-desc">Aug - Nov 2019</p>
        <hr/>
        <p className="projectOne__content-title">Tools</p>
        <p className="projectOne__content-desc">Sketch, Figma</p>
        <hr/>
      </div>
      <div className="projectOne__content-right-col">
        <p className="projectOne__content-right-col-desc">Care is an iOS and Andriod platform to help reduce wait time and increase better user
            experience for patients by also assisting practitioners to save valuable time they require.</p>
        <br />
        <br />
        <p className="projectOne__content-problem">The Problem</p>
        <p className="projectOne__problem-desc">Medical patients from all age groups are held in the waiting room for too long and are not receiving the best experiences because
          doctors are spending too much time on an individual that does not explain their symptoms. The challenge here is to improve medical patients' knowledge of healthcare and treatments before they go to the doctor. </p>
        <p className="projectOne__content-problem">The Solution</p>
        <p className="projectOne__problem-desc">Care is a platform to help reduce wait time and increase better user experience for patients by also assisting practitioners to save valuable time they require. Care is an artificial intelligence platform that is design specifically for patients which allows them to search and self-consult
        with an artificial intelligence chatbot, before having to visit and/or book an appointment.</p>
      </div>

    </div>

    {/* <img src={diagramOne} alt='Case Study One' loading="lazy"/> */}
    {/* <div className="projectOne__content-row">
      <div className="projectOne__content-left-col">
        <hr/>
      </div>
      <div className="projectOne__content-right-col"></div>
    </div> */}

  </div>

);

export default ProjectOne;
