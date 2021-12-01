import React, { useState, useEffect , Component } from "react";
import "./Style.css";

export default function Header(props) {

  const spans = document.querySelectorAll('.word span');

  spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
      e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
      e.target.classList.remove('active');
    });
    // Initial animation
    
    if(props.result==="")
    {
    setTimeout(() => {
      span.classList.add('active');
    }, 100 * (idx+1))
  }
  });

  return (
      <div>
    <header className="Header">
      <img src="https://cdn.icon-icons.com/icons2/390/PNG/512/tic-tac-toe_39453.png" className="Logo" alt="logo" />      
   {/* tic-tac-toe title */}
  <div class="word" alt="word">
  <span>T</span>
  <span>I</span>
  <span>C</span>
  <span>-</span>
  <span>T</span>
  <span>A</span>
  <span>C</span>
  <span>-</span>
  <span>T</span>
  <span>O</span>
  <span>E</span>
  </div>
  {/* button */}
 <div className="refresh" alt="refresh">
  <button class=" button-48 "  role="button" onClick={props.onClick}><span class="text">New-Game</span></button>
  </div>
  </header>
    </div>
  );
}
