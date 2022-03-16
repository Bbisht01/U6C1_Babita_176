import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMovieData, filterByGenre} from '../Redux/actions'
import axios from "axios";

export const SingleMovieDetails = () => {

  const {id} = useParams("id");
  const dispatch = useDispatch

  const [specificMovie , setSpecificMovie] = useState([])
  console.log(specificMovie)


      useEffect( () =>{
        axios.get(`https://movie-fake-server.herokuapp.com/data/${id}`)
        .then( ({data}) =>{
              setSpecificMovie(data)
        })
    }, [])

    // make a request to get the details
  return <>
      <h1><u>Movie Description Page</u></h1>

    <div style={{background:"whitesmoke", padding:"20px",width:"60%", margin:"auto"}}>
    <h2>MOVIE NAME : {specificMovie.movie_name}</h2> 
    <h3>Rating : {specificMovie.rating} start</h3> 
    <h3>Release Date : {specificMovie.release_date}</h3> 
    <img src={specificMovie.image_url} />
    <h3>Genre : {specificMovie.genre}</h3>
    </div>
     </>;
};
