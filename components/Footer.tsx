export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>© 2025 MLBB Recharge. All Rights Reserved.</p>
      <p style={{ marginTop: "5px", fontSize: "14px", color: "#2196F3" }}>
        Made with 💙 for gamers
      </p>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  background: "#1f1f1f",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
  marginTop: "40px",
  borderTop: "2px solid #2196F3",
};
