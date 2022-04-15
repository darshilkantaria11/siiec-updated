import React from "react";
import "./css/Home.css";
import s from "./image/s.png";
import logo1 from "./image/logo1.PNG";
import rocket from "./image/rocket.png";
import Second from "./Second";
import Rotate from "./Rotate";
import Liteabout from "./Liteabout";
import Idea from "./Idea";
import Offer from "./Offer";
import News from "./News";
import Footer from "./Footer";
import Walloffame from "./Walloffame";


const Home = () => {


    return (
      <>
        <div className="container">
            

                <nav className="navbar">
                   
                </nav>
                <section className="content">
                <img className="imgs" src={s} alt='' /> <br />
                    <img className="imgs" src={logo1} alt='' />
                    <h3>We Work With</h3>
                    <h2>Aspiring Entreprenuers</h2>
                    <h3>to turn their ideas into</h3>
                    <h1>Thriving Ventures.</h1>
                </section>
                <aside className="aside">
                    <img className="imgs1" src={rocket} alt='' />
                </aside>
                <footer className="footer">
                    <button className="btnp" > Apply Now </button>
                    <p>supported by MOE's Institution's Innovation Council</p>
                    <p>funded by NewGen IEDC SRM</p>
                </footer>

            </div>
        


           
            <Second/>
       <Rotate/>
       <Liteabout/>
       <Walloffame/>
       <Offer/>
       
       <Idea/>
       <News/>
       <Footer/>

        </>
    );

}

export default Home;