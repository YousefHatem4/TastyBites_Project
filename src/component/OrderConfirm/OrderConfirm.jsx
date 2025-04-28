import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function OrderConfirmation() {
    const location = useLocation();
    const { orderDetails } = location.state || {};

    if (!orderDetails) {
        return (
            <div className="container mx-auto py-12 px-4 text-center">
                <h1 className="text-2xl font-bold mb-4">No order details found</h1>
                <p>Please place your order again</p>
            </div>
        );
    }

    // Inside your OrderConfirmation component, add this useEffect:
    useEffect(() => {
        if (orderDetails) {
            const orderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
            const newOrder = {
                ...orderDetails,
                orderId: `ORD-${Math.random().toString(36).substr(2, 8).toUpperCase()}`,
                date: new Date().toISOString(),
                status: 'Processing'
            };
            localStorage.setItem('orderHistory', JSON.stringify([newOrder, ...orderHistory]));
        }
    }, [orderDetails]);

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
                <p className="text-gray-600 mb-6">Thank you for your purchase</p>

                <div className="bg-gray-50 p-6 rounded-md text-left mb-6">
                    <h2 className="text-lg font-semibold mb-4">Order Details</h2>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Order Number:</span>
                            <span className="font-medium">#{Math.floor(Math.random() * 1000000)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Payment Method:</span>
                            <span className="font-medium">{orderDetails.paymentMethod}</span>
                        </div>
                        {orderDetails.transactionId && (
                            <div className="flex justify-between">
                                <span className="text-gray-600">Transaction ID:</span>
                                <span className="font-medium">{orderDetails.transactionId}</span>
                            </div>
                        )}
                        <div className="flex justify-between border-t pt-3 mt-3">
                            <span className="text-gray-600">Total Amount:</span>
                            <span className="font-bold text-lg">{orderDetails.total.toFixed(2)} EGP</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-md text-left">
                    <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
                    <p>{orderDetails.address.street}</p>
                    {orderDetails.address.apartment && <p>{orderDetails.address.apartment}</p>}
                    <p>{orderDetails.address.city}</p>
                    <p>Phone: {orderDetails.address.phone}</p>
                </div>

                <button
                    onClick={() => window.location.href = "/"}
                    className="mt-6 bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );
}