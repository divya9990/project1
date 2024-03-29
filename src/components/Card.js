import React from 'react';
import './CSS/Card.css'



class Card extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                    
                <div className="col-md-4 col-10 mx-auto">
                    <div className="card"  style={{width: '18rem'}}>
                        <img src={this.props.imgsrc} alt="img"className=" card-img-top"  />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold ">{this.props.title}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="" className="btn btn-border">Read more</a>
                        </div>
                    </div>
                </div>
              
           

        );
    }
    
}
export default Card;

        