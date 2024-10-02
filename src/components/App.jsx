// eslint-disable-next-line no-unused-vars
import {React } from 'react'
import {Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import MainContact from "./MainContact.jsx";
import MainServices from "./MainServices.jsx";

const App = () => {
  return (
      <div className="App">
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about-us" element={<About/>}/>
              <Route path="/contact" element={<MainContact/>}/>
              <Route path="/services" element={<MainServices/>}/>
          </Routes>
      </div>
  )
}

export default App
