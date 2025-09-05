import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (user.email === email && user.password === password) {
        alert("Login Successful ✅");
        router.push("/profile"); // Redirect to Profile
      } else {
        alert("Invalid Credentials ❌");
      }
    } else {
      alert("No account found. Please signup first.");
    }
  };

  return (
    <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ background: "#1f1f1f", padding: "40px", borderRadius: "10px", width: "300px", textAlign: "center" }}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={input} required /><br />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={input} required /><br />
          <button type="submit" style={button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const input: React.CSSProperties = { width: "100%", margin: "10px 0", padding: "10px", borderRadius: "5px", border: "1px solid #444", background: "#222", color: "#fff" };
const button: React.CSSProperties = { marginTop: "15px", padding: "10px", width: "100%", background: "#4CAF50", border: "none", color: "#fff", fontWeight: "bold", borderRadius: "5px", cursor: "pointer" };
