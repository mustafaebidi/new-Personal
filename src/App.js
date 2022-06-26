import { Fragment } from "react";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Experience from "./components/experience/experience";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import Work from "./components/work/work";





function App() {
  return (
    <Fragment>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Work/>
      <Contact/>
    </Fragment>

  );
}

export default App;
