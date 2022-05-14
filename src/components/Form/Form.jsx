import React, { useState } from 'react';

import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ submitSearch }) => {
    const [location, setLocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (location.trim() === '' || !location) {
            return;
        }
        submitSearch(location);
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                aria-label="location"
                type="text"
                className={`${styles.input} form-control`}
                placeholder="Search for location"
                required
                value={location}
                onChange={e => setLocation(e.target.value)}
            />

            <button type="submit" className={styles.button} onSubmit={onSubmit}>
                SEARCH
            </button>
        </form>
    );
};
Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};
export default Form;
