/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="App">
         <div className="container">
            <div className="menu">
               <div>
                  <p>1</p>
               </div>
               <div>
                  <p>2</p>
               </div>
               <div>
                  <p>3</p>
               </div>
               <div>
                  <p>4</p>
               </div>
            </div>
            <form action="#" className="personal-info">
               <div className="heading">
                  <h1>Personal info</h1>
                  <p>
                     Please provide your name, email address and pone number.
                  </p>
               </div>
               <div className="field">
                  <label htmlFor="name">Name</label>
                  <input type="text" placeholder="e.g. Stephen King" />
               </div>
               <div className="field">
                  <label htmlFor="email">Email Address</label>
                  <input
                     type="email"
                     placeholder="e.g. stephenking@lorem.com"
                  />
               </div>
               <div className="field">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" placeholder="e.g. +1 234 567 890" />
               </div>
            </form>
            <div className="navigation">
               <button>Next Step</button>
            </div>
         </div>
      </div>
   );
}

export default App;
