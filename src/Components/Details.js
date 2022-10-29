import React, { useRef, useState } from "react";
import "../CSS/Details.css";
import Graphs from "./Graphs";

const Details = () => {
  const name = useRef();
  const email = useRef();
  const [show, setShow] = useState(false);
  const [rates, setRates] = useState([]);
  const [user, setUser] = useState([]);

  var myHeaders = new Headers();
  myHeaders.append("apikey", "o9EQJDHcinaZddx08npZ9fttQevKPju7");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  const getAPI = () => {
    fetch(
      `https://api.apilayer.com/exchangerates_data/latest?base=INR`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setRates(result.rates);
      })
      .catch((error) => console.log("error", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.current.value === "" || email.current.value === "") {
      alert("Field can not be empty");
    } else {
      setShow((prev) => !prev);
      var getRandomFive = Math.floor(Math.random() * 165);
      getAPI();

      setUser({
        name: name.current.value,
        email: email.current.value,
      });
    }
  };
  return (
    <div>
      {!show && (
        <div className="details">
          <form>
            <div>
              <label className="details_label">First Name : </label>
              <input
                type={"text"}
                placeholder={"First Name"}
                ref={name}
                className="details_input"
                required={true}
              />
            </div>
            <div>
              <label className="details_label email">Email : </label>
              <input
                type={"email"}
                placeholder={"First Name"}
                ref={email}
                required={true}
                className="details_input"
              />
            </div>
            <button className="btn" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
      {show && <Graphs rates={rates} user={user} />}
    </div>
  );
};

export default Details;
