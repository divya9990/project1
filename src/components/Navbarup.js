import React from "react";
import "./CSS/Navbar.css";
class Navbarup extends React.Component {
     
    render() { 
        return (
      <div className="top-nav">      
        <div className="header-container container">
          
          <div className="row header-container-shadow dropdown ">
          
            <div className="col-md-9 col-lg-10 d-flex justify-content-start header-contact-side ">

              
              <ul className="contact-list d-flex">
                <li>
                <i className="fa-solid fa-phone-volume"></i>
                  <a href="tel:+1-646-860-0313">US : +1-646-860-0313</a>
                </li>
                <li >
                
                  <a href="tel:+44-208-095-3131">UK : +44-208-095-3131</a>
                </li>
                <li >
                  <a href="tel:+91-98720-99910">IN : +91-98720-99910</a>
                </li>
              </ul>
            </div >
            <div className="col-md-3 col-lg-2 d-flex justify-content-end header-hire-btn-side">
              <a href="#" className="btn-border" style={{opacity: 1}}>Hire Your Dedicated Team</a>
            </div>
            
          </div>
          
        </div>
      </div>
      
        );
    }
}
 
export default Navbarup;