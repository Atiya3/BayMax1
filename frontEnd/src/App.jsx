import Home from "./home/Home"
import Navbar from "./Components/Navbar"
import Achievement_Extras from "./home/Achievement_Extras"
import Footer from "./Components/Footer"
import Stats from "./team/stats"
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  
  return(<>
    {/* <Navbar/>
    <Stats/>
    <Footer/> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/team" element={<Stats />} />
      {/* <Route path="/achievements" element={<Achievement_Extras />} /> */}

    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App