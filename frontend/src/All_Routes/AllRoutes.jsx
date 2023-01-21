import {Routes,Route} from "react-router-dom"
import MobCovOpt from "../Components/Pages/Mobile/MobCovOpt"
import Home from "../Components/Pages/Home/Home"
import Covers from "../Components/Pages/Mobile/Covers"

function All_Routes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/mens"></Route>
            <Route path="/womens"></Route>
            <Route path="/mobile" element={<MobCovOpt/>}></Route>
            <Route path="/covers" element={<Covers/>}></Route>
        </Routes>
    )
}

export default All_Routes