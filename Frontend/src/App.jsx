import Landing from "./Landing/Landing"
import Navbar from "./Navbar/Navbar"
import MenSection from "./MenSection/MenSection"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"


function App() {

  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/mens" element={<MenSection/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
