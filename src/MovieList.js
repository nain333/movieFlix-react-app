import React from "react";
import MovieCard from "./Moviecard";
import {movies} from "./moviesData"

class MovieList extends React.Component{
   
  
    render(){
        const {movies,addStars,handleDecStar,tCart,toggleFav} =  this.props;
        console.log("Props in MoviesList: ",this.props)
          
        return(
            <div className="main">
                {movies.map((movie,index) => (
                <MovieCard movies = {movie}
                            addStars={addStars }
                            decStars={handleDecStar}
                            toggleFav={toggleFav}
                            tCart={tCart}
                           key = {movie.id}/>

            ))}              
            </div>
        )
    }
}

export default MovieList;