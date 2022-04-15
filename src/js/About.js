import React from "react";
import "./css/About.css"
import about from "./image/about.svg";
import logotop from "./image/logotop.jpg";
import a1 from "./image/a1.svg";
import a2 from "./image/a2.svg";
import a3 from "./image/a3.svg";
import a4 from "./image/a4.svg";
import a5 from "./image/a5.svg";
import News from "../js/News";
import Footer from "./Footer";

const About = () => {
    return (
        <>
        
        <div className="about">

            <div className="abouttop">
              <a href="">  <img className="imgbackabout" src={about} alt='' /></a>
                <div class="bottom-left">About Us</div>
                <div class="top-left"><a href=""><img className="imgabouttop" src={logotop} alt='' /></a></div>
            </div>


            <div className="aboutbottom">
                <div className="aboutb1">
                    <div className="aboutone">
                        <h2>About Us</h2>
                    </div>

                    <div className="abouta">
                        <p>We started off in 2015, with an aim to create an ambient</p>
                        <p>atmosphere for all you different minds out there and provide</p>
                        <p>exciting new opportunities to let your dreams evolve into realities</p>
                        <p>and in the process make this world a better place.</p>
                    </div>
                    <div className="aboutb">
                        <img className="aboutvector" src={a1} alt='' />
                    </div>

                </div>


                
                <div className="aboutb1">
                    <div className="aboutone">
                        <h2>What do we do?</h2>
                    </div>
                        
                    

                    <div className="abouta">
                        <p>Remember the last time you had a Eureka moment create</p>
                        <p>something and you went on discussing it only to have your idea</p>
                        <p>discarded as being 'impossible' or because you thought you didn't</p>
                        <p>have the resources or expertise to do so? Well we are here waiting</p>
                        <p>for you and for everyone who wants to innovate.</p>
                    </div>
                    <div className="aboutb">
                        <img className="aboutvector" src={a2} alt='' />
                    </div>

                </div>

                <div className="aboutb1">
                    <div className="aboutone">
                        <h2>How we do it?</h2>
                    </div>

                    <div className="abouta">
                        <p>We help to connect. So, let’s say you have a certain skill set e.g.</p>
                        <p>designing, photography, content writing etc. So once you post</p>
                        <p>your profile with us, you become visible to the whole industry</p>
                        <p>looking for people like you. If their requirements get matched,</p>
                        <p>you might land up with an assignment/internship/job with them.</p>
                        <p>Amazing isn't it? Whether you have an idea or not, your spirit of</p>
                        <p>learning and contributing is all that we are looking for and value.</p>
                    </div>
                    <div className="aboutb">
                        <img className="aboutvector" src={a3} alt='' />
                    </div>

                </div>


                <div className="aboutb1">
                    <div className="aboutone">
                        <h2>What Does The SIIC Do For Startups?</h2>
                    </div>

                    <div className="abouta">
                        <p>The SIIC is an incubator, and therefore, it does things like</p>
                        <p>providing infrastructure, funding, mentorship, workspace and the</p>
                        <p>overall nurturing that a team/startup requires. Straight from the</p>
                        <p>inception of an idea to the emergence of said idea into an end</p>
                        <p>result, the SIIC coaches teams/startups through the entire</p>
                        <p>process.</p>
                    </div>
                    <div className="aboutb">
                        <img className="aboutvector" src={a4} alt='' />
                    </div>

                </div>


                <div className="aboutb1">
                    <div className="aboutone">
                        <h2>Who can join us?</h2>
                    </div>

                    <div className="abouta">
                        <p>YOU. The mere fact that you have taken time to explore us is</p>
                        <p>testimony enough that you have what we are looking for:</p>
                        <p>aspirations. And trust us, we are here to nurture your aspirations.</p>
                        <p></p>So come join us as we take a leap of faith into the future.
                    </div>
                    <div className="aboutb">
                        <img className="aboutvector" src={a5} alt='' />
                    </div>

                </div>



            </div>

        </div>
        <News/>
        <Footer/>
        </>
    );
}

export default About;