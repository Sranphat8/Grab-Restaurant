import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Restaurants from './components/Restaurants';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/restaurants')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="text-center text-2xl font-bold my-6">Grab Restaurant</div>
      
      {/* เพิ่มส่วนของช่องค้นหา เพื่อให้ตรงกับรูปภาพ */}
      <div className="flex justify-center mb-8 px-4">
        <input
          type="text"
          placeholder="ค้นหาร้านอาหาร..."
          className="input input-bordered input-md w-full max-w-md"
          // ในโค้ดนี้ยังไม่มีการเชื่อมต่อกับ state หรือฟังก์ชันการค้นหาจริง ๆ
          // หากต้องการเพิ่มฟังก์ชันการค้นหา จะต้องเพิ่ม useState สำหรับค่า input และ logic กรองข้อมูล
        />
        <button className="btn btn-primary ml-2">ค้นหา</button>
      </div>

      <Restaurants restaurants={data} />
    </>
  );
};

export default App;