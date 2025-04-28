import React, { useState, useEffect } from 'react';
import axios from 'axios';

const categories = ["all", "burger", "pizza", "pasta"];

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenuItems() {
      setLoading(true);
      setError(null);
      try {
        let url = "https://eldeeb.pythonanywhere.com/api/menu/items/";
        if (activeCategory !== "all") {
          url += `?category=${activeCategory}`;
        }
        const response = await axios.get(url);
        setMenuItems(response.data);
      } catch (err) {
        console.error('Error fetching menu items:', err);
        setError('Failed to load menu items.');
      } finally {
        setLoading(false);
      }
    }

    fetchMenuItems();
  }, [activeCategory]); // re-fetch when activeCategory changes

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;

  return (
    <div className="py-[90px]">
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
