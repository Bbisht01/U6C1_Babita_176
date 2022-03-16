import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import{getMovieData,filterByGenre} from "../Redux/actions"
import "./MoviesDashboard.css"

import { Link } from "react-router-dom";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {

  const movieStore = useSelector ((store) => store.filterData)
  const dispatch = useDispatch();
  console.log("redux all data", movieStore)
  
    // to get all movies list on component mounts
  // useEffect(() => {
  //   //   dispatch an action to the store 

  // }, [dispatch]);
  
  const navigate = useNavigate();

  const [allMovie, setAllMovies] = useState([]);
  // console.log(allMovie);

  useEffect( () => {
    axios({
      method: 'get',
      url: 'https://movie-fake-server.herokuapp.com/data',
    })
      .then(({data}) => {
        setAllMovies(data)
        dispatch(getMovieData(data));
      })
      
  },[])


  

//    filter by genre 
const handleFilter = (e)=>{
    console.log("handle",e.target.value)
    const payload = e.target.value;
    dispatch(filterByGenre(payload))

}
  return (
    <>
      <h1>Movies Page</h1>
      <select  onChange={handleFilter}>
        {genres.map(a => {
          return <option value={a}>{a}</option>
        })}
      </select>
      <div className = "movies-list">
       
        {movieStore.map(item => {
         return (
          <Link key={item.id} to={`/movies/${item.id}`}>
       <img src={item.image_url} alt="image" />  
       <h3>{item.movie_name}</h3>         
       <h3>{item.genre}</h3>         
       <h3>{item.rating}</h3>
</Link>
         )
       })}
       
      </div>
    </>
  );
};
