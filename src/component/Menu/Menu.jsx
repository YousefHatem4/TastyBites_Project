import React, { useState } from 'react';

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

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className='py-[90px]'>
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
  );
}