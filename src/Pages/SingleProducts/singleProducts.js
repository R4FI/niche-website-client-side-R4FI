import React from 'react';
import { Link } from 'react-router-dom';
import './singleProducts.css';

const SingleProducts = ({ offer }) => {
    const { _id, name,TourCost, description, rating, image } = offer;
    return (
        <div className="col-lg-3 col-md-3 col-12">
            <div className="offer-card">
                <div className="offer-img">
                    <img src={image} alt="" />
                </div>
                <div className="offer-info">
                    <h4>{name}</h4>
                    <p>Price ${TourCost}</p>
                    <p><small>Rating:{rating}</small></p>
                    <p>{description}</p>
                </div>
                <div className="booking-btn">
                    <Link to={`/placeorder/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default SingleProducts;