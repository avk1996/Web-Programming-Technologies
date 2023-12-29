import { useState } from "react";
export function ClickCount() {
  //I will get two functions one which sets the current value and updated value
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  function DecreaseClick() {
    setCount(count - 1);
  }
  let text = count > 0 ? `You clicked ${count}` : "Click Me";
  return (
    <div>
      <button onClick={handleClick}>{text}</button>
      <button onClick={DecreaseClick}>Discourage</button>
    </div>
  );
}
export default ClickCount;
