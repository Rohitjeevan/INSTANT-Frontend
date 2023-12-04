import React from "react";
import "./Slide.scss";
import Slider from "infinite-react-carousel";
import PropTypes from 'prop-types';

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};


Slide.propTypes = {
  children: PropTypes.node.isRequired,        // Adjust the type as needed
  slidesToShow: PropTypes.number.isRequired,   // Adjust the type as needed
  arrowsScroll: PropTypes.bool.isRequired,     // Adjust the type as needed
};
export default Slide;
