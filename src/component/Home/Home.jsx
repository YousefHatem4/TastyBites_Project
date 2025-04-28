import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMenu } from "../Context/menuContext"; // Make sure this path is correct

export default function Home() {
  const navigate = useNavigate();
  const { addToCart } = useMenu(); // Get addToCart function from context

  const categories = ["all", "burger", "pizza", "pasta"];
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
        console.error("Error fetching menu items:", err);
        setError("Failed to load menu items.");
        setMenuItems([]); // Ensure menuItems is always an array
      } finally {
        setLoading(false);
      }
    }

    fetchMenuItems();
  }, [activeCategory]);

  return (
    <>
      {/* Hero Section (unchanged) */}
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
              onClick={() => navigate("/menu")}
            >
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* Offers Section (unchanged) */}
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Offer 1 */}
            <div className="flex-1 flex bg-[#222831] rounded-2xl p-6 group">
              <div className="w-1/3 flex items-center justify-center overflow-hidden">
                <img
                  src="/src/assets/o1.jpg"
                  className="w-32 h-32 sm:w-40 sm:h-40 scale-90 object-cover rounded-full border-4 border-[#FFBE33] transition-transform duration-500 group-hover:scale-100"
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
                  onClick={() => navigate("/payment")}
                >
                  Order Now <i className="fa-solid fa-cart-shopping ml-2"></i>
                </button>
              </div>
            </div>

            {/* Offer 2 */}
            <div className="flex-1 flex bg-[#222831] rounded-2xl p-6 group">
              <div className="w-1/3 flex items-center justify-center overflow-hidden">
                <img
                  src="/src/assets/o2.jpg"
                  className="w-32 h-32 sm:w-40 sm:h-40 scale-90 object-cover rounded-full border-4 border-[#FFBE33] transition-transform duration-500 group-hover:scale-100"
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
                  onClick={() => navigate("/payment")}
                >
                  Order Now <i className="fa-solid fa-cart-shopping ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Updated Menu Section */}
      <div className="py-[30px]">
        <div className="title-menu text-center text-3xl font-bold mb-8">
          Our Menu
        </div>
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 justify-center mb-8">
            {categories.map((category) => (
              <li key={category} className="me-2">
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`inline-block px-4 py-3 rounded-lg capitalize ${activeCategory === category
                      ? "text-white bg-[#222831]"
                      : "hover:text-gray-900 hover:bg-gray-100"
                    }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>

          {/* Menu Items */}
          {loading ? (
            <div className="text-center py-10">Loading...</div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="box-menu shadow-sm bg-[#222831] cursor-pointer flex flex-col h-full hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex justify-center img-box-menu bg-[#F1F2F3] h-48 overflow-hidden">
                    <img
                      className="rounded-full object-cover img-menu"
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
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent any parent click handlers
                          addToCart(item); // Add item to cart
                        }}
                      >
                        <i className="fa-solid fa-cart-shopping"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}