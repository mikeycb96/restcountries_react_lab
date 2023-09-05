const Country = ({country}) => {

    return(
        <>
            <h2>{country.name.common}</h2>
            <p>Capital City: {country.capital}</p>
        </>
    )

}

export default Country;