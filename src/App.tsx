/** @format */

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import Menu from "./components/menu/menu";
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";

function App() {
   return (
      <div className="App">
         <div className="container">
            <Menu />
            <div className="forms">
               <PersonalInfo />
               <div className="navigation">
                  <button>Next Step</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
