import React from 'react';
import cover from '../../assets/Shot2.png';
import process from '../../assets/f.png';
import diagramOne from '../../assets/Diagram_1.png';

import './ProjectOne.scss';


const ProjectOne = () => (
  <div className="projectOne">
    <p className="caseStudy__problem-title"><strong className="boldText">The problem</strong></p>
    <h6 className="caseStudy__problem-statement">Medical patients from all age groups are held in the <strong className="boldText">waiting room for too long</strong> and are not receiving the best experiences because
    doctors are spending too much time on an individual that does not explain their symptoms.</h6>
    <h6 className="caseStudy__problem-statement-part-two">The challenge here is to improve medical patients'
    knowledge of healthcare and treatments before they go to the doctor.</h6>
    <p className="caseStudy__problem-title"><strong className="boldText">The solution</strong></p>
    <h6 className="caseStudy__problem-statement-part-two">Care is a platform to help reduce wait time and increase better user experience for patients by also assisting practitioners to save valuable time they require. Care is an artificial intelligence platform that is design specifically for patients which allows them to search and self-consult
        with an artificial intelligence chatbot, before having to visit and/or book an appointment.</h6>

    <div className="projectOne__content-row">
      <div className="projectOne__content-left-col">
        <p className="caseStudy__problem-title"><strong className="boldText">Project Details</strong></p>
        <p className="projectOne__content-desc">UX Designer for Care</p>
      </div>
    </div>
  </div>


);

export default ProjectOne;
