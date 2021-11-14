import axios from 'axios';
import React  from 'react';
import './Reviews.css';
import { useForm } from 'react-hook-form';
import './Reviews.css';
const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/feedback/allfeedback', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully Added');
                    reset();
                }
            })
    };
    return (
        <div>
           
          <form  onSubmit={handleSubmit(onSubmit)}> 
          <h2 className="text-center pb-3">Give Your Feedback</h2>
            <div className="form-container container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { maxLength: 50 })} placeholder="User Name" />
                    <textarea {...register("description")} placeholder="Feedback" />
                    <textarea {...register("reviewrating")} placeholder="Review Rating" />

                    {/* <input type="number" {...register("TourCost")} placeholder="Price" /> */}
                    <input type="number" {...register("rating")} placeholder="rating" />

                    {/* <input {...register("image")} placeholder="image url" /> */}

                    <input type="submit" />
                </form>
            </div>
        <p></p>
        </form>
           
        </div>
    );
};

export default Reviews;