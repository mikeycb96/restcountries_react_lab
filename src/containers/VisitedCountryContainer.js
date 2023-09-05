import { useState, useEffect} from "react";
import VisitedCountryList from "../components/VisitedCountryList";

const VisitedCountryContainer= () => {

    const [visitedCountries, setVisitedCountries] = useState(null);
    

    const loadData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        setVisitedCountries(jsonData);
    }

    useEffect(() => {
        console.log("loading data");
        loadData();
    },[]);

}

export default VisitedCountryContainer;