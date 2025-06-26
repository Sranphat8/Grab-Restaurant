/*
 * ไฟล์นี้คือจุดเริ่มต้นของแอปพลิเคชัน React
 * มันทำหน้าที่หลักๆ คือ:
 * 1. นำเข้าเครื่องมือที่จำเป็นทั้งหมด เช่น React (สำหรับสร้าง UI), ReactDOM (สำหรับแสดงผลบนเว็บ),
 * และ React Router (สำหรับจัดการการเปลี่ยนหน้าในแอป)
 * 2. กำหนดเส้นทางต่างๆ ของเว็บไซต์ (เช่น หน้าแรก, หน้าเกี่ยวกับเรา, หน้าสินค้า)
 * 3. สั่งให้แอปพลิเคชัน React เริ่มทำงานและแสดงผลบนหน้าเว็บ
 * พูดง่ายๆ คือ ไฟล์นี้เป็นเหมือน 'ศูนย์บัญชาการ' ที่ทำให้แอปของเราเริ่มทำงานและโชว์เนื้อหาให้ผู้ใช้เห็น
 */

// นำเข้าไลบรารี React ซึ่งเป็นแกนหลักในการสร้าง User Interface (UI)
import React from "react";

// นำเข้าไลบรารี ReactDOM ซึ่งทำหน้าที่เชื่อมต่อ React Component ไปแสดงผลบนเว็บเบราว์เซอร์
import ReactDOM from "react-dom/client";

// นำเข้า RouterProvider จาก react-router เพื่อจัดการระบบการเปลี่ยนหน้า ในแอปพลิเคชัน
import { RouterProvider } from "react-router";

// นำเข้าอ็อบเจกต์ 'router' ที่เราได้กำหนดเส้นทาง (routes) ต่างๆ ไว้ในไฟล์ "./routes/Router.js"
import router from "./routes/Router";

// นำเข้าไฟล์ CSS หลัก เพื่อกำหนดรูปแบบและสไตล์ให้กับหน้าตาของแอปพลิเคชัน
import "./index.css";

// ส่วนนี้คือการเริ่มต้นแอปพลิเคชัน React ของเรา
// 1. ค้นหา HTML Element ที่มี id="root" ในไฟล์ index.html
// 2. สร้าง React "Root" เพื่อให้ React สามารถจัดการการแสดงผลภายใน Element นั้นได้
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode> เป็น Component ที่ช่วยในการตรวจสอบปัญหาที่อาจเกิดขึ้นใน React ระหว่างการพัฒนา
  // มันจะช่วยแจ้งเตือนถ้ามีการใช้งาน API ที่ไม่เหมาะสม หรือมีพฤติกรรมที่ไม่ถูกต้อง
  <React.StrictMode>
    {/*
        <RouterProvider> เป็น Component ที่รับค่า 'router' เข้าไป
        เพื่อให้ระบบ Router ทำงานและจัดการการเปลี่ยนหน้าต่างๆ
        ตามที่เราได้กำหนดไว้ในไฟล์ router
    */}
    <RouterProvider router={router} />
  </React.StrictMode>
);