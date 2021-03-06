import React, { useEffect, useState } from 'react';
import Feedback from '../Feedback/Feedback';
import Footer from '../Footer/Footer';
import SingleProducts from '../SingleProducts/singleProducts';
import './Products.css';
const Products = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://sleepy-hamlet-47496.herokuapp.com/products',)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
    
        <div>
              
               <div className="text-center pb-3 mt-5">
                <div className="offer-title">
                    <p>Choose Our Products</p>
                    <h4 >Select Your Favourite One</h4>
                </div>
            </div>
            <div className="container">
                <div className="row g-4">
                    {
                     products.map(offer =>
                         <SingleProducts 
                         key={offer.id}
                         offer = {offer}>
                         </SingleProducts>
                     )
                    }
                </div>
            </div>
            <Feedback></Feedback>
           <Footer></Footer>
        </div>
    );
};

export default Products;