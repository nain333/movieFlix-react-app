import { Component } from 'react'
class MovieCard extends Component {
  render () {
    return (<div className='main'>
      <div className='movie-card'>
        <div className='left'> <img alt="Poster" src='https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71wwUV0wY8L._AC_UF1000,1000_QL80_.jpg'/> </div>

        <div className='right'>
            <div className='title'>The Avangers</div>
            <div className='plot'>The Avangers</div>
            <div className='price'> Rs. 199 </div>
            <div className='footer'>
            <div className='rating'>8.9</div>
            <div className='star-dis'>
                <img className='str-btn' alt='decrease' src='https://cdn-icons-png.flaticon.com/128/56/56889.png'></img>
                <img className='stars' src="https://cdn-icons-png.flaticon.com/128/616/616490.png"></img>
                <img className='str-btn' alt='increase' src='https://cdn-icons-png.flaticon.com/128/1237/1237946.png'></img>
                <span>0</span>
                </div>
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
