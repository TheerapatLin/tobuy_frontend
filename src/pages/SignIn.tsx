import { useState } from "react";

export default function SignIn() {
  // สร้าง state สำหรับเก็บค่าที่ผู้ใช้กรอก
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // ฟังก์ชันที่เรียกตอนกด Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // ป้องกันไม่ให้หน้า reload
    console.log(`U : ${username}\nP : ${password}`)
    // try {
    //   const res = await fetch("http://localhost:8080/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ username, password }),
    //   });

    //   const data = await res.json();

    //   if (res.ok) {
    //     // จำ JWT ไว้ใน localStorage
    //     localStorage.setItem("token", data.token);
    //     alert("Login สำเร็จ");
    //     // ไปหน้าหลักต่อไป
    //     window.location.href = "/shopping-list";
    //   } else {
    //     alert(data.message || "Login Failed.");
    //   }
    // } catch (err) {
    //   console.error("Login error:", err);
    //   alert("Something's wrong.");
    // }
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 24 }}>
      <h2>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 16 }}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 8 }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: 10 }}>
          Login
        </button>
      </form>
    </div>
  );
}
