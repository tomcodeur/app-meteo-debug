import React, { Component } from 'react';
import axios from 'axios';

import "./WeatherSystem.css";

import Period from "./Period";

class WeatherSystem extends Component {
    state = {
        periods: [],
        city: "Lens"
     }

    componentDidMount() {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=ba392fac2b2f1ddea44a584dcba10ed1`)
        .then(res => {
            console.log("coucou");
            this.setState({
                periods: res.data.list
            })
        })  

    }

    handleChange = (e) => {
        this.setState({
          city: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&lang=fr&units=metric&appid=ba392fac2b2f1ddea44a584dcba10ed1`)
        .then(res => {
            console.log("coucou");
            this.setState({
                periods: res.data.list
            })
        })  
    }
    //Submit = mis à jour ville et requestionner l'API dans handleSubmit

    render() {

        let hourDay = this.state.periods
        .map(period => period.dt_txt.includes("12:00:00") ? <Period period={period} /> : "");

        return ( 
                <div className="container">
                    <form className="form__container"onSubmit={this.handleSubmit}>
                        <input className="zone__texte" type="text" placeholder="Entrer une ville..." value={this.state.city} onChange={this.handleChange}/>
                        <p className="render__ville">{this.state.city}</p>
                    </form>
                    {hourDay}
                </div>
         );
    }
}
 
export default WeatherSystem;