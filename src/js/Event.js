import React from "react";
import "./css/Event.css";
import bootcamp from "./image/bootcamp.png";
import triumphtalks from "./image/triumphtalks.jpg";
import cred from "./image/cred.png";
import Footer from "./Footer";

const Event = () => {
    return (

        <>
        <div>

            <div className="contevent">

                <div className="event1">
                    <h1>Triumph Talks</h1>
                </div>
                <div className="event2">
                    <p>Triumph Talks, a series of talks where eminent personalities have a one on one</p>
                    <p>conversations with the students to develop the thinking and mindset required to</p>
                    <p>excel in their respective fields.</p>
                </div>
            </div>

            <div className="event3">
                <h3 className="animate-charcter">Past Events.</h3>
            </div>

            <div className="event4">

                <div className="eventbox">
                    <div><img className="imgevent" src={bootcamp} alt='' /> </div>
                    <div className="evecon"> <h3>BootCamp</h3>
                        <p>The Bootcamp is centred around the Berkeley Method of Entrepreneurship, which helps students understand general concepts through practice, observation, and critical thinking. Every entrepreneur's path is different and students come to us at many different stages in that path. Our goal is to help students discover the next milestone on their journey to becoming successful entrepreneurs.</p>
                    </div>
                </div>

                <div className="eventbox">
                    <div><img className="imgevent" src={triumphtalks} alt='' /> </div>
                    <div className="evecon"> <h3>Triumph Talks</h3>
                        <p>Triumph Talks, one of our flagship events, is a series of talks consisting of one on one conversations of eminent global personalities with our student representative in form of a fireside chat followed by questions posed by the audience of our community. It helps develop the thinking and mindset required to excel in various domains and specializations while keeping entrepreneurship in mind.</p>
                    </div>
                </div>

                <div className="eventbox">
                    <div><img className="imgevent" src={cred} alt='' /> </div>
                    <div className="evecon"> <h3>EXPO</h3>
                        <p>SIIC presents "EXPO" , an event where the best teams of SRM show-off their finest craftsmanship and discuss at length about their products.  For the last edition, we had the extremely talented UAV, SCRO and Team Spars showcasing their latest and greatest products and prototypes.</p>
                    </div>
                </div>

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

export default Event;