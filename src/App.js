import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyWelcomeAlert from './components/MyWelcomeAlert'
import { Container, Row, Col } from 'react-bootstrap'
import AllTheBooks from './components/AllTheBooks'
import MyCarousel from './components/MyCarousel'

function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
      <header>
        <MyNavbar isFluid={true} />
      </header>
      <main className='flex-grow-1'>
        <MyWelcomeAlert />
        <Container className='my-4'>
          <Row>
            <Col sm={12}>
              <AllTheBooks />
            </Col>
          </Row>
        </Container>
        <Container className='my-4'>
          <Row className='justify-content-center'>
            <Col sm={12} md={6} lg={4}>
              <MyCarousel />
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
