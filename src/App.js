import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div
      style={{
        backgroundColor: "gray",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "350px",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h1 style={{textAlign:"center"}}>Interactive Counter & Message App</h1>

        <h3 style={{textAlign:"center"}}>Jayvee C. Garcia</h3>

        <h3 style={{textAlign:"center"}}>BSIT-2A</h3>

        <h1 style={{ fontSize: "70px", margin: "10px 0" }}>{count}</h1>

        {count >= 5 && (
          <h2 style={{ color: "green", margin: "0 0 10px 0" }}>Goal Reached!</h2>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            marginBottom: "30px",
            gap: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <button
              onClick={increase}
              style={{
                backgroundColor: "#529E66",
                color: "white",
                border: "none",
                width: "80px",
                height: "50px",
                borderRadius: "5px",
                fontSize: "24px",
                cursor: "pointer",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
              }}
            >
              ↑
            </button>

            <button
              onClick={decrease}
              style={{
                backgroundColor: "#CC5656",
                color: "white",
                border: "none",
                width: "80px",
                height: "50px",
                borderRadius: "5px",
                fontSize: "24px",
                cursor: "pointer",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
              }}
            >
              ↓
            </button>
          </div>
        
          <button
            onClick={reset}
            style={{
              backgroundColor: "#5A7184",
              color: "white",
              border: "none",
              width: "180px",
              height: "40px",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)"
            }}
          >
            Reset
          </button>
        </div>

        <input
          type="text"
          placeholder="Please type your text here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid gray",
          }}
        />

<h3 style={{ marginTop: "20px" }}>Your Text:</h3>

<div
  style={{
    minHeight: "40px",
    padding: "10px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    wordWrap: "break-word",
    textAlign: "left",
  }}
>
  <p style={{ margin: 0, color: message ? "black" : "gray" }}>
    {message || "No input text yet..."}
  </p>
</div>

      </div>
    </div>
  );
}

export default App;
