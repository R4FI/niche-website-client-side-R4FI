import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import './PlaceOrder.css';
import useAuth from '../../hooks/useAuth';
const PlaceOrder = () => {
    // const{user} = useAuth();
    const { bookingId } = useParams();
    const{user} = useAuth();
    const [bookingDetails, setBookingDetails] = useState([]);
    // const [order, setOrder] = useState({});

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        console.log(data);
        fetch ('http://sleepy-hamlet-47496.herokuapp.com/order',{
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=> {
            if (result.insertedID){
                alert('Your order successfully added')
                reset('');
            }
        })

    };

    // //data load
    useEffect(() => {
        fetch(`http://sleepy-hamlet-47496.herokuapp.com/products/${bookingId}`)
            .then(res => res.json())
            .then(data => setBookingDetails(data));
    }, []);
    return (
        <div className="placeOrder-container">
            <div className="container">
                <h2 className="text-center">Ordered Item: {bookingDetails?.name}</h2>
                <div className="row d-flex align-items-center">
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="order-box">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                   
                                <input defaultValue={user.displayName} {...register("name")} />
                                    <input type="text" {...register("bookname")} required placeholder="Type Product Name" defaultValue=""/>
                                    <input defaultValue={user.email} {...register("email", )} required/>
                                    <input placeholder="phone number" defaultValue="" required {...register("phone")}/>
                                    <input type="text" {...register("Address")} required placeholder="Address"/> 
                                    <input type="submit" value="Place Order" />
                                    
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="clo-lg-6 col-md-6 col-12">
                        <div className="details-container">
                            <div className="placeOrder-details">
                                <div className="order-img">
                                    <img src={bookingDetails?.image} alt="" />
                                </div>
                                <div className="details p-2">
                                    <h4>You Choose {bookingDetails?.name}</h4>
                                    <p>{bookingDetails?.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p><strong>Price: {bookingDetails?.TourCost}$</strong> only.</p>
                                        <p>Review : <strong>{bookingDetails?.rating}</strong> </p>
                                    </div>
                                  <NavLink to={"/product"}> <button className="btn btn-success px-3 py-2">Back To Products</button> </NavLink> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;