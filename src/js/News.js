import React from "react";
import "./css/News.css";

const News = () => {
    return (
        <div className="contnews">
            <div className="news1">
                <h4 className="jon">Join Our Newsletter</h4>
                <p id="ge">Gets Emails weekly...</p>
                <input id="ema" type="email" />
                <button id="kl">Subscribe</button>
            </div>
        </div>
    );
}

export default News;