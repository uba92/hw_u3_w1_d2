import { Component } from 'react'
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap'

class AddComment extends Component {
  state = {
    feedbacks: {
      comment: '',
      rate: '',
      elementId: '',
    },
  }

  submitFeed = (e) => {
    e.preventDefault()

    // all'invio del form faccio la POST REQUEST per inviare la recensione e salvarla nella API

    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      body: JSON.stringify(this.state.feedbacks),
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEwMThhZDEyOTAwMTU4NzZiYjUiLCJpYXQiOjE3MzE2NTc5ODUsImV4cCI6MTczMjg2NzU4NX0.NSQnNzM9dxo1zWIq4ud9nziBshRqPm8s2UIO3rZInEs',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Salvataggio avvenuto')
          alert('Feedback inviato con successo!')
          this.setState({
            feedbacks: {
              comment: '',
              rate: '',
              elementId: '',
            },
          })
        } else {
          throw new Error('Errore nel salvataggio dei dati!')
        }
      })

      .catch((error) => {
        console.log('Errore', error)
      })
  }

  render() {
    return (
      <Form onSubmit={this.submitFeed}>
        <Container>
          <Row className='justify-content-center'>
            <Col lg={6}>
              <h3>
                {this.props.selectedBook.title} - {this.props.selectedBook.asin}
              </h3>
              <Card>
                <Card.Img variant='top' src={this.props.selectedBook.img} />
                <Card.Body></Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

        <Form.Group className='mb-3'>
          <Form.Control
            as='textarea'
            placeholder='Leave your feedback here...'
            style={{ height: '100px' }}
            value={this.state.feedbacks.comment}
            onChange={(e) => {
              this.setState({
                feedbacks: {
                  ...this.state.feedbacks,
                  comment: e.target.value,
                },
              })
            }}
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Select
            aria-label='Default select example'
            value={this.state.feedbacks.rate}
            onChange={(e) => {
              this.setState({
                feedbacks: {
                  ...this.state.feedbacks,
                  rate: e.target.value,
                },
              })
            }}
          >
            <option>Rate this Book</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Control
            type='text'
            placeholder={this.props.selectedBook.asin}
            value={this.state.feedbacks.elementId}
            onChange={(e) => {
              this.setState({
                feedbacks: {
                  ...this.state.feedbacks,
                  elementId: this.props.selectedBook.asin,
                },
              })
            }}
          />
        </Form.Group>

        <Button variant='warning' type='submit'>
          Submit Feedback
        </Button>
      </Form>
    )
  }
}

export default AddComment
