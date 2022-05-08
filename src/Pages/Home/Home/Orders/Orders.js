import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const Orders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrders] = useState([])

    useEffect(() => {

        const getOrders = async () => {
            const email = user.email
            const url = `http://localhost:5000/orderi?email=${email}`
            const { data } = await axios.get(url)
            setOrders(data)
        }
        getOrders()
    }, [user])


    return (
        <div>
            <h1>orders components: {orders.length}</h1>
        </div>
    );
};

export default Orders;