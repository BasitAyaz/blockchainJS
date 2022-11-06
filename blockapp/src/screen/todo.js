import "../App.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { setDate } from "../basemethods";


function Todo() {
  const [arr, setArr] = useState([]);
  const [txt, setTxt] = useState("");



  let addTodo = () => {

    let obj = {
      task:txt,
      time:setDate(new Date())
    }

    setArr([...arr,obj]);
    setTxt('')
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
    <div style={{
      padding:'20px',
      backgroundColor:"lightcyan"
    }} className="App">
      <header className="App-header">
        {/* <Input value={txt} label='Add Tast' onChange={(e) => {
            setTxt(e.target.value);
          }} /> */}
        
        <TextField label='Add Task' variant="standard" onChange={(e) => {
            setTxt(e.target.value);
          }} />

          <Button variant="outlined" onClick={addTodo}>
            <AddIcon />
          </Button>

        <p>{txt}</p>
        <ul>
          {arr.map((x, i) => (
            <li key={i}>
              {x.task}<br/>{x.time}
              <Button variant="outlined" onClick={() => edit(i)} >
                <EditIcon />
              </Button>
              <Button variant="outlined" onClick={() => del(i)} >
                <DeleteIcon />
              </Button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Todo;
