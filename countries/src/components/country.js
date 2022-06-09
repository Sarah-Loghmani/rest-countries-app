import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };

    fetchCountryData();
  });

  return (
    <div>
      <Link to="/" className="link backLink">
        Back to Countries
      </Link>
      <h1>{country}</h1>
      <section className="country">
          {country.map(ele=>{
              const { name, population}
          })}
      </section>
    </div>
  );
};

export default Country;
