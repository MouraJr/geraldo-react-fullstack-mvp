import axios from 'axios';

const url = 'https://api.teleport.org/api/urban_areas/';

export const fetchData = async (city) => {
    let scoresUrl = `${url}slug:aarhus/scores/`;

    if (city) {
        scoresUrl = `${url}slug:${city.replace('.', '').toLowerCase().replace(',', '').split(" ").join('-')}/scores/`
    }

    try {
        const { data } = await axios.get(scoresUrl)

        return data
    } catch (error) {
        console.error(`Woops fetch: ${error}`)
    }
}

export const fetchCities = async () => {
    try {
        const { data } = await axios.get(`${url}`)

        let citiesList = data._links['ua:item']

        return citiesList.map((city) => city.name)
    } catch (error) {
        console.error('Something is wrong!')
    }
}