import { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import fantasyBooks from '../data/books/fantasy.json'

class MyCarousel extends Component {
  render() {
    return (
      <Carousel>
        {fantasyBooks.map((book) => {
          return (
            <Carousel.Item key={book.asin}>
              <img src={book.img} alt='book' height={400} width='80%' />
            </Carousel.Item>
          )
        })}
      </Carousel>
    )
  }
}

export default MyCarousel
