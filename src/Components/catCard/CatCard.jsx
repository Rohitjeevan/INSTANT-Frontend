import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";
import PropTypes from 'prop-types';
export function CatCard({ card }) {

  return (
    <>
    <Link to={`/gigs?cat=${card.cat}`}>
      <div className="catCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}  </span>
        <span className="title">{card.title}</span>
      </div>
    </Link>

    </>
  );
}
CatCard.propTypes = {
  card: PropTypes.shape({
    cat: PropTypes.string.isRequired,     // Adjust the type as needed
    img: PropTypes.string.isRequired,     // Adjust the type as needed
    desc: PropTypes.string.isRequired,    // Adjust the type as needed
    title: PropTypes.string.isRequired,   // Adjust the type as needed
  }).isRequired,
};

export default CatCard;
