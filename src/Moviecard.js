import { Component } from 'react'
class MovieCard extends Component {
    constructor(){
        super()
        this.state={
            title:"The Avangers",
            price:"199",
            rating:8.9,
            plot:"SuperHero, with superNatural Powers",
            stars:0,
            fav:false,

        }
        this.addStars=this.addStars.bind(this)
        this.subStars=this.subStars.bind(this)
    }
    addStars(){
        if(this.state.stars<10){
        this.setState({
            stars:this.state.stars+0.5
        })}

    }
    subStars(){
        if(this.state.stars>0){
        this.setState({

            stars:this.state.stars-0.5
        })}

    }
    handleFav=()=>{
        this.setState({
            fav:!this.state.fav
        })
    }
  render () {
    const {title,price,rating,plot,stars}=this.state;
    return (<div className='main'>
      <div className='movie-card'>
        <div className='left'> <img alt="Poster" src='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71wwUV0wY8L._AC_UF1000,1000_QL80_.jpg'/> </div>

        <div className='right'>
            <div className='title'>{title}</div>
            <div className='plot'>{plot}</div>
            <div className='price'> Rs. {price} </div>
            <div className='footer'>
            <div className='rating'>{rating}</div>
            <div className='star-dis'>
                <img className='str-btn' alt='decrease' src='https://cdn-icons-png.flaticon.com/128/56/56889.png' onClick={this.subStars}></img>
                <img className='stars' src="https://cdn-icons-png.flaticon.com/128/616/616490.png"></img>
                <img className='str-btn' alt='increase' src='https://cdn-icons-png.flaticon.com/128/1237/1237946.png' onClick={this.addStars}></img>
                <span>{stars}</span>
                </div>
                {this.state.fav?< button className='unfavourite-btn' onClick={this.handleFav}>
                Un-faviorate
            </button>:<button className='favourite-btn' onClick={this.handleFav}>
                Faviorate
            </button>}
            <button className='cart-btn'>
                Add to cart

            </button>

        </div>
        </div>
        
      </div>
    </div>)
  }
}
export default MovieCard
