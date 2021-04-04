import React, { Component } from 'react';
import Pdf from '../Document/Calender.pdf';
import "./Accalender.css"
class Accalender extends Component {

    render() {
        

        return (
            <div className="Accalender">
                
                <button><a  href={Pdf} target="_"> Click to Open </a></button>
            </div>
        );

    }
}


export default Accalender;
