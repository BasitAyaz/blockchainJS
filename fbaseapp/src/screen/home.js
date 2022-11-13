import { useEffect, useState } from "react";
import { getData, sendData } from "../config/firebasefunctions";

function Home() {
  const [task, setTask] = useState();
  let addTask = () => {
    let obj = {
      task: task,
      dateTime: JSON.stringify(new Date()),
    };
    console.log(obj);
    sendData(obj,'tasks/')
  };

  let getTaskData = ()=>{
    getData('tasks')
  }

  useEffect(()=>{
    getTaskData()
  },[])


  return (
    <>
      <h1>Home</h1>

      <textarea
        onChange={(e) => setTask(e.target.value)}
        placeholder="Task"
      ></textarea>
      <button onClick={addTask}>Add</button>
    </>
  );
}
export default Home;
