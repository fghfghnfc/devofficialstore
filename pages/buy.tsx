import { useEffect, useState } from "react";

export default function Buy() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", padding: "30px" }}>
        <h2>Please login to buy game top-ups.</h2>
      </div>
    );
  }

  // Sample games data
  const games = [
    {
      name: "Mobile Legends (MLBB)",
      img: "https://upload.wikimedia.org/wikipedia/en/6/60/Mobile_Legends_Bang_Bang_logo.png",
      packages: [50, 100, 250, 500],
    },
    {
      name: "PUBG Mobile",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/77/PUBG_logo.svg",
      packages: [60, 120, 325, 660],
    },
    {
      name: "Free Fire",
      img: "https://seeklogo.com/images/G/garena-free-fire-logo-1960E594CF-seeklogo.com.png",
      packages: [100, 210, 560, 1120],
    },
    {
      name: "Call of Duty Mobile",
      img: "https://upload.wikimedia.org/wikipedia/en/0/05/Call_of_Duty_Mobile_logo.png",
      packages: [80, 160, 420, 880],
    },
  ];

  const handleBuy = (game: string, amount: number) => {
    if (!user) return;

    // Wallet balance check
    if (user.walletBalance < amount) {
      alert("Not enough balance ❌");
      return;
    }

    // Update wallet
    const newBalance = user.walletBalance - amount;

    // Save to recharge history (localStorage)
    const newPurchase = {
      game,
      amount,
      date: new Date().toLocaleString(),
    };

    const history = JSON.parse(localStorage.getItem("rechargeHistory") || "[]");
    history.push(newPurchase);
    localStorage.setItem("rechargeHistory", JSON.stringify(history));

    // Update user data also
    const updatedUser = {
      ...user,
      walletBalance: newBalance,
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);

    alert(`Recharge Successful ✅ You bought ${amount} 💎 for ${game}`);
  };

  return (
    <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>🎮 Buy Game Top-Ups</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {games.map((game) => (
          <div
            key={game.name}
            style={{
              background: "#1e1e1e",
              borderRadius: "12px",
              padding: "20px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            {/* Game Image */}
            <img
              src={game.img}
              alt={game.name}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "contain",
                marginBottom: "15px",
              }}
            />

            {/* Game Name */}
            <h3 style={{ marginBottom: "15px" }}>{game.name}</h3>

            {/* Packages */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {game.packages.map((amount) => (
                <button
                  key={amount}
                  style={{
                    padding: "12px",
                    background: "#4CAF50",
                    border: "none",
                    borderRadius: "8px",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontWeight: "bold",
                  }}
                  onClick={() => handleBuy(game.name, amount)}
                >
                  Buy {amount} 💎
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
