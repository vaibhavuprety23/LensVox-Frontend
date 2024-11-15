import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <>
    
     <section id="projects" className="projects-section">
     <h1>Our Projects</h1>
        
        <div className="projects-cards">
          <div className="projects-card">
          <h2>Generative Text Summarization</h2>
          <p>A project focused on creating concise and coherent summaries from large volumes of text using advanced NLP techniques.</p>
          </div>

          <div className="projects-card">
          <h2>Vision-based Quality Control</h2>
          <p>An AI solution for automating quality control processes in manufacturing using computer vision to detect defects and anomalies.</p>
          </div>

          <div className="projects-card">
          <h2>Audio Signal Processing for Noise Reduction</h2>
          <p>A proof of concept aimed at improving audio quality by reducing background noise through sophisticated signal processing algorithms.</p>
          </div>
         
        </div>
        </section>
        </>

  );
}

export default Projects;
