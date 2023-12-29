import { useState } from "react";
import ShowResult from "./components/ShowResult";
import TakeInput from "./components/TakeInput";
export default function App() {
  //   const [num1, setNum1] = useState(0);
  //   const [num2, setNum2] = useState(0);
  //   const insertNumbers = (v1, v2) => {
  //     setNum1(num1, v1);
  //     setNum2(num2, v2);
  //     console.log(`Given number1: ${num1} and number2: ${num2}`);
  //   };
  return (
    <div>
      <TakeInput inum1={inum1} inum2={inum2} mathOp={mathOp} />
      <ShowResult />
    </div>
  );
}
