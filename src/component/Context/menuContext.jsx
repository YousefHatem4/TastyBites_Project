import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast';

export let cartContext = createContext();

export default function CartContestProvider({ children }) {

    const [cart, setCart] = useState(null);

    const headers = {
        token: localStorage.getItem('userToken')
    }

    async function getMenuToPayment(productId) {
        try {
            let { data } = await axios.post(`https://eldeeb.pythonanywhere.com/api/orders/`, {
                productId
            },
                {
                    headers
                })
            getProductCart();
            toast.success(data.message, {
                duration: 2000
            })


        } catch (err) {
            console.log(err);
        }
    }




   

    return <cartContext.Provider value={{ getMenuToPayment }} >
        {children}
    </cartContext.Provider>
}