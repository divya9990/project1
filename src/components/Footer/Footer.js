import React from "react";
import images from "../containt/techno-logo.webp"
import'./footer.css';

 class Footer extends React.Component {
    

    render() {
        return (
            <footer className="bg-dark text-white pd-4">
                       <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            
                            <img src={images} alt="" />
                            
                            
                        </div>
                <div className="container text-center text-md-left">
                    <div className="row text-center text-md-left">
                       
                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-5">
                            <h5 className="text-uppercase font-weight-bold mb-4 ">EXPERTISE</h5>
                            <p>
                                <a href="#" className="footer_a" >Coustom WEb Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Open Source Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Mobile Development</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >E-Commerse Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Digital Marketing Solution</a>
                            </p>

                        </div>
                        <div className="col-md-2 col-lg-2 col-xl- mx-auto mt-5">
                            <h5 className="text-uppercase font-weight-bold mb-4 ">EXPERTISE</h5>
                            <p>
                                <a href="#" className="footer_a" >Coustom WEb Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Open Source Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Mobile Development</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >E-Commerse Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Digital Marketing Solution</a>
                            </p>

                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-5">
                            <h5 className="text-uppercase font-weight-bold mb-4 ">EXPERTISE</h5>
                            <p>
                                <a href="#" className="footer_a" >Coustom WEb Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Open Source Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Mobile Development</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >E-Commerse Solution</a>
                            </p>
                            <p>
                                <a href="#" className="footer_a" >Digital Marketing Solution</a>
                            </p>

                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-5">
                            <h5 className="text-uppercase font-weight-bold mb-4 ">Contact</h5>
                            <p>
                                <i className="fa fa-home mr-3"></i>     Home
                            </p>
                            <p>
                                <i className="fa fa-envelope mr-3"></i> Email
                            </p>
                            <p>
                                <i className="fa fa-phone mr-3"></i> Email
                            </p>
                            <p>
                                <i className="fa fa-print mr-3"></i> Email
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
 }
 export default Footer;