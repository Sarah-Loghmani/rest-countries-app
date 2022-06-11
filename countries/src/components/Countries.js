import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"

const url = `https://restcountries.com/v2/all`;

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      // console.log(response);
      const countries = await response.json();
      // console.log(countries);
      setCountries(countries);
      
    } catch (error) {
      console.log(error);
    }
    //   console.log(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const { name, population, region, capital, flag, numericCode } =
            country;
          return (
            <article key={numericCode}>
              <div className="card">
                <img src={flag} alt={name} />
                <div className="details">
                  <h3>{name}</h3>
                  <h4>
                    population: <span>{population}</span>{" "}
                  </h4>
                  <h4>
                    Region: <span> {region}</span>
                  </h4>
                  <h4>
                    Capital: <span> {capital}</span>
                  </h4>
                  <Link to={`/Countries/${name}`} className="link">More details</Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
