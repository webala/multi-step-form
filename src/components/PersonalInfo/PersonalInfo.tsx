/** @format */

import { useState } from "react";
import "./PersonalInfo.scss";

function PersonalInfo() {
   const [error, setError] = useState()
   return (
      <form action="#" className="personal-info">
         <div className="heading">
            <h1>Personal info</h1>
            <p>Please provide your name, email address and pone number.</p>
         </div>
         <div className="field">
            <div className="input-info">
               <label htmlFor="name">Name</label>
               {error ? <p>{error}</p> : null}
            </div>
            <input type="text" placeholder="e.g. Stephen King" />
         </div>
         <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="e.g. stephenking@lorem.com" />
         </div>
         <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" placeholder="e.g. +1 234 567 890" />
         </div>
      </form>
   );
}

export default PersonalInfo;
