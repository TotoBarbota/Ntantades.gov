import React from "react";
import "./Progress_Bar2.css";

function Progress_Bar() {
  return (
   <div class="line-container">
    <div className="steps-container">
      <div className="step">
        <div className="circle">1</div>
        <div className="label"> A</div>
      </div>
      <div className="line"> </div>
      <div className="step active">
        <div className="circle" style={{ color: "white" }}>2</div>
        <div className="label">B</div>
      </div>
      <div className="line"> </div>
      <div className="step">
        <div className="circle">3</div>
        <div className="label">Γ</div>
      </div>
      <div className="line"> </div>
      <div className="step">
        <div className="circle">4</div>
        <div className="label">Δ</div>
      </div>
      <div className="line"> </div>
      <div className="step">
        <div className="circle">5</div>
        <div className="label">E</div>
      </div>
     </div>
    </div>
  );
}

export default Progress_Bar;