import { useState } from "react";
import { signUpUser } from "../config/firebasefunctions";

function SignUp() {
  const [model, setModel] = useState({});


  let signup = ()=>{
    console.log(model)
    signUpUser(model).then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <>
      <h1>SignUp</h1>
      <div>
        <input
          onChange={(e) => setModel({ ...model, userName: e.target.value })}
          placeholder="User Name"
        />
      </div>
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
      <button onClick={signup}>Sign Up</button>
    </>
  );
}
export default SignUp;
