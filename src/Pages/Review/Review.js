import React from 'react';
import './Review.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Alert } from '@mui/material';

const Review = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{ 
        console.log(data);
        axios.post('http://localhost:5000/feedbacks',data)
        .then(res=>{
                reset();
                <Alert severity="success">Thank You</Alert>
        })
    }
    return (
        <div className="feedback">
            <h2>Feedback</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username", { required: true})} placeholder="Your Name" type="text" />
      <input {...register("email") } placeholder="Your Email" type="email"/>
      <textarea {...register("feedback", {maxWidth: 50})} placeholder="Your Feedback" type="text"/>
      <input type="number" {...register("rating", { max: 5 })}/>
      <input type="submit" />
    </form>
            
        </div>
    );
};

export default Review;