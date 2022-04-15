import Home from "./js/Home";
import About from "./js/About";
import Partner from "./js/Partner";
import Event from "./js/Event";
import Cources from "./js/Cources";

import Navigation from "./js/Navigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
   <>
       <Router>
          
             
             <Routes>
               <Route path="/" element={ <Home/>}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/event" element={<Event/>}/>
               <Route path="/partner" element={<Partner/>}/>
               <Route path="/cources" element={<Cources/>}/>
             </Routes>



       </Router>

   </>
  );
}

export default App;
