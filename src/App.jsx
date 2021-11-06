import React from "react";

import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
import CityPicker from './components/CityPicker/CityPicker'

import styles from './App.module.css'

import { fetchData } from './api'

// import someImage from './img/img.png 

class App extends React.Component {
    state = {
        data: {},
        city: 'Aarhus',
    }

    async componentDidMount() {
        const data = await fetchData();

        this.setState({ data })
    }

    handleCityChange = async (city) => {
        // fetch data
        const data = await fetchData(city);

        // set the state
        this.setState({ data, city: city })
    }

    render() {
        const { data, city } = this.state;

        return (
            <div className={styles.container}>
                {/* <img src={someImg} alt="some image"/> */}
                <CityPicker handleCityChange={this.handleCityChange} />
                <Cards data={data} city={city} />
                {/* <Chart data={data} country={country} /> */}
            </div>
        )
    }
}

export default App;