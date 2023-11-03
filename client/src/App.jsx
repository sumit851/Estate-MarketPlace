import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignOut from "./Pages/SignOut";
import About from "./Pages/About";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Signout" element={<SignOut />} />
        <Route path="/About" element={<About />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
