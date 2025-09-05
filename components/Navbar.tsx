import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={logoStyle}>MLBB Recharge 💎</div>
      <div style={menuStyle}>
        <Link href="/login" style={linkStyle}>Login</Link>
        <Link href="/signup" style={linkStyle}>Signup</Link>
        <Link href="/buy" style={linkStyle}>Buy</Link>
        <Link href="/wallet" style={linkStyle}>Wallet</Link>
        <Link href="/profile" style={linkStyle}>Profile</Link>
      </div>
    </nav>
  );
}

const navStyle: React.CSSProperties = {
  background: "#1f1f1f",
  padding: "15px 30px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: "0 2px 5px rgba(0,0,0,0.5)",
  position: "sticky",
  top: 0,
  zIndex: 1000
};

const logoStyle: React.CSSProperties = {
  color: "#4CAF50",
  fontSize: "20px",
  fontWeight: "bold",
};

const menuStyle: React.CSSProperties = {
  display: "flex",
  gap: "20px"
};

const linkStyle: React.CSSProperties = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: "bold",
  transition: "color 0.3s",
};
<Link href="/history">History</Link>
<Link href="/wallet">Wallet</Link>

