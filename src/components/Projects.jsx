import React from 'react';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>Our Projects</h1>
      <p>Projects Completed till now</p>
      <div className="cards-container">
        <div className="card">
          <img src='https://super.homelane.com/Kitchens%20and%20Wardrobes/1680689667710d826069eb5f8-HLKT00000814_kitchen-800x600_8-main.jpg' alt="Project 1" />
          <div className="card-content">
            <h3>Project 1</h3>
            <p>Description of project 1.</p>
          </div>
        </div>
        <div className="card">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
        <div className="card">
          <h3>Project 3</h3>
          <p>Description of project 3.</p>
        </div>
      </div>
      <br></br>
    </div>
  );
};

export default Projects;
