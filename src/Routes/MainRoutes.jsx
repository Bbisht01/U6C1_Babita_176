import React from "react"
import {Route,Routes} from "react-router"
import About from "../components/About"
import Home from "../components/Home"
import { MoviesDashboard } from "../components/MoviesDashboard"



export const MainRoutes = ()=>{
    return(       
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/movies" element={<MoviesDashboard></MoviesDashboard>} />  
        </Routes>      
    )
}