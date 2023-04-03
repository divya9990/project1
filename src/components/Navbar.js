import React from 'react';
import image from './containt/techno-logo.webp';
import { a} from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }
  render() { 
    return ( 
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid container">
          <a className="navbar-brand" href="#">
            <img style={{height:'auto', width:'250px'}} src={image} alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
             <li className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                  Solution
                </a>
                
                <ul className="dropdown-menu nav-item1 ">
                    <h4 >Solution</h4>
                    <div className="row">
                        <div className="col">
                            
                            <li><a className="dropdown-item" href="#">Coustom Web solution</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Digtal Marketing Solution</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">E-coummers Solution</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Mobile Application Development</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Open Source Solutions</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Web & UI/UX Design</a></li>
                        </div>
                    </div>
                </ul>
            </li>

            <li className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                  Technology
                </a>
                
                <ul className="dropdown-menu nav-item1 ">
                    <h4 >Technology</h4>
                    <div className="row">
                        <div className="col">
                            
                            <li><a className="dropdown-item" href="#">Android Devlopment </a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Graphic Design</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">IOS Development</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Web Development</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Web Designing</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Webpress Development</a></li>
                        </div>
                    </div>
                </ul>
            </li>

            <li className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                  Industries
                </a>
                
                <ul className="dropdown-menu nav-item1 ">
                    <h4 >Industries</h4>
                    <div className="row">
                        <div className="col">
                            
                            <li><a className="dropdown-item" href="#">Agensies</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Enterprises</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Startups</a></li>
                        </div>
                    </div>
                </ul>
            </li>
            <li className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  
                  Our Work
                </a>
                
                <ul className="dropdown-menu nav-item1 ">
                    <h4 >Our Work</h4>
                    <div className="row">
                        <div className="col">
                            
                            <li><a className="dropdown-item" href="#">Portfolio</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Case Studies</a></li>
                            
                        </div>
                    </div>
                </ul>
            </li>

             
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Contact-Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Career</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
