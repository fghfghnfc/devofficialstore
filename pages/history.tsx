import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState<any[]>([]);

  // localStorage se data load karna
  useEffect(() => {
    const storedHistory = localStorage.getItem("rechargeHistory");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  return (
    <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>📜 Recharge History</h2>

      {history.length === 0 ? (
        <p style={{ textAlign: "center" }}>No recharge history yet.</p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            background: "#1e1e1e",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead style={{ background: "#333" }}>
            <tr>
              <th style={{ padding: "12px", borderBottom: "1px solid #444" }}>Game</th>
              <th style={{ padding: "12px", borderBottom: "1px solid #444" }}>Amount</th>
              <th style={{ padding: "12px", borderBottom: "1px solid #444" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: "12px", borderBottom: "1px solid #444" }}>{item.game}</td>
                <td style={{ padding: "12px", borderBottom: "1px solid #444" }}>
                  {item.amount} 💎
                </td>
                <td style={{ padding: "12px", borderBottom: "1px solid #444" }}>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
