import { useEffect, useState } from "react";

export default function Wallet() {
  const [user, setUser] = useState<any>(null);
  const [amount, setAmount] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", padding: "30px" }}>
        <h2>Please login to access your wallet.</h2>
      </div>
    );
  }

  const handleTopUp = () => {
    if (!amount || isNaN(Number(amount))) {
      alert("Enter a valid amount");
      return;
    }

    const newBalance = user.walletBalance + Number(amount);

    // Recharge history entry
    const newRecharge = {
      game: "Wallet Top-Up",
      amount: Number(amount),
      date: new Date().toLocaleString(),
    };

    const history = JSON.parse(localStorage.getItem("rechargeHistory") || "[]");
    history.push(newRecharge);
    localStorage.setItem("rechargeHistory", JSON.stringify(history));

    // Update user balance
    const updatedUser = {
      ...user,
      walletBalance: newBalance,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setAmount("");

    alert(`✅ Successfully added ${amount} 💎 to wallet`);
  };

  return (
    <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>💎 Wallet</h2>

      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          background: "#1e1e1e",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
        }}
      >
        <h3>Current Balance</h3>
        <p style={{ fontSize: "22px", marginBottom: "20px" }}>💎 {user.walletBalance}</p>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #444",
            marginBottom: "15px",
            textAlign: "center",
          }}
        />

        <button
          onClick={handleTopUp}
          style={{
            background: "#4CAF50",
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add Balance
        </button>
      </div>
    </div>
  );
}
