import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MyNavbar from './components/MyNavbar'
import MyWelcomeAlert from './components/MyWelcomeAlert'
import BookList from './components/BookList'
import CommentArea from './components/CommentArea'
import MyFooter from './components/MyFooter'
import fantasyBooks from './data/books/fantasy.json'

class App extends Component {
  state = {
    selected: null,
  }

  changeSelected = (bookID) => {
    this.setState({
      selected: bookID,
    })
  }
  render() {
    return (
      <div className='d-flex flex-column min-vh-100'>
        <header>
          <MyNavbar isFluid={true} />
        </header>
        <main className='flex-grow-1'>
          <MyWelcomeAlert />
          <Container className='my-4'>
            <Row>
              <Col xs={8}>
                <BookList
                  Books={fantasyBooks}
                  changeSelected={this.changeSelected}
                  selected={this.state.selected}
                />
              </Col>
              <Col xs={4} className='text-center fixed'>
                <CommentArea asin={this.state.selected} />
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
}

export default App
