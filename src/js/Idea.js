import React from "react";
import "./css/Idea.css";
import darshil from "./image/darshil.png";

const Idea = () => {
    return (
        <div className="contidea">
            <div className="idea1">
                <div className="i1">
                    <h3 className="i1a">
                        Working on Something
                    </h3>
                    <h3 className="i1b">
                        INTERESTING
                    </h3>
                </div>
                <div className="i2">
                    <h1 className="i2a">
                        
                    </h1>
                </div>
                <div className="i3">
                    <h4 className="i3a">
                        Let's talk
                    </h4>
                </div>
                <div className="i4">
                    <input type="text" placeholder="Name" className="i4a" /><br />
                    <input type="text" placeholder="Email" className="i4a" /><br />
                    <textarea name="comments" className="i4a" placeholder="Comments" rows="13"></textarea>
                    <button className="i4b">Submit</button>
                </div>

            </div>
            <div className="idea2">
            
                <img className="i5a" src={darshil} alt='' />
            </div>
        </div>
    );
}

export default Idea;