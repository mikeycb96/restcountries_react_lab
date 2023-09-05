import React from "react"
const VisitedCountryList = ({visitedCountries}) => {
    return (
        <>
            <h2>Visited Countries</h2>
            {visitedCountries && visitedCountries.length > 0 ? (
                visitedCountries.map(country => (
                    <div key={country.name.official}>
                        <h3>{country.name.official}</h3>
                    </div>
                ))
            ) : (
                <p>No visited countries at the moment.</p>
            )}
        </>
    );
};

export default VisitedCountryList;

