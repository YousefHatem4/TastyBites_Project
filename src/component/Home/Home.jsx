import React from "react";

export default function Home() {
  return (
    <>
      <header className="h-screen w-full bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-center md:text-left md:ml-10 lg:ml-20 xl:ml-40">
            <h1 className="home-font text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Fast Food Restaurant
            </h1>
            <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-lg mx-auto md:mx-0">
              TastyBites is a vibrant fast-food restaurant serving up delicious, quick, and satisfying meals. From juicy burgers and crispy fries to fresh wraps and savory snacks, we bring bold flavors and quality ingredients to every bite.
            </p>
            <button
              type="button"
              className="text-white bg-[#FFBE33] hover:bg-[#d99e1f] cursor-pointer rounded-full px-8 sm:px-10 py-2 sm:py-3 focus:ring-4 focus:border-none focus:outline-none font-medium text-sm sm:text-base transition duration-300"
            >
              Order Now
            </button>
          </div>
        </div>
      </header>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Offer 1 */}
            <div className="flex-1 flex bg-[#222831] rounded-2xl p-6 group">
              <div className="w-1/3 flex items-center justify-center overflow-hidden">
                <img
                  src="/src/assets/o1.jpg"
                  className="w-32 h-32 sm:w-40 sm:h-40 scale-90 object-cover rounded-full border-4 border-[#FFBE33] 
                     transition-transform duration-500 group-hover:scale-100"
                  alt="Thursday offer"
                />
              </div>
              <div className="w-2/3 pl-6 text-white flex flex-col justify-center">
                <h5 className="home-font text-xl sm:text-2xl font-bold mb-2">Tasty Thursdays</h5>
                <h6 className="text-2xl sm:text-3xl font-bold mb-4">
                  <span className="text-[#FFBE33]">20%</span> Off
                </h6>
                <button
                  type="button"
                  className="self-start text-white bg-[#FFBE33] hover:bg-[#d99e1f] cursor-pointer rounded-full px-6 sm:px-8 py-2 focus:ring-4 focus:outline-none font-medium text-sm sm:text-base transition duration-300"
                >
                  Order Now <i className="fa-solid fa-cart-shopping ml-2"></i>
                </button>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="flex-1 flex bg-[#222831] rounded-2xl p-6 hover:shadow-lg transition duration-300 group">
              <div className="w-1/3 flex items-center justify-center overflow-hidden">
                <img
                  src="/src/assets/o2.jpg"
                  className="w-32 h-32 sm:w-40 sm:h-40 scale-90 object-cover rounded-full border-4 border-[#FFBE33] 
                     transition-transform duration-500 group-hover:scale-100"
                  alt="Pizza offer"
                />
              </div>
              <div className="w-2/3 pl-6 text-white flex flex-col justify-center">
                <h5 className="home-font text-xl sm:text-2xl font-bold mb-2">Pizza Days</h5>
                <h6 className="text-2xl sm:text-3xl font-bold mb-4">
                  <span className="text-[#FFBE33]">15%</span> Off
                </h6>
                <button
                  type="button"
                  className="self-start text-white bg-[#FFBE33] hover:bg-[#d99e1f] cursor-pointer rounded-full px-6 sm:px-8 py-2 focus:ring-4 focus:outline-none font-medium text-sm sm:text-base transition duration-300"
                >
                  Order Now <i className="fa-solid fa-cart-shopping ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
