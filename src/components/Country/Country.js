import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, region, flags } = props.country;
    return (
        <div className='countryStyle'>
            <h1>Name:{name.common}</h1>
            <h3>Capital:{capital}</h3>
            <h4>Region:{region}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;