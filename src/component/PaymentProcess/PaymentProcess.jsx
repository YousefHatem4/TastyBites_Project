import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PaymentProcess() {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderDetails } = location.state || {};
    const [isProcessing, setIsProcessing] = useState(false);
    const [cardDetails, setCardDetails] = useState({
        number: "",
        expiry: "",
        cvv: "",
        name: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Validate card details
        if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvv || !cardDetails.name) {
            toast.error("Please fill all card details");
            setIsProcessing(false);
            return;
        }

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // On successful payment
        toast.success("Payment successful!");
        navigate("/order-confirmation", {
            state: {
                orderDetails: {
                    ...orderDetails,
                    paymentMethod: "Bank Transfer",
                    transactionId: `TXN-${Math.floor(Math.random() * 1000000)}`
                }
            }
        });
    };

    if (!orderDetails) {
        return (
            <div className="container mx-auto py-12 px-4 text-center">
                <h1 className="text-2xl font-bold mb-4">No order details found</h1>
                <button
                    onClick={() => navigate("/payment")}
                    className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600"
                >
                    Back to Payment
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-12 px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-6">Complete Your Payment</h1>

                <div className="mb-6 bg-gray-50 p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
                    <div className="space-y-1">
                        <p className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>{orderDetails.subtotal.toFixed(2)} EGP</span>
                        </p>
                        {orderDetails.discount > 0 && (
                            <p className="flex justify-between text-green-600">
                                <span>Discount:</span>
                                <span>-{orderDetails.discount.toFixed(2)} EGP</span>
                            </p>
                        )}
                        <p className="flex justify-between font-bold border-t pt-2 mt-2">
                            <span>Total:</span>
                            <span>{orderDetails.total.toFixed(2)} EGP</span>
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium mb-1">Card Number</label>
                        <input
                            type="text"
                            name="number"
                            value={cardDetails.number}
                            onChange={handleInputChange}
                            placeholder="1234 5678 9012 3456"
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">Expiry Date</label>
                            <input
                                type="text"
                                name="expiry"
                                value={cardDetails.expiry}
                                onChange={handleInputChange}
                                placeholder="MM/YY"
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">CVV</label>
                            <input
                                type="text"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleInputChange}
                                placeholder="123"
                                className="w-full p-2 border rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Cardholder Name</label>
                        <input
                            type="text"
                            name="name"
                            value={cardDetails.name}
                            onChange={handleInputChange}
                            placeholder="Name on card"
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full bg-blue-600 text-white p-3 rounded-md font-bold text-lg ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                            }`}
                    >
                        {isProcessing ? "Processing Payment..." : `Pay ${orderDetails.total.toFixed(2)} EGP`}
                    </button>
                </form>
            </div>
        </div>
    );
}