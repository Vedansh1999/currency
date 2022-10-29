import React from "react";
import "../CSS/Currencies.css";

const Currencies = ({ rates, usd }) => {
  // console.log(rates);
  // console.log("usd>>>", usd);
  return (
    <div className="curr">
      <h1>Rates</h1>
      <p>Value Compared to INR (Indian Rupee (₹))</p>
      <p>
        Curren INR vs USD : <span>{usd}</span>
      </p>
      <p>Compared Values :</p>
      <ul>
        {rates.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Currencies;
