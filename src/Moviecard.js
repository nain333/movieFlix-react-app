import { Component } from 'react'
class MovieCard extends Component {
  render () {
    return (<div className='main'>
      <div className='movie-card'>
        <div className='left'> <img alt="Poster"/> </div>

        <div className='right'>
            <div className='title'>The Avangers</div>
            <div className='plot'>The Avangers</div>
            <div className='price'> Rs. 199 </div>
            <div className='footer'>
            <div className='rating'>8.9</div>
            <div className='stars'>stars</div>
            <button className='favourite-btn'>
                Faviorate
            </button>
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
