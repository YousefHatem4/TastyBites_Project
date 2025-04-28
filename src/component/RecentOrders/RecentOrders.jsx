import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecentOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchOrders = () => {
            try {
                const savedOrders = JSON.parse(localStorage.getItem('orderHistory')) || [];
                setOrders(savedOrders);
            } catch (error) {
                toast.error('Failed to load orders');
                console.error('Error fetching orders:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const handleReorder = (order) => {
        // In a real app, you would add these items to your cart context
        toast.success('Items added to cart for reorder!');
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
        );
    }

    if (orders.length === 0) {
        return (
            <div className="container mx-auto py-12 px-4 text-center">
                <div className="max-w-md mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <h2 className="text-xl font-bold mt-4">No orders yet</h2>
                    <p className="text-gray-600 mt-2">You haven't placed any orders yet.</p>
                    <button
                        onClick={() => navigate('/')}
                        className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                    >
                        Start Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-2xl font-bold mb-6">Your Orders</h1>

            <div className="space-y-6">
                {orders.map((order, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-4 border-b">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                                <div>
                                    <h3 className="font-bold">Order #{order.orderId || `ORD-${Math.random().toString(36).substr(2, 8).toUpperCase()}`}</h3>
                                    <p className="text-sm text-gray-600">Placed on {formatDate(order.date || new Date().toISOString())}</p>
                                </div>
                                <div className="mt-2 sm:mt-0">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                            order.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {order.status || 'Processing'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-b">
                            {order.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="flex py-3">
                                    <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                        {item.image ? (
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="ml-4 flex-1">
                                        <h4 className="font-medium">{item.name}</h4>
                                        <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                                        <p className="text-gray-800 font-medium mt-1">{item.price * item.quantity} EGP</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                            <div className="mb-3 sm:mb-0">
                                <p className="text-gray-600">Total: <span className="font-bold text-lg">{order.total.toFixed(2)} EGP</span></p>
                                <p className="text-sm text-gray-600">{order.paymentMethod}</p>
                            </div>
                            <div className="space-x-2">
                                <button
                                    onClick={() => handleReorder(order)}
                                    className="px-4 py-2 border border-yellow-500 text-yellow-600 rounded-md hover:bg-yellow-50"
                                >
                                    Reorder
                                </button>
                                <button
                                    onClick={() => navigate(`/order-details/${order.orderId || index}`)}
                                    className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentOrders;