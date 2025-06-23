import Card from './Card';

const Restaurants = ({ restaurants }) => {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {restaurants &&
            restaurants.map((restaurant) => {
                return (
                    <Card
                        key={restaurant.id}
                        img={restaurant.img} // <<< แก้ไขตรงนี้: เปลี่ยนจาก restaurant.image เป็น restaurant.img
                        title={restaurant.title}
                        type={restaurant.type}
                    />
                );
            })}
        </div>
    );
};

export default Restaurants;