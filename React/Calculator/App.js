import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState({
    num1: 0,
    num2: 0,
    mathOp: "",
  });

  const [Result, setCalResult] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevState) => ({ ...prevState, [name]: value }));
    console.log("In handle change");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
    const v1 = parseInt(data.num1);
    const v2 = parseInt(data.num2);
    const sum = v1 + v2;
    setCalResult(sum);
    console.log("In handle submit");
  };

  return (
    <div>
      <h1>Calculators</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              <label htmlFor="num1">Number 1: </label>
            </td>
            <td>
              <input
                type="number"
                name="num1"
                value={data.num1}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="num2">Number 2: </label>
            </td>
            <td>
              <input
                type="number"
                name="num2"
                value={data.num2}
                onChange={handleChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="radio"
                name="add"
                value={data.mathOp}
                onChange={handleChange}
              />
            </td>
            <td>
              <button type="submit">Do Cal</button>
            </td>
          </tr>
        </table>
      </form>
      <h1>Result: {Result}</h1>
    </div>
  );
}
