import { Route , Routes} from "react-router-dom"
import Favorites from "./pages/Favorites"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element= {<Home/>} ></Route> 
    <Route path="/favorite" element= {<Favorites/>} ></Route> 
     </Routes>
    </>
  )
}

export default App
