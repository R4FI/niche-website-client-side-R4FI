import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import SingleProducts from '../SingleProducts/singleProducts';
import './Products.css';
const Products = () => {
    
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products',)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
    
        <div>
              
               <div className="text-center pb-3 mt-5">
                <div className="offer-title">
                    <p>Choose Our Products</p>
                    <h4 className="animate__animated animate__bounce">Select Your Favourite One</h4>
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
           <Footer></Footer>
        </div>
    );
};

export default Products;