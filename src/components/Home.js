import React from 'react';
import image from './containt/webbennner.png';
import image2 from './containt/Screenshot 2023-04-01 225428.png'
import Card from './Card'
import Imgdata from './Imgdata';


class Home extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <img src={image} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>First slide </h1>
                    <p>lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <img src={image} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Second slide </h1>
                    <p>lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={image} className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h1>Third slide label</h1>
                    <p>lorem ipsum dolor sit amet, consectetur</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <section id="header" className=" mt-5">
                <div className="container-fluid mb-2 d-flex align-item-center ">
                    <div className="row">
                        <div className="col-14 mx-auto">
                            <div className="row">
                                <div className="col-md-6 mt-5 pt-lg-5 order-1 order-lg-1 ">
                                    <h2>
                                    A PERFECT BLEND OF CREATIVITY AND TECHNICAL WIZARDRY
                                    </h2>
                                    <h5>
                                    Technocrats are known for their creative web design, custom web development, graphic design, e-commerce solutions, and mobile applications and solutions that are tailor-made only for you.
                                    We create a solution that makes business easy and technology an equal and impost partner for growth. Let us know what you want and we shall make for you a special recipe that fits all your dreams and requirements.
                                    </h5>
                                    <div className="col-md-4 col-lg-2 d-flex w-100">
                                        <a href="#" className="btn-border" style={{opacity: 1}}>Hire Your Dedicated Team</a>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-2 order-lg-1 mt-3 d-flex flex-coloum header-imag">
                                    <img src={image2} alt=""/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="my-4 ">
                    <div className="text-center">
                        <h1>KEY AREAS OF EXPERTISE</h1>
                        <h5>Our industry cover every aspect of app production and implementation.</h5>
                    </div>
                    <div className="container-fluid mb-5 ">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row mt-4 gy-4">
                                    {
                                        Imgdata.map((val,ind)=>{
                                            return <Card key={ind}
                                            imgsrc={val.Imgsrc}
                                            title={val.title}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

  
          
            </>
        );
    }
}
export default Home;