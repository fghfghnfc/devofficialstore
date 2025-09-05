import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", padding: "30px" }}>
        <h2>Please login to view profile.</h2>
      </div>
    );
  }

  const handleTopUp = () => {
    const amount = prompt("Enter amount to top-up 💎:");
    if (!amount || isNaN(Number(amount))) return;

    const newBalance = user.walletBalance + Number(amount);

    const updatedUser = {
      ...user,
      walletBalance: newBalance,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);

    alert(`✅ Successfully topped up ${amount} 💎`);
  };

  return (
    <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      {/* Top Right Menu */}
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ position: "relative" }}>
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontSize: "24px",
              cursor: "pointer",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ⋮
          </button>
          {menuOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "30px",
                background: "#1e1e1e",
                border: "1px solid #333",
                borderRadius: "6px",
                padding: "10px",
                minWidth: "120px",
              }}
            >
              <button
                style={{
                  width: "100%",
                  padding: "8px",
                  background: "transparent",
                  border: "none",
                  color: "#fff",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                ⚙️ Settings
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Profile Card */}
      <div
        style={{
          maxWidth: "500px",
          margin: "auto",
          background: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        {/* Avatar */}
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="avatar"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            marginBottom: "15px",
            border: "3px solid #4CAF50",
          }}
        />

        {/* Username */}
        <h2>{user.username || "Guest User"}</h2>

        {/* Email */}
        <p style={{ color: "#ccc", marginBottom: "20px" }}>{user.email}</p>

        {/* Top-Up Button */}
        <button
          onClick={handleTopUp}
          style={{
            background: "#4CAF50",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          💎 Top-Up
        </button>

        {/* Wallet */}
        <div
          style={{
            background: "#2c2c2c",
            padding: "15px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <h3>Wallet Balance</h3>
          <p style={{ fontSize: "20px" }}>💎 {user.walletBalance}</p>
        </div>

        {/* Recharge History */}
        <h3>Recharge History</h3>
        <div
          style={{
            background: "#2c2c2c",
            padding: "15px",
            borderRadius: "8px",
            marginTop: "10px",
          }}
        >
          {user.history && user.history.length > 0 ? (
            <ul style={{ listStyle: "none", padding: 0 }}>
              {user.history.map((h: any, index: number) => (
                <li key={index}>
                  {h.amount} 💎 - {h.date}
                </li>
              ))}
            </ul>
          ) : (
            <p>No recharge history yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
