import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])
    return (

        < div >
            <h1>All Rest Countries Are Here!!</h1>
            <h2>Available Countries:{countries.length}</h2>
            <nav>
                <a href="">Home</a>
                <a href="">Support</a>
                <a href="">Contact</a>
            </nav>

            <div className='gridClass'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>
        </div >
    );
};

export default Countries;