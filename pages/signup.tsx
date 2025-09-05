import { useState } from "react";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    const user = { username, email, password, walletBalance: 500, rechargeHistory: [] };
    localStorage.setItem("user", JSON.stringify(user)); // 🔥 Save in localStorage

    alert("Signup Successful ✅");
    router.push("/login"); // Redirect to Login
  };

  return (
    <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "#1f1f1f", padding: "40px", borderRadius: "10px", width: "300px", textAlign: "center" }}>
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} style={input} required /><br />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={input} required /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={input} required /><br />
          <button type="submit" style={button}>Signup</button>
        </form>
      </div>
    </div>
  );
}

const input: React.CSSProperties = { width: "100%", margin: "10px 0", padding: "10px", borderRadius: "5px", border: "1px solid #444", background: "#222", color: "#fff" };
const button: React.CSSProperties = { marginTop: "15px", padding: "10px", width: "100%", background: "#2196F3", border: "none", color: "#fff", fontWeight: "bold", borderRadius: "5px", cursor: "pointer" };
