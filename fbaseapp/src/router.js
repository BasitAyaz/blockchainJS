import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./screen/home";
import Login from "./screen/login";
import SignUp from "./screen/signup";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
