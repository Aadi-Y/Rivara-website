import Landing from "./Landing/Landing"
import Navbar from "./Navbar/Navbar"
import MenSection from "./MenSection/MenSection"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {

  return (
    <>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/mens" element={<MenSection/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
