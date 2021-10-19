import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LandingMain extends Component {
    render() { 
        return (
            <div className="landing">
                <h1>Ever not know what to cook? Same.</h1>
                <h1>Click the button for some inspiration.</h1>
                <Link to = "/meal">
                    <button>Suggest me a meal</button>
                </Link>
            </div>
        );
    }
}