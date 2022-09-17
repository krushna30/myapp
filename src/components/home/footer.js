import React, { Component } from 'react'
import "./home.css";
export default class footer extends Component {
    render() {
        return (
            <div>
            
                <footer className="bg w3-container w3-padding-64 w3-center w3-opacity w3-red w3-xlarge">
                    <i className="fa fa-facebook-official w3-hover-opacity" /> 
                    <i className="fa fa-instagram w3-hover-opacity" />
                    <i className="fa fa-snapchat w3-hover-opacity" />
                    <i className="fa fa-pinterest-p w3-hover-opacity" />
                    <i className="fa fa-twitter w3-hover-opacity" />
                    <i className="fa fa-linkedin w3-hover-opacity" />
                   <br/>
                   <h5>*the content provided by this website is not own by the website creator for any query contact us . </h5>

                </footer>
               
            </div>
        )
    }
}
