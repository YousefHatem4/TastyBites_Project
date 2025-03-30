import React, { useState } from "react";

export default function Home() {


  const menuItems = [
    {
      id: 1,
      name: "Seafood Pizza",
      description: "A delicious pizza topped with shrimp, crab sticks, squid, and onions on a cheesy, golden crust. Perfect for seafood lovers!",
      price: 170,
      category: "pizza",
      image: "/f1.png"
    },
    {
      id: 2,
      name: "Classic Cheeseburger",
      description: "Juicy beef patty with melted cheese, fresh lettuce, tomatoes, and our special sauce on a toasted bun.",
      price: 120,
      category: "burger",
      image: "/f4.png"
    },
    {
      id: 3,
      name: "Spaghetti Bolognese",
      description: "Classic spaghetti with rich meat sauce, topped with parmesan cheese and fresh basil.",
      price: 150,
      category: "pasta",
      image: "/f3.png"
    },
    {
      id: 4,
      name: "Pepperoni Pizza",
      description: "Classic pepperoni pizza with extra cheese and our signature tomato sauce on a crispy crust.",
      price: 180,
      category: "pizza",
      image: "/f6.png"
    },
    {
      id: 5,
      name: "Margherita Pizza",
      description: "Simple yet delicious with tomato sauce, fresh mozzarella, and basil on our thin crust.",
      price: 160,
      category: "pizza",
      image: "/f1.png"
    },
    {
      id: 6,
      name: "Chicken Burger",
      description: "Crispy chicken fillet with lettuce, mayo, and pickles on a sesame seed bun.",
      price: 110,
      category: "burger",
      image: "/f4.png"
    }
  ];

  const categories = ["all", "burger", "pizza", "pasta"];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);
   
  
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
      <div className='py-[30px]'>
        <div className='title-menu text-center text-3xl font-bold mb-8'>
          Our Menu
        </div>
        <div className='container mx-auto px-4'>
          {/* Tabs */}
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 justify-center mb-8">
            {categories.map(category => (
              <li key={category} className="me-2">
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`inline-block px-4 py-3 rounded-lg capitalize ${activeCategory === category
                    ? 'text-white bg-[#222831]'
                    : 'hover:text-gray-900 hover:bg-gray-100'
                    }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-7">
            {filteredItems.map(item => (
              <div key={item.id} className="max-w-sm box-menu shadow-sm bg-[#222831] cursor-pointer ">
                <div className='flex justify-center img-box-menu bg-[#F1F2F3] h-48 overflow-hidden'>
                  <img
                    className="w-full h-full  img-menu"
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.name}</h5>
                  <p className="mb-3 font-normal text-[#FFFFFF]">{item.description}</p>
                  <div className='flex justify-between items-center'>
                    <p className='text-[#FFFFFF]'>{item.price} EGP</p>
                    <button
                      className="text-white bg-[#FFBE33] hover:bg-[#d99e1f] cursor-pointer rounded-full px-3 focus:ring-4 focus:outline-none font-medium text-sm py-2 text-center transition-colors"
                      onClick={() => console.log(`Added ${item.name} to cart`)}
                    >
                      <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
