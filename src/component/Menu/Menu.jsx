import React from 'react';
import toast, { Toaster } from 'react-hot-toast'; // ✅ import toast & Toaster
import { useMenu } from '../Context/menuContext';

export default function Menu() {
  const {
    menuItems = [],
    activeCategory,
    loading,
    error,
    categories,
    setActiveCategory,
    addToCart
  } = useMenu();

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;

  return (
    <div className="py-[90px]">
      {/* ✅ Add the Toaster component here */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="title-menu text-center text-3xl font-bold mb-8">
        Our Menu
      </div>
      <div className="container mx-auto px-4">
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

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {menuItems.map(item => (
            <div
              key={item.id}
              className="box-menu shadow-sm bg-[#222831] cursor-pointer flex flex-col h-full hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center img-box-menu bg-[#F1F2F3] h-48 overflow-hidden">
                <img
                  className="object-cover rounded-full img-menu"
                  src={item.image}
                  alt={item.name}
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                  {item.name}
                </h5>
                <p className="mb-3 font-normal text-[#FFFFFF] flex-grow">
                  {item.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#FFFFFF]">{item.price} EGP</p>
                  <button
                    className="text-white bg-[#FFBE33] hover:bg-[#d99e1f] cursor-pointer rounded-full px-3 focus:ring-4 focus:outline-none font-medium text-sm py-2 text-center transition-colors"
                    onClick={() => handleAddToCart(item)} // ✅ Use local handler
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
