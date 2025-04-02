import React from "react";

const Payment = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between gap-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        {/* Billing Details */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium">First Name*</label>
              <input type="text" required className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Company Name</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Street Address*</label>
              <input type="text" required className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Apartment, floor, etc. (optional)</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Town/City*</label>
              <input type="text" required className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Phone Number*</label>
              <input type="tel" required className="w-full p-2 border rounded-md" />
            </div>
            <div>
              <label className="block font-medium">Email Address*</label>
              <input type="email" required className="w-full p-2 border rounded-md" />
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
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-2">
              <span>Classic Cheeseburger</span>
              <span className="font-bold">$120</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span>Seafood Pizza</span>
              <span className="font-bold">$170</span>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-gray-700">
            <p className="flex justify-between">Subtotal: <span>$290</span></p>
            <p className="flex justify-between">Shipping: <span>Free</span></p>
            <hr />
            <p className="flex justify-between font-bold">Total: <span>$290</span></p>
          </div>

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
            <input type="text" placeholder="Coupon Code" className="flex-1 p-2 border rounded-md" />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Apply</button>
          </div>

          {/* Place Order Button */}
          <button className="w-full bg-yellow-500 text-white p-3 rounded-md mt-4 font-bold text-lg">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
