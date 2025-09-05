export default function Login() {
  return (
    <div style={{ 
      background: "#121212", 
      color: "#fff", 
      minHeight: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center" 
    }}>
      <div style={{ background: "#1f1f1f", padding: "40px", borderRadius: "10px", width: "300px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "20px" }}>Login</h2>
        <form>
          <input type="text" placeholder="Username" style={input} /><br />
          <input type="password" placeholder="Password" style={input} /><br />
          <button style={button}>Login</button>
        </form>
      </div>
    </div>
  );
}

const input: React.CSSProperties = {
  width: "100%",
  margin: "10px 0",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #444",
  background: "#222",
  color: "#fff"
};

const button: React.CSSProperties = {
  marginTop: "15px",
  padding: "10px",
  width: "100%",
  background: "#4CAF50",
  border: "none",
  color: "#fff",
  fontWeight: "bold",
  borderRadius: "5px",
  cursor: "pointer"
};
