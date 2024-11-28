import { Col, Card, Button, Modal, Form } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
    // borderRed: '2px solid red',
    showModal: false,
  }

  handleShow = () => {
    this.setState({ showModal: true })
  }

  handleClose = () => {
    this.setState({ showModal: false })
  }
  render() {
    return (
      <Col sm={12} md={4} lg={3}>
        <Card
          // style={this.state.selected ? { border: this.state.borderRed } : null}
          // className='h-100'
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Card.Img
            variant='top'
            src={this.props.OneBook.img}
            className='h-75'
          />
          <Card.Body className='d-flex flex-column justify-content-between'>
            <Card.Title className='flex-grow-1'>
              {this.props.OneBook.title}
            </Card.Title>
            <Card.Text>{this.props.OneBook.price} $</Card.Text>

            <Button variant='primary' onClick={this.handleShow}>
              Feedbacks
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Example</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.selected && (
              <CommentArea asin={this.props.OneBook.asin} />
            )}
            <Form.Control
              as='textarea'
              placeholder='Leave a comment here'
              style={{ height: '100px' }}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='warning'>Add Comment</Button>
            <Button variant='secondary' onClick={this.handleClose}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    )
  }
}

export default SingleBook
