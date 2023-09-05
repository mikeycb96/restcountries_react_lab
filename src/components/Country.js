// import React, { useState } from 'react';

// const Country = ({ country, onCountryVisited }) => {
//   const [visited, setVisited] = useState(false); 

 
//   const toggleVisited = () => {
//     setVisited(!visited);
//     onCountryVisited(country, !visited);
//   };

//   return (
//     <>
//       <h2>{country.name.common}</h2>
//       {country.flag}
//       <p>Capital City: {country.capital}</p>
      
//       <label>
//         Visited:
//         <input
//           type="checkbox"
//           checked={visited} 
//           onChange={toggleVisited} 
//         />
//       </label>
//       <hr/>
//     </>
//   );
// };

// export default Country;
import React, { useState } from 'react';

const Country = ({ country, onCountryCheck }) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        onCountryCheck(country, !checked); // Pass the checked state to the callback
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
                {country.name.common}
                {country.flag}

            </label>
            <p>{country.capital}</p>
            <hr />
        </div>
    );
};

export default Country;
