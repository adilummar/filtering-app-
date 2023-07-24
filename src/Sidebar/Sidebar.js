import React from "react";
import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <h1>🛒</h1>
      </div>

      <Category />
      <Price></Price>
      <Colors></Colors>
    </section>
  );
}

export default Sidebar;
