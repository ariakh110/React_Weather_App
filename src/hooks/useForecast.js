import { useState } from 'react';
import axios from 'axios';

//call api
const BASE_URL = 'https://www.metaweather.com/api';
const server = axios.create({ baseURL: BASE_URL });

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    //call the api
    const submitRequest = async location => {
        //1.get woeid
        const response = await server
            .get('location/search', {
                params: { query: location },
            })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.log(error));
        //2. get weather
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};
export default useForecast;
