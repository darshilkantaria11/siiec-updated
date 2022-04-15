import React from "react";
import "./css/Partner.css"
import Projector from "./image/Projector.svg";
import pb1 from "./image/pb1.png";
import pb2 from "./image/pb2.png";
import pb3 from "./image/pb3.png";
import pb4 from "./image/pb4.png";
import pb5 from "./image/pb5.png";
import pb6 from "./image/pb6.png";
import pb7 from "./image/pb7.png";
import pb8 from "./image/pb8.png";
import pb9 from "./image/pb9.png";
import pb10 from "./image/pb10.png";
import pb11 from "./image/pb11.png";
import pb12 from "./image/pb12.png";
import pb13 from "./image/pb13.png";
import pb14 from "./image/pb14.png";
import Footer from "./Footer";
import "./css/Event.css"

const Patner = () => {
    return (
        <>
        <div className="contpatner">
            <div className="patop">
                <img className="imgpat" src={Projector} alt='' />
                <div className="partnerwrite">
                    <h2 class="parttitle">
                        <span class="title-word title-word-1">PA</span>
                        <span class="title-word title-word-2">RT</span>
                        <span class="title-word title-word-3">NE</span>
                        <span class="title-word title-word-4">RS</span>
                    </h2>
                    <div className="partnerdown">
                        <p>INNOVATE | INCUBATE | INSPIRE</p>
                    </div>
                </div>

            </div>

            <div className="patbottom">
                <ul>
                    <li><a href=""><img className="imgpatbot" src={pb1} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb2} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb3} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb4} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb5} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb6} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb7} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb8} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb9} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb10} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb11} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb12} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb13} alt='' /></a></li>
                    <li><a href=""><img className="imgpatbot" src={pb14} alt='' /></a></li>
                </ul>
            </div>

            <div className="eventjoin">
                <div> <h2 className="">Join us.</h2></div>
                <div> <p className="eventp">Anyone can predict the future... a visionary shapes it!</p></div>
                <div> <a className="eventa" href="">Apply now.</a></div>

            </div>


        </div>

        <Footer/>
        </>
    );
}

export default Patner;