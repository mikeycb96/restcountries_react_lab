const VisitedCountry = ({visitedCountry}) => {

    return(
        <>
            <h2>{visitedCountry.name.common}</h2>
            <p>Capital City: {visitedCountry.capital}</p>
        </>
    )

}

export default VisitedCountry;