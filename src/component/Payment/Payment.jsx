import React, { useEffect, useState } from "react";
import { useMenu } from "../Context/menuContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Payment() {
  const { cartItems, updateCartItemQuantity, setCartItems } = useMenu();

  const [address, setAddress] = useState({
    street: "",
    apartment: "",
    city: "",
    phone: ""
  });

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const validCoupons = ["yba24", "yy21", "bb20", "aa21", "gg21"];

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    console.log("Placing order:", { items: cartItems, address });
    setCartItems([]);
  };

  const handleApplyCoupon = () => {
    if (validCoupons.includes(couponCode.toLowerCase())) {
      setDiscount(0.1); // 10% discount
      toast.success("Coupon applied successfully! 10% discount added.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setDiscount(0);
      toast.error("Invalid coupon code. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountedTotal = subtotal - (subtotal * discount);

  return (
    <div className="container mx-auto py-18 px-4">
      {/* Add ToastContainer at the top of your component */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="flex flex-col md:flex-row justify-between gap-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        {/* Billing Details */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">Street Address*</label>
              <input
                type="text"
                name="street"
                value={address.street}
                onChange={handleAddressChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Apartment, floor, etc. (optional)</label>
              <input
                type="text"
                name="apartment"
                value={address.apartment}
                onChange={handleAddressChange}
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Town/City*</label>
              <input
                type="text"
                name="city"
                value={address.city}
                onChange={handleAddressChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                value={address.phone}
                onChange={handleAddressChange}
                required
                className="w-full p-2 border rounded-md"
              />
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-5 h-5" />
              <span className="text-sm">Save this information for faster checkout next time</span>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          {cartItems.length === 0 ? (
            <p className="text-center py-4">Your cart is empty</p>
          ) : (
            <>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between border-b pb-2">
                    <div className="flex items-center gap-4">
                      <span className="font-bold">{item.name}</span>
                      <div className="flex items-center border rounded-md">
                        <button
                          type="button"
                          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="mx-2 w-6 text-center">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span className="font-bold">{item.price * item.quantity} EGP</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2 text-gray-700">
                <p className="flex justify-between">Subtotal: <span>{subtotal.toFixed(2)} EGP</span></p>
                <p className="flex justify-between">Shipping: <span>Free</span></p>
                {discount > 0 && (
                  <p className="flex justify-between text-green-600 font-semibold">
                    Discount (10%): <span>-{(subtotal * discount).toFixed(2)} EGP</span>
                  </p>
                )}
                <hr />
                <p className="flex justify-between font-bold">Total: <span>{discountedTotal.toFixed(2)} EGP</span></p>
              </div>
            </>
          )}

          {/* Payment Method */}
          <div className="mt-4">
            <h3 className="font-bold mb-2">Payment Method</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" />
                <span>Bank Transfer</span>
                <div className="flex gap-2 ml-4">
                  <img src="WhatsApp Image 2025-03-22 at 12.20.43 AM.jpeg" alt="Visa" className="w-10 h-auto" />
                  <img src="WhatsApp Image 2025-03-22 at 12.11.45 AM.jpeg" alt="MasterCard" className="w-10 h-auto" />
                  <img src="WhatsApp Image 2025-03-22 at 12.20.35 AM.jpeg" alt="Meeza" className="w-10 h-auto" />
                </div>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="payment" defaultChecked />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          {/* Coupon Section */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              placeholder="Coupon Code"
              className="flex-1 p-2 border rounded-md"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button
              type="button"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md"
              onClick={handleApplyCoupon}
            >
              Apply
            </button>
          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className={`w-full bg-yellow-500 text-white p-3 rounded-md mt-4 font-bold text-lg ${cartItems.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}