import { useState, useEffect } from "react";

const Fetch = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCountries(data);
            })
    }, []);
    return (
        <div>
            {countries &&
                countries.map((country, index) => (
                    <img key={index} src={country.flags.png} title={country.name} alt="flag" width={100}></img>
                ))}
        </div>
    )
}

export default Fetch;