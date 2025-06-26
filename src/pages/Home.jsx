import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  // กรองข้อมูลตาม keyword (ไม่สนใจ case)
  const result = restaurants.filter(
    (restaurant) =>
      restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.type.toLowerCase().includes(keyword.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-semibold mb-6">All Restaurants</h1>

        <input
          type="text"
          placeholder="Search restaurants..."
          value={keyword}
          onChange={handleSearch}
          className="input input-bordered w-full max-w-md mb-6"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {result.length > 0 ? (
            result.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                title={item.title}
                type={item.type}
              />
            ))
          ) : (
            <p className="text-gray-500 mt-10">No restaurants found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
