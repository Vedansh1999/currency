import React, { useEffect, useState } from "react";
import "../CSS/Graph.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import Nav from "./Nav";
import Currencies from "./Currencies";

const Graphs = ({ rates, user }) => {
  const [data, setData] = useState([]);
  const [usd, setUSD] = useState("");
  let rate = [];

  useEffect(() => {
    Object.keys(rates).map((currency) => {
      setData((prev) => [
        ...prev,
        {
          name: currency,
          uv: rates[currency],
          pv: 1,
          amt: 1,
        },
      ]);
    });
  }, [rates]);

  const getRates = () => {
    const start = Math.floor(Math.random() * 162);
    const end = start + 5;
    rate = data.filter((item, index) => {
      if (index < end && index >= start) {
        return item;
      }
      if (item.name === "USD") {
        setUSD(item.uv);
      }
    });
  };
  getRates();
  return (
    <>
      <Nav name={user.name} email={user.email} />
      <div className="graph">
        <BarChart width={600} height={600} data={rate}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis />
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <Legend
            width={100}
            wrapperStyle={{
              top: 40,
              right: 20,
              backgroundColor: "#f5f5f5",
              border: "1px solid #d5d5d5",
              borderRadius: 3,
              lineHeight: "40px",
            }}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar dataKey="uv" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
      <Currencies rates={rate} usd={usd} />
    </>
  );
};

export default Graphs;
