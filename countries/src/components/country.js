import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../country.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  // const url = `https://restcountries.com/v2/name/${name}`;

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(`https://restcountries.com/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };
    fetchCountryData();
  }, [name]);
  return (
    <>
      <section className="country">
        <Link to="/" className="link backLink">
          Back to countries
        </Link>

        {country.map((ele) => {
          const {
            numericCode,
            name,
            subregion,
            region,
            population,
            flag,
            nativeName,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = ele;
          console.log(borders);
          return (
            <article key={numericCode}>
              {/* image */}
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              {/* details */}

              <div className="country-details">
                <div className="title">
                  <h2>{name}</h2>

                </div>
                <dive className="details">

                <div className="left-side">
                  <h5>
                    Native Name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                  <h5>
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>
                  </h5>
                </div>

                <div>
                  <h5>
                    Top Level Domain: <span> {topLevelDomain}</span>
                  </h5>
                  <h5>
                    Currencies: <span>{currencies[0].code}</span>
                  </h5>
                  <h5>
                    Languages: <span>{languages[0].name}</span>
                  </h5>
                </div>
                <div className="borders">
                  <h5>Border Countries: </h5>
                  <ul>
                    {borders.map((border) => {
                      return <li key={border}>{border}</li>;
                    })}
                  </ul>
                </div>
                </dive>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
