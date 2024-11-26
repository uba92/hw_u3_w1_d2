import { Container, Row, Col, Nav } from 'react-bootstrap'

const MyFooter = function (props) {
  return (
    <Container fluid className='bg-dark text-light text-center'>
      <Row className='justify-content-center align-items-center'>
        <Col sm={12} md={8} lg={4}>
          UmbertoLibrary - 2024
        </Col>
        <Col sm={12} md={8} lg={4}>
          <Nav className='flex-column'>
            <Nav.Link href='#' className='text-light'>
              Home
            </Nav.Link>
            <Nav.Link href='#' className='text-light'>
              About
            </Nav.Link>
            <Nav.Link href='#' className='text-light'>
              Browse
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default MyFooter
