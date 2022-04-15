import React from 'react'
import "./css/Team.css";
import shantanu from "./image/shantanu.jpg";

export const Team = () => {
  return (
    <div>
        <div className="card">
          <img src={shantanu} alt="" />
  {/* <img src={shantanu} alt="Denim Jeans" style="width:100%"> */}
  <h1></h1>
  <p className="price">$19.99</p>
  <p>Some text about the jeans..</p>
  <p><button>Add to Cart</button></p>
</div>
        
    </div>
  )
}
export default Team;
