import React from "react";
import "./GigCard.scss";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import noavatar from "../../img/noavatar.png";
import star from "../../img/star.png"
import heart from "../../img/heart.png"
import PropTypes from 'prop-types';
const GigCard = ({ item }) => {
  
  const { isLoading, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => {
        return res.data;
      }),
  });
  return (
    <Link to={`/gig/${item._id}`} className="link">
      <div className="gigCard">
        <img src={item.cover} alt="" />
        <div className="info">
          {isLoading ? (
            "loading"
          ) : error ? (
            "please login ....."
            
          ) : (
            <div className="user">
              <img src={data.img || noavatar} alt="" />
              <span>{data.username}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="star">
            <img src={star}alt="" />
            <span>
              {!isNaN(item.totalStars / item.starNumber) &&
                Math.round(item.totalStars / item.starNumber)}
            </span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src={heart} alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>$ {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

GigCard.propTypes = {
  item: PropTypes.shape({
    userId: PropTypes.string.isRequired,            // Adjust the type as needed
    _id: PropTypes.string.isRequired,              // Adjust the type as needed
    cover: PropTypes.string.isRequired,            // Adjust the type as needed
    desc: PropTypes.string.isRequired,             // Adjust the type as needed
    totalStars: PropTypes.number.isRequired,       // Adjust the type as needed
    starNumber: PropTypes.number.isRequired,       // Adjust the type as needed
    price: PropTypes.number.isRequired,            // Adjust the type as needed
  }).isRequired,
};
export default GigCard;