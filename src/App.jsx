import React from "react";

import Cards from './components/Cards/Cards'
import Chart from './components/Chart/Chart'
import CityPicker from './components/CityPicker/CityPicker'

import styles from './App.module.css'

import { fetchData } from './api'

// import someImage from './img/img.png 

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    handleCountryChange = async (country) => {
        // fetch data
        const fetchedData = await fetchData(country);

        // set the state
        this.setState({ data: fetchedData, country: country })
    }

    render() {
        const { data, country } = this.state;

        return (
            <div className={styles.container}>
                {/* <img src={someImg} alt="some image"/> */}
                <Cards data={data} />
                <CityPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;