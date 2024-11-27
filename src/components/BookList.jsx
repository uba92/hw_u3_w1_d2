import SingleBook from './SingleBook'
import { Container, Row } from 'react-bootstrap'
const BookList = function (props) {
  return (
    <Container>
      <Row>
        {props.Books.map((oneBook) => {
          return <SingleBook OneBook={oneBook} key={oneBook.asin} />
        })}
      </Row>
    </Container>
  )
}

export default BookList
