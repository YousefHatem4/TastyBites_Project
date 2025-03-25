import React from "react";

export default function Home() {
  return (
    <>
      <div className="h-screen w-screen bg-[url('/hero-bg.jpg')] bg-cover bg-center flex items-center justify-center">
        <div className="absolute left-40 top-55">
          <h1 className="home-font text-white mb-5">Fast Food Restaurant</h1>
          <p className=" text-[14px] text-white w-xl mb-5"> TastyBites is a vibrant fast-food restaurant serving up delicious, quick, and satisfying meals. From juicy burgers and crispy fries to fresh wraps and savory snacks, we bring bold flavors and quality ingredients to every bite. Perfect for a quick grab-and-go or a casual dine-in experience, TastyBites is your go-to spot for mouthwatering fast food!</p>
          <button
            type="button"
            className="text-white bg-[#FFBE33] hover:bg-[#d99e1f] cursor-pointer rounded-full px-10 focus:ring-4 focus:border-none focus:outline-none font-medium text-sm  py-2 text-center"
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}
