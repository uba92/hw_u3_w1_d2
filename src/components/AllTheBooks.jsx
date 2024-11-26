import { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap'
import scifiBooks from '../data/books/scifi.json'

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className='g-3'>
          {scifiBooks.slice(0, 18).map((scifiBook) => {
            return (
              <Col sm={12} md={6} lg={4} key={scifiBook.asin}>
                <Card className='h-100'>
                  <Card.Img
                    variant='top'
                    src={scifiBook.img}
                    className='h-75'
                  />
                  <Card.Body className='d-flex flex-column justify-content-between'>
                    <Card.Title className='flex-grow-1'>
                      {scifiBook.title}
                    </Card.Title>
                    <Card.Text>{scifiBook.price} $</Card.Text>
                    <Button variant='primary'>Add to Chart</Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default AllTheBooks
