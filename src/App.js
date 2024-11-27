import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyWelcomeAlert from './components/MyWelcomeAlert'
import { Container, Row } from 'react-bootstrap'
import BookList from './components/BookList'
import fantasyBooks from './data/books/fantasy.json'

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
            <BookList Books={fantasyBooks} />
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
