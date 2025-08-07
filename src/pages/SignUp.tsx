import { useState } from "react";

export default function SignUp() {
  // 👇 State สำหรับ input ทุกช่อง
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // 👇 เมื่อกดปุ่ม SignUp
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // ❌ ป้องกันการ reload หน้าเว็บ

    // 🔐 ตรวจสอบว่า password กับ confirm password ตรงกันไหม
    if (password !== confirmPassword) {
      setError("Password และ Confirm Password ไม่ตรงกัน");
      return;
    }

    // ✅ ถ้าผ่าน validation ทั้งหมด
    setError(""); // เคลียร์ error
    console.log("Signup Data:", {
      username,
      email,
      password,
    });

    // 💡 ตรงนี้สามารถส่งข้อมูลไปยัง backend ได้
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "1rem" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* username */}
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Username</label><br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>

        {/* email */}
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Email</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>

        {/* password */}
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Password</label><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>

        {/* confirm password */}
        <div style={{ marginBottom: "0.5rem" }}>
          <label>Confirm Password</label><br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            style={{ width: "100%" }}
          />
        </div>

        {/* แสดง error ถ้ามี */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* ปุ่ม SignUp */}
        <button type="submit" style={{ marginTop: "1rem", width: "100%" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
