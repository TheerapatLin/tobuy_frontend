// src/components/SignUpForm.tsx
import { useState } from "react";

export default function SignUpForm() {
  // สร้าง state เพื่อเก็บข้อมูลที่กรอกเข้ามา
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันการ refresh หน้าเว็บ

    if (!username || !email || !password) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // ยังไม่ส่ง API จริง แค่ log ดูก่อน
    console.log("Sign Up Data:", { username, email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Sign Up</h2>

      <div style={{ marginBottom: "10px" }}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Sign Up
      </button>
    </form>
  );
}
