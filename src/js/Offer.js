import React from "react";
import "./css/Offer.css";
import p1 from "./image/p1.png";
import p2 from "./image/p2.png";
import p3 from "./image/p3.png";
import p4 from "./image/p4.png";
import p5 from "./image/p5.png";
import p6 from "./image/p6.png";
import p7 from "./image/p7.png";
import p8 from "./image/p8.png";
import p9 from "./image/p9.png";
import p10 from "./image/p10.png";
import p11 from "./image/p11.png";
import p12 from "./image/p12.png";
import Side_image from "./image/Side_image.png";

const Offer = () => {
  return (
    <div className="kk">
      <div className="he">
        <div className="jk">
          <p id="what">What We</p>
          <p id="offer">OFFER</p>
        </div>

        <div className="Offer1">
          <div className="myimg">
            <img src={p1} alt="Seed Funding" />{" "}
          </div>
          <div className="myimg">
            <img src={p2} alt="Work Space" />{" "}
          </div>
          <div className="myimg">
            <img src={p3} alt="Legal Assistance" />{" "}
          </div>
          <div className="myimg">
            <img src={p4} alt="Design Branding" />{" "}
          </div>
          <div className="myimg">
            <img src={p5} alt="Patent Registration" />{" "}
          </div>
          <div className="myimg">
            <img src={p6} alt="Industry Advisors" />{" "}
          </div>
          <div className="myimg">
            <img src={p7} alt="Cloud Credits" />{" "}
          </div>
          <div className="myimg">
            <img src={p8} alt="Technical Mentorship" />{" "}
          </div>
          <div className="myimg">
            <img src={p9} alt="Fabrication Facility" />{" "}
          </div>
          <div className="myimg">
            <img src={p10} alt="Market Validation" />{" "}
          </div>
          <div className="myimg">
            <img src={p11} alt="Co-working Space" />{" "}
          </div>
          <div className="myimg">
            <img src={p12} alt="Alumni Connect" />{" "}
          </div>
        </div>
        <img className="myman" src={Side_image} />
      </div>
    </div>
  );
};

export default Offer;
