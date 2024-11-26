import { Navbar, Container, Nav } from 'react-bootstrap'

const MyNavbar = function (props) {
  return (
    <Navbar expand='lg' bg='dark' data-bs-theme='dark'>
      <Container fluid={props.isFluid}>
        <Navbar.Brand href='#home'>MyLibrary</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#'>Home</Nav.Link>
            <Nav.Link href='#'>About</Nav.Link>
            <Nav.Link href='#'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
