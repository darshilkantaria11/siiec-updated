import React from "react";
import "./css/Home.css";
import s from "./image/s.png";
import logo1 from "./image/logo1.PNG";
import rocket from "./image/rocket.png";


const Home = () => {

const handleClick = ()=>{
    
}
    return (
        
        <div className="container">
            

                <nav className="navbar">
                    <img className="imgs" src={s} alt='' />
                </nav>
                <section className="content">
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
                    <button className="btnp" onClick={handleClick}> Apply Now </button>
                    <p>supported by MOE's Institution's Innovation Council</p>
                    <p>funded by NewGen IEDC SRM</p>
                </footer>

            </div>
            
        // </div>
    );

}

export default Home;