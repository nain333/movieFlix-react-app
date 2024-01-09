import MovieList from "./MovieList";
import React from "react";
import {movies} from "./moviesData"
// import MovieCard from "./Moviecard";
import Navbar from "./NavBar";
class App extends React.Component{
  constructor(){
    super();
    //Creating the state object 
    this.state = {
      movies:movies,
        
      cartCount:0
    } 
}
handleIncStar=(movie)=>{
const {movies}= this.state
const mid = movies.indexOf(movie);
if(movies[mid].star>=5){
  return;
}
movies[mid].star+=0.5
this.setState({
  movies
})


}
handleDecStar=(movie)=>{
const {movies}= this.state
const mid = movies.indexOf(movie);
if(movies[mid].star<=0){
  return;
}
movies[mid].star-=0.5
this.setState({
  movies
})
}
handleToggleFav = (movie) => {
const { movies } = this.state;
const mid = movies.indexOf(movie);
movies[mid].fav = !movies[mid].fav;
console.log("inside handleToggleFav: ",movies[mid].fav )

this.setState({
  movies
});
}
handleIncart = (movie) => {
let { movies,cartCount } = this.state;
console.log("CartCount: ",cartCount)
const mid = movies.indexOf(movie);
movies[mid].isInCart = !movies[mid].isInCart;
console.log("inside handleToggleFav: ",movies[mid].isInCart )
if(movies[mid].isInCart){
  console.log("Inside CartCount Increment")
  cartCount+=1;

}
else{
  cartCount-=1;
}

this.setState({
  movies,
  cartCount
});
console.log(cartCount) 
}
render() {
  let {movies,cartCount}=this.state
  
  return (
    <>
    <Navbar cartCount={this.state.cartCount}/>
    
    {/* <MovieCard/> */}
    <MovieList movies={movies}
    addStars={this.handleIncStar}
    decStars={this.handleDecStar}
    toggleFav={this.handleToggleFav}
    tCart={this.handleIncart}
    />
    
    
    </>
   
  );
}
}



export default App;
