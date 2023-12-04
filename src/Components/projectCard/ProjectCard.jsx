import React from "react";
import PropTypes from 'prop-types';
import "./ProjectCard.scss";

function ProjectCard({ card }) {
  return (
   
    <div className="projectCard">
      <img src={card.img} alt="" />
      <div className="info">
        <img src={card.pp} alt="" />
        <div className="texts">
          <h2>{card.cat}</h2>
          <span>{card.username}</span>
        </div>
      </div>
    </div>
   
  );
}

ProjectCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,        // Adjust the type as needed
    pp: PropTypes.string.isRequired,         // Adjust the type as needed
    cat: PropTypes.string.isRequired,        // Adjust the type as needed
    username: PropTypes.string.isRequired,   // Adjust the type as needed
  }).isRequired,
};

export default ProjectCard;
