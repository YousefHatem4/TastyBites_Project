import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const OrderDetails = () => {
    const { orderId } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrder = () => {
            try {
                const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
                const foundOrder = orderHistory.find(o => o.orderId === orderId || o.id === orderId);

                if (foundOrder) {
                    setOrder(foundOrder);
                } else {
                    navigate('/recent-orders', { replace: true });
                }
            } catch (error) {
                console.error('Error fetching order:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderId, navigate]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="container mx-auto py-12 px-4 text-center">
                <h1 className="text-xl font-bold mb-4">Order not found</h1>
                <button
                    onClick={() => navigate('/recent-orders')}
                    className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                >
                    Back to Orders
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8 px-4">
            <button
                onClick={() => navigate('/recent-orders')}
                className="flex items-center text-yellow-600 mb-6 cursor-pointer"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Orders
            </button>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b">
                    <h1 className="text-2xl font-bold">Order Details</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <h3 className="font-semibold text-gray-700">Order Information</h3>
                            <p className="mt-2 text-gray-600">
                                <span className="font-medium">Order Number:</span> {order.orderId || 'N/A'}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Date:</span> {new Date(order.date).toLocaleString()}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Status:</span>
                                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {order.status || 'Processing'}
                                </span>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-700">Payment Information</h3>
                            <p className="mt-2 text-gray-600">
                                <span className="font-medium">Method:</span> {order.paymentMethod || 'N/A'}
                            </p>
                            {order.transactionId && (
                                <p className="text-gray-600">
                                    <span className="font-medium">Transaction ID:</span> {order.transactionId}
                                </p>
                            )}
                            <p className="text-gray-600">
                                <span className="font-medium">Total:</span> {order.total?.toFixed(2) || '0.00'} EGP
                            </p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-b">
                    <h3 className="font-semibold text-gray-700 mb-4">Items</h3>
                    {order.items.map((item, index) => (
                        <div key={index} className="flex py-4 border-b last:border-b-0">
                            <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                                {item.image ? (
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="ml-4 flex-1">
                                <h4 className="font-medium">{item.name}</h4>
                                <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                                <p className="text-gray-800 font-medium mt-1">{(item.price * item.quantity).toFixed(2)} EGP</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-6">
                    <h3 className="font-semibold text-gray-700 mb-4">Delivery Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600">
                                <span className="font-medium">Street:</span> {order.address?.street || 'N/A'}
                            </p>
                            {order.address?.apartment && (
                                <p className="text-gray-600">
                                    <span className="font-medium">Apartment:</span> {order.address.apartment}
                                </p>
                            )}
                        </div>
                        <div>
                            <p className="text-gray-600">
                                <span className="font-medium">City:</span> {order.address?.city || 'N/A'}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">Phone:</span> {order.address?.phone || 'N/A'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;