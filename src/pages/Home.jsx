import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Restaurants from "../components/Restaurants";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error(err));
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
      customClass: {
        popup: "rounded-xl", // โค้งมนแบบ iOS
      },
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/restaurants/${id}`, { method: "DELETE" })
          .then(() => {
            setRestaurants(restaurants.filter((item) => item.id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your restaurant has been deleted.",
              icon: "success",
              timer: 1500,
              showConfirmButton: false,
            });
          })
          .catch((err) => console.error(err));
      }
    });
  };

  const filtered = restaurants.filter(
    (r) =>
      r.title.toLowerCase().includes(keyword.toLowerCase()) ||
      r.type.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="container mx-auto px-4 pt-28 pb-12 max-w-5xl">
        <h1 className="text-4xl font-extralight mb-8 text-gray-900 text-center tracking-wide select-none">
          All Restaurants
        </h1>

        {/* Search Box */}
        <form onSubmit={(e) => e.preventDefault()} className="max-w-xl mx-auto mb-10">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              {/* Search Icon */}
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input
              type="search"
              id="search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-white shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
              placeholder="Search restaurants..."
            />
          </div>
        </form>

        {filtered.length > 0 ? (
          <Restaurants restaurants={filtered} onDelete={handleDelete} />
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">No restaurants found.</p>
        )}
      </main>
    </div>
  );
};

export default Home;
