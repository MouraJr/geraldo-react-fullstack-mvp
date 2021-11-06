import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import { fetchCities } from '../../api'

import styles from './CityPicker.module.css'

const CityPicker = ({ handleCityChange }) => {

    const [cities, setCities] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setCities(await fetchCities())
        }

        fetchAPI()
    }, [])

    return (
        <div className={styles.container}>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCityChange(e.target.value)}>
                    <option value="">Aarhus</option>
                    {cities.map((city, i) => <option key={i} value={city}>{city}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CityPicker
