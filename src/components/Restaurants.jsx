import React from "react";
import Card from "./Card";

const Restaurants = ({ restaurants, onDelete }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {restaurants &&
        restaurants.map((restaurant) => (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            img={restaurant.img}
            title={restaurant.title}
            type={restaurant.type}
            onDelete={onDelete}
          />
        ))}
    </div>
  );
};

export default Restaurants;
