import { useState } from 'react';
import axios from 'axios';

//call api
const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://reactweather0707.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [forecast, setForecast] = useState(null);

    //call the api
    const submitRequest = async location => {
        console.log(location);
        //1.get woeid
        const response = await axios(`${REQUEST_URL}/search`, {
            params: { query: location },
        });
        //2. get weather
        console.log(response);
    };

    return {
        isError,
        isLoading,
        forecast,
        submitRequest,
    };
};
export default useForecast;
