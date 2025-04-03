import React, { useState } from "react"; 

export default function Payment() {
  // State for items with quantities
  const [items, setItems] = useState([
    { name: "Classic Cheeseburger", price: 120, quantity: 1 },
    { name: "Seafood Pizza", price: 170, quantity: 1 }
  ]);

  // Calculate subtotal
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal; // Shipping is free in this example

  // Handle quantity changes
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedItems = [...items];
    updatedItems[index].quantity = newQuantity;
    setItems(updatedItems);
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col md:flex-row justify-between gap-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        {/* Billing Details - Kept exactly as you had it */}
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

        {/* Order Summary with quantity controls */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <div className="flex items-center gap-4">
                  <span className="font-bold">{item.name}</span>
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => handleQuantityChange(index, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="mx-2 w-6 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => handleQuantityChange(index, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
                <span className="font-bold">${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2 text-gray-700">
            <p className="flex justify-between">Subtotal: <span>${subtotal}</span></p>
            <p className="flex justify-between">Shipping: <span>Free</span></p>
            <hr />
            <p className="flex justify-between font-bold">Total: <span>${total}</span></p>
          </div>

          {/* Payment Method - Kept as you had it */}
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

          {/* Coupon Section - Kept as you had it */}
          <div className="mt-4 flex gap-2">
            <input type="text" placeholder="Coupon Code" className="flex-1 p-2 border rounded-md" />
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">Apply</button>
          </div>

          {/* Place Order Button - Kept as you had it */}
          <button className="w-full bg-yellow-500 text-white p-3 rounded-md mt-4 font-bold text-lg">Place Order</button>
        </div>
      </div>
    </div>
  );
}