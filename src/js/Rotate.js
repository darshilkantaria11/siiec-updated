import React from "react";
import "./css/Rotate.css";
import a from "./image/a.png";
import b from "./image/b.png";
import c from "./image/c.png";
import d from "./image/d.png";
import e from "./image/e.png";
import f from "./image/f.png";
import g from "./image/g.png";
import h from "./image/h.png";
import i from "./image/i.png";
import j from "./image/j.png";
import k from "./image/k.png";

const Rotate = () => {
    return ( 
        <div className="list">
            
                <div><img className="imgsr" src={a} alt='' /></div>
                <div><img className="imgsr" src={b} alt='' /></div>
                <div><img className="imgsr" src={c} alt='' /></div>
                <div><img className="imgsr" src={d} alt='' /></div>
                <div><img className="imgsr" src={e} alt='' /></div>
                <div><img className="imgsr" src={f} alt='' /></div>
                <div><img className="imgsr" src={g} alt='' /></div>
                <div><img className="imgsr" src={h} alt='' /></div>
                <div><img className="imgsr" src={i} alt='' /></div>
                <div><img className="imgsr" src={j} alt='' /></div>
                <div><img className="imgsr" src={k} alt='' /></div>
            
        </div>
     );
}
 
export default Rotate;