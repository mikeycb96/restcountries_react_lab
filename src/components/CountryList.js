import React, { useState } from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleCountryVisited = (country) => {
        if (!visitedCountries.includes(country)) {
            setVisitedCountries([...visitedCountries, country]);
        } else {
            const updatedVisitedCountries = visitedCountries.filter((c) => c !== country);
            setVisitedCountries(updatedVisitedCountries);
        }
    };

    const mappedCountries = countries.map((country) => (
        <li key={country.name.official}>
            <Country country={country} onCountryCheck={handleCountryVisited} />
        </li>
    ));

    return (
        <>
            <h2>Countries</h2>
            <ul>{mappedCountries}</ul>
            <h2>Visited Countries</h2>
            <ul>
                {visitedCountries.map((country) => (
                    <li key={country.name.official}>{country.name.official} {country.flag}</li>
                ))}
            </ul>
        </>
    );
};

export default CountryList;