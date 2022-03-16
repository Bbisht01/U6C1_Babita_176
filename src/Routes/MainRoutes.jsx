import React from "react"
import {Route,Routes} from "react-router"
import About from "../components/About"
import Home from "../components/Home"
import { MoviesDashboard } from "../components/MoviesDashboard"
import { SingleMovieDetails } from "../components/SingleMovieDetails"



export const MainRoutes = ()=>{
    return(       
        <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/movies" element={<MoviesDashboard></MoviesDashboard>} />  
            <Route path="/movies/:id" element={<SingleMovieDetails></SingleMovieDetails>}/>
        </Routes>      
    )
}