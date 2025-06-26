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

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Restaurant</h2>

      <label className="block mb-2 font-semibold">Title</label>
      <input
        type="text"
        value={restaurant.title}
        onChange={(e) =>
          setRestaurant({ ...restaurant, title: e.target.value })
        }
        className="border rounded p-2 w-full mb-4"
      />

      <label className="block mb-2 font-semibold">Type</label>
      <input
        type="text"
        value={restaurant.type}
        onChange={(e) =>
          setRestaurant({ ...restaurant, type: e.target.value })
        }
        className="border rounded p-2 w-full mb-4"
      />

      <label className="block mb-2 font-semibold">Image URL</label>
      <input
        type="text"
        value={restaurant.img}
        onChange={(e) =>
          setRestaurant({ ...restaurant, img: e.target.value })
        }
        className="border rounded p-2 w-full mb-4"
      />
    </div>
  );
};

export default Update;
