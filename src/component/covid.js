import React, { useEffect, useState } from "react";
import "./covid.css";
const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://disease.sh/v3/covid-19/countries");
      //console.log(res)
      const data = await res.json();
      console.log(data[93]);
      setData(data[93]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1>Live</h1>
        <h2>COVID-19 TRACKER</h2>

        <ul>
          <li className="card">
            <div className="card-main">
              <div className="card-inner card1">
                <p className="card-name">
                  <span> OUR </span> COUNTRY
                </p>
                <p className="card-total card-samll">INDIA</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-main">
              <div className="card-inner card2">
                <p className="card-name">
                  <span> TOTAL </span> RECOVERED
                </p>
                <p className="card-total card-samll">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-main">
              <div className="card-inner card3">
                <p className="card-name">
                  <span> TOTAL </span> CONFIRMED
                </p>
                <p className="card-total card-samll">{data.cases}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-main">
              <div className="card-inner card4">
                <p className="card-name">
                  <span> TOTAL </span> DEATH
                </p>
                <p className="card-total card-samll">{data.deaths}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-main">
              <div className="card-inner card5">
                <p className="card-name">
                  <span> TOTAL </span> ACTIVE
                </p>
                <p className="card-total card-samll">{data.active}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-main">
              <div className="card-inner card6">
                <p className="card-name">
                  <span> LAST </span> UPDATED
                </p>
                <p className="card-total card-samll-date">{(Date(data.updated)).substring(4,15)}</p>
                <p>{(Date(data.updated)).substring(16,24)}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
