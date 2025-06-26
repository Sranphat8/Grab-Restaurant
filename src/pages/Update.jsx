import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const Update = () => {
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState({
    title: "",
    type: "",
    img: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/restaurants/" + id)
      .then((res) => res.json())
      .then((response) => {
        setRestaurant(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);

  const handleSubmit = () => {
    fetch("http://localhost:3000/restaurants/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(restaurant),
    })
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16">
      <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-3xl shadow-md max-w-lg w-full p-10">
        <h2 className="text-3xl font-light mb-8 text-gray-900 text-center tracking-wide select-none">
          แก้ไขข้อมูลร้านอาหาร
        </h2>

        <label className="block mb-3 font-semibold text-gray-700">ชื่อร้าน (Title)</label>
        <input
          type="text"
          value={restaurant.title}
          onChange={(e) => setRestaurant({ ...restaurant, title: e.target.value })}
          className="w-full mb-8 rounded-xl border border-gray-300 bg-white bg-opacity-90 px-5 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          placeholder="กรอกชื่อร้านอาหาร"
        />

        <label className="block mb-3 font-semibold text-gray-700">ประเภทอาหาร (Type)</label>
        <input
          type="text"
          value={restaurant.type}
          onChange={(e) => setRestaurant({ ...restaurant, type: e.target.value })}
          className="w-full mb-8 rounded-xl border border-gray-300 bg-white bg-opacity-90 px-5 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          placeholder="เช่น อาหารไทย, อาหารญี่ปุ่น"
        />

        <label className="block mb-3 font-semibold text-gray-700">URL รูปภาพ (Image URL)</label>
        <input
          type="text"
          value={restaurant.img}
          onChange={(e) => setRestaurant({ ...restaurant, img: e.target.value })}
          className="w-full mb-10 rounded-xl border border-gray-300 bg-white bg-opacity-90 px-5 py-3 text-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          placeholder="กรอก URL รูปภาพ"
        />

        <button
          onClick={handleSubmit}
          className="w-full rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 shadow-lg transition"
        >
          บันทึกการเปลี่ยนแปลง
        </button>
      </div>
    </div>
  );
};

export default Update;
