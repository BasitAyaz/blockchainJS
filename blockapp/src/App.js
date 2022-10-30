import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./Button";

function App() {
  const [arr, setArr] = useState([]);
  const [txt, setTxt] = useState("");

  let addTodo = () => {
    console.log(txt);
    arr.push(txt);
    console.log(arr);
    setArr([...arr]);
  };
  let del = (ind) => {
    arr.splice(ind, 1);
    setArr([...arr]);
  };

  let edit = (ind) => {
    let a = prompt("Update Value", arr[ind]);
    arr[ind] = a;
    setArr([...arr]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={(e) => {
            setTxt(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add</button>
        <p>{txt}</p>
        <ul>
          {arr.map((x, i) => (
            <li key={i}>
              {x}
              <Button click={() => edit(i)} btnVal="Edit" />
              <Button click={() => del(i)} btnVal="Delete" />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
