import React, { useState } from "react";
import ShowResult from "./ShowResult";

function TakeInput(props) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [mathOp, setOp] = useState("");

  const insertNumbers = (num1, num2, mathOp) => {
    props.inum1(num1);
    props.inum2(num2);
    props.mathOp(mathOp);
  };

  const MathOperation = (event) => {
    event.preventDefault();
    console.log(`Entered number is ${num1} and ${num2}, operation: ${mathOp}`);
  };
  return (
    <div>
      <h1 align="center">Calculator</h1>
      <form action={ShowResult} method="post">
        <table>
          <tr>
            <td>
              <label for="num1">Number 1: </label>
            </td>
            <td>
              <input
                type="number"
                id="num1"
                class="num1"
                autoFocus
                value={num1}
                onChange={(event) => setNum1(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="num2">Number 2: </label>
            </td>
            <td>
              <input
                type="number"
                id="num2"
                class="num2"
                value={num2}
                onChange={(event) => setNum2(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <select
                id="mathOp"
                name="mathOp"
                class="mathOp"
                onChange={(event) => setOp(event.target.value)}
              >
                <option id="add" name="mathOp" class="mathOp" value={mathOp}>
                  Addition
                </option>
                <option id="diff" name="mathOp" class="mathOp" value={mathOp}>
                  Difference
                </option>
                <option id="pro" name="mathOp" class="mathOp" value={mathOp}>
                  Product
                </option>
                <option id="div" name="mathOp" class="mathOp" value={mathOp}>
                  Division
                </option>
              </select>
            </td>
            <td>
              <button type="button" onClick={MathOperation}>
                Do Math
              </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );
}

export default TakeInput;
