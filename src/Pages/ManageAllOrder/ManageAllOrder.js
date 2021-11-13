import { Alert, AlertTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [allOrders]);
    //DELETE order
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, You want to delete your order')
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch (url , {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                       <AlertTitle>Deleted Successfully</AlertTitle>
                        const remainingOrder = allOrders.filter(order => order._id !== id);
                        setAllOrders(remainingOrder);
                    }
                });
        }

    }

    return (
        <div className="allOrder-container">
            <div className="container">
                <h2 className="allOrder-title pb-3">Your Orders Available: {allOrders.length}</h2>
                <h6>Please Reload to Se the Update</h6>
                <div className="allOrder-table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {allOrders?.map((order, index) => (
                            <tbody>
                                <tr>
                                    <td>{index}</td>
                                    <td>{order?.name1}</td>
                                    <td>{order?.name}</td>
                                    <td>{order?.email}</td>
                                    <td>{order?.phone}</td>
                                    <td>{order?.createdAt}</td>
                                    <td><span className="status">{order?.status}</span></td>
                                    <button
                                        onClick={() => handleDeleteOrder(order._id)}
                                       
                                        className="btn btn-danger delete-btn px-3 py-2">Delete</button>
                                     
                                    <Link to={`/order/update/${order._id}`}>
                                        <button className="btn btn-danger delete-btn px-3 py-2">Update</button>
                                    </Link>

                                </tr>
                               
                            </tbody>
                            
                        ))}
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default ManageAllOrder;