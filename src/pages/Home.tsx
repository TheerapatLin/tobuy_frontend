// src/pages/Home.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate(); // ใช้เพื่อเปลี่ยน route

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-10">Welcome to Shopping List</h1>

      <div className="flex gap-10">
        {/* ปุ่ม Sign In */}
        <button
          onClick={() => navigate("/signin")}
          className="px-10 py-5 text-2xl font-semibold bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
        >
          Sign In
        </button>

        {/* ปุ่ม Sign Up */}
        <button
          onClick={() => navigate("/signup")}
          className="px-10 py-5 text-2xl font-semibold bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Home;
