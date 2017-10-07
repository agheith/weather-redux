import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart'

class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.city.name
        const temps = _.map(cityData.list.map((weather) => weather.main.temp), (temp) => temp - 273)
        const pressures = cityData.list.map((weather) => weather.main.pressure)
        const humidities = cityData.list.map((weather) => weather.main.humidity)

        console.log(temps);

        return(
            <tr key={name}>
                <td>{name}</td>
                    <td><Chart color="red" data={temps} units='&#x2103;' /></td>
                    <td><Chart color="green" data={pressures} units='hPa' /></td>
                    <td><Chart color="blue" data={humidities} units='%' /></td>
            </tr>
        )
    }

    render(){
        console.log(this.props.weather);
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (&#x2103;)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}


//the weather argument comes from the weather property in reducer/index
function mapStateToProps({ weather }){
    return { weather };
}


export default connect(mapStateToProps)(WeatherList);
