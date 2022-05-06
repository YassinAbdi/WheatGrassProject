import * as React from "react";
import About from "./components/about/about";
import Home from "./components/home/home";
import Form from "./components/form/form";
import Login from "./components/login/login";
import Secret from "./components/secret/secret";
import { Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Form" element={<Form />} />
        <Route path="Login" element={<Login />} />
        <Route path="Secret" element={<Secret />} />
      </Routes>
    </>
  );
};
export default App;
