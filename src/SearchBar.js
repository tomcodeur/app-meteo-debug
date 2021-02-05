import React, { Component } from 'react';

import axios from 'axios';

import './SearchBar.css';

class SearchBar extends Component {
    state = { 
        city : "",
        periods: []
     }

    handleChange = (e) => {
        this.setState({
          city: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
          city: e.target.value
        })

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&appid=ba392fac2b2f1ddea44a584dcba10ed1`)
        .then(res => {
            console.log("coucou");
            this.setState({
                periods: res.data.list
            })
        })  
    }

    render() { 
        return (  
            <div className="champ__text">
                <form onSubmit={this.handleSubmit}>
                    <input className="zone__texte" type="text" placeholder="Entrer une ville..." value={this.state.task} onChange={this.handleChange}/>
                    <p className="render__ville">{this.state.text}</p>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;