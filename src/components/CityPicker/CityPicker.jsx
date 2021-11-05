import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import { fetchCountries } from '../../api'

import styles from './CityPicker.module.css'

const CityPicker = () => {
    const [fetchedCountries, setFethedCountries] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFethedCountries(await fetchCountries)
        }

        fetchAPI()
    }, [setFethedCountries])

    return (
        <FormControl>
            <NativeSelect className={styles.FormControl}>
                <option value="global">Global</option>
                {fetchedCountries.map((country, i) =>
                    <option value={country} key={i}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CityPicker
