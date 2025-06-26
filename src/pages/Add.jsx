import React, { useState } from "react";
import { useNavigate } from "react-router"; // ใช้ react-router (v7) ไม่ใช้ react-router-dom

const Add = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    type: "",
    img: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.type || !form.img) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    try {
      await fetch("http://localhost:3000/restaurants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      navigate("/"); // กลับไปหน้าหลักหลังเพิ่มเสร็จ
    } catch (err) {
      console.error("เกิดข้อผิดพลาดในการเพิ่มร้านอาหาร:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Add Restaurant</h2>

        <div className="form-control">
          <label className="label font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="เช่น ชาบูอร่อยเด็ด"
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Type</label>
          <input
            type="text"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="เช่น ชาบู, ปิ้งย่าง"
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">Image URL</label>
          <input
            type="text"
            name="img"
            value={form.img}
            onChange={handleChange}
            className="input input-bordered"
            placeholder="ลิงก์รูปภาพร้าน"
          />
        </div>

        <button type="submit" className="btn btn-success w-full">
          Add Restaurant
        </button>
      </form>
    </div>
  );
};

export default Add;
