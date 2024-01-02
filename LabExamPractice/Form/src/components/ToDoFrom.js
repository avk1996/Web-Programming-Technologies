import React from "react";
import ToDoList from "./ToDoList";

function ToDoFrom() {
  const handleChange = () => {};
  return (
    <div>
      <form action={handleChange}>
        <table align="center">
          <tr>
            <td>
              <label htmlFor="tnm">Task Name: </label>
            </td>
            <td>
              <input type="text" id="tnm" autoFocus />
            </td>
            <td>
              <label htmlFor="dur">Duration: </label>
            </td>
            <td>
              <input type="text" id="dur" />
            </td>
            <td>
              <button type="submit">Add List</button>
            </td>
          </tr>
        </table>
      </form>
      <ToDoList />
    </div>
  );
}

export default ToDoFrom;
