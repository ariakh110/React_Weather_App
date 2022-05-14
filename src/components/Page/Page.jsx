import React, { Fragment } from 'react';

import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';

import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';

const Page = () => {
    const { isError, isLoading, Forecast, submitRequest } = useForecast();

    const onSubmit = value => {
        //call fn here
        submitRequest(value);
    };

    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* form */}
                {!isLoading && <Form submitSearch={onSubmit} />}
                {/* Error */}
                {isError && <Error message={isError} />}
                {/* Loader */}
                {isLoading && <Loader />}
            </div>
            {/* forecast */}
            {Forecast && <Forecast />}
        </Fragment>
    );
};

export default Page;
