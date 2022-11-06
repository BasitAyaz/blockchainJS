import { BrowserRouter as Router, Routes, Route,Link as NavLink } from "react-router-dom";
import APIs from "../screen/API";
import Home from "../screen/home";
import Todo from "../screen/todo";
import User from "../screen/user";

function AppRouter() {
  return <>
  <Router>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path='user/:id' element={<User />} />
        <Route path='api' element={<APIs />}/>
        <Route path='todo' element={<Todo />} />
    </Routes>
  </Router>
  </>;
}
export default AppRouter;
