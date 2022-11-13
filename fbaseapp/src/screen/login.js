import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../config/firebasefunctions";

function Login() {
  const [model, setModel] = useState({});

  const navigate = useNavigate()



  let login = ()=>{
    console.log(model)
    loginUser(model).then((res) => {
        console.log(res);
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <>
      <h1>Login</h1>
     
      <div>
        <input
          onChange={(e) => setModel({ ...model, email: e.target.value })}
          placeholder="Email"
        />
      </div>
      <div>
        <input
          onChange={(e) => setModel({ ...model, password: e.target.value })}
          placeholder="Password"
        />
      </div>
      <button onClick={login}>Login</button>
    </>
  );
}
export default Login;
