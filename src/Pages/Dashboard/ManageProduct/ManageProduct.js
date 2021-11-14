import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);




    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, You want to delete your order')
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch (url , {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount>0) {
                       alert('Deleted Successfully');
                        const remainingOrder = products.filter(product => product._id !== id);
                      setProducts(remainingOrder);
                    }
                });
        }

    }
    return (
        <div>
             <div className="allOrder-container">
            <div className="container">
                <h2 className="allOrder-title pb-3">All Products: {products.length}</h2>
                
                <div className="allOrder-table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                {/* <th>Email</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>
                        {products?.map((product, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{product?.name}</td>
                                    <td>${product?.TourCost}</td>
                                    
                                    <button
                                        onClick={() => handleDeleteOrder(product._id)}
                                       
                                        className="btn btn-danger delete-btn px-3 py-2">Delete</button>
                                </tr>
                               
                            </tbody>
                            
                        ))}
                    </Table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ManageProduct;