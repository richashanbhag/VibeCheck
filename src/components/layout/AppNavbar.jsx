import React from "react";

const AppNavbar = () => {
  return (
    <div
      style={{
        background: "#212529",
        color: "white",
        padding: "12px 20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Logo */}
      <img
        src="/logo.jpg"
        alt="VibeCheck Logo"
        style={{
          height: "36px",
          width: "36px",
          borderRadius: "50%",
          objectFit: "contain",
        }}
      />

      {/* App Name */}
      <h3 style={{ margin: 0 }}>VibeCheck</h3>
    </div>
  );
};

export default AppNavbar;
