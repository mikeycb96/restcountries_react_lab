import React, { useState } from 'react';

const Country = ({ country, onCountryVisited }) => {
  const [visited, setVisited] = useState(false); 

 
  const toggleVisited = () => {
    setVisited(!visited);
    onCountryVisited(country, !visited);
  };

  return (
    <>
      <h2>{country.name.common}</h2>
      {country.flag}
      <p>Capital City: {country.capital}</p>
      
      <label>
        Visited:
        <input
          type="checkbox"
          checked={visited} 
          onChange={toggleVisited} 
        />
      </label>
      <hr/>
    </>
  );
};

export default Country;
