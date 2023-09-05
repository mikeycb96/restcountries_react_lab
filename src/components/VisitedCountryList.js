import VisitedCountry from "./VisitedCountry"
const VisitedCountryList = ({visitedCountries}) => {

    const mappedVisitedCountries = visitedCountries.map(visitedCountry => {
        return <VisitedCountry visitedCountry={visitedCountry} key={visitedCountry.name.official}/>
    })

    return(
        <>
            <h2>Visited Countries</h2>
            {/* {mappedVisitedCountries} */}
        </>
    )

}

export default VisitedCountryList;