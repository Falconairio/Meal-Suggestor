import React, { Component } from 'react';
import foodsJson from "../Data/myfoods.json";


export default class Meal extends Component {

    state = {
        meal: {}
    }

    rerollMeal = () => {
        let num = Math.floor(Math.random() * foodsJson.length);
        this.setState({
            meal: foodsJson[num]
        })
    }

    componentDidMount () { 
        this.rerollMeal()
    }

    render() {
        return (
            <div className="meal-main">
                <div className="meal-items">
                    <img src= {this.state.meal.image} alt="" className="meal-image" />
                    <div className="meal-title-buttons">
                        <h1 className="meal-title">{this.state.meal.name}</h1>
                        <div className="meal-buttons">
                            <a href = {this.state.meal.link} target = "_blank" rel = "noreferrer">
                                <button onClick>Get Recipe</button>
                            </a>
                            <button onClick = {this.rerollMeal}>Get Another</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
