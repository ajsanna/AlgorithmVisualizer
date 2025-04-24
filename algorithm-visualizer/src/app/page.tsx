import Image from "next/image";
import React from "react";
import "./page.css";
import AlgorithmVisualizer from "./AlgorithmVisualizer/AlgorithmVisualizer.jsx";
import Header from "./components/Header";
//Notes for myself in development
// # <- ids , . <- classes
// 1. Create a main div


export default function Home() {
  return (
    <div className="App">
      <Header />
      <AlgorithmVisualizer></AlgorithmVisualizer>
      <div className="footer">
        <p style={{fontSize: ".75vw"}}>Built By Alexander J Sanna | All Rights Resereved | Inquiries: alexsanna50@gmail.com | 04-2025</p>
      </div>
    </div>
  );
}
