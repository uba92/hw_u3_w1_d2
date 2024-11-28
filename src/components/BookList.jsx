import SingleBook from './SingleBook'
import { Container, Row } from 'react-bootstrap'
const BookList = function (props) {
  return (
    <Container>
      <Row className='g-3'>
        {props.Books.slice(0, 8).map((oneBook) => {
          return <SingleBook OneBook={oneBook} key={oneBook.asin} />
        })}
      </Row>
    </Container>
  )
}

export default BookList
