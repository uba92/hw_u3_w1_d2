import SingleBook from './SingleBook'
import { Container, Row } from 'react-bootstrap'

import { Component } from 'react'
class BookList extends Component {
  render() {
    return (
      <Container>
        <Row className='g-3'>
          {this.props.Books.slice(0, 12).map((oneBook) => {
            return (
              <SingleBook
                OneBook={oneBook}
                key={oneBook.asin}
                changeSelected={this.props.changeSelected}
                selected={this.props.selected}
                bookId={this.props.asin}
              />
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default BookList
