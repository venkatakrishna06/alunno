import React, { Component } from 'react';
import Pdf from '../Document/Calendar.pdf';
import "./Accalendar.css"
class Accalendar extends Component {

    render() {
        

        return (
            <div className="Accalendar">
                
                <button><a  href={Pdf} target="_"> Click to Open </a></button>
            </div>
        );

    }
}


export default Accalendar;  
