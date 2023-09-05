import { useState, useEffect} from "react";
import CountryList from "../components/CountryList";
import VisitedCountryList from "../components/VisitedCountryList";

const CountryContainer= () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
        loadData();
    },[]);

    const handleToggleVisited = (country, visited) => {
        if (visited) {
            setVisitedCountries([...visitedCountries, country]);
        } else {
            const updatedVisitedCountries = visitedCountries.filter(
                visitedCountry => visitedCountry.name.common !== country.name.common
            );
            setVisitedCountries(updatedVisitedCountries);
        }
    }

    return(
        <>
            {countries.length > 0 ? (
                <>
                    <CountryList countries={countries} onToggleVisited={handleToggleVisited} />
                    <VisitedCountryList VisitedCountries={visitedCountries} />
                </>
            ) : (

                <p>Loading...</p>
            
            )}
        </>
    )
}

export default CountryContainer;