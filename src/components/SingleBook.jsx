import { Col, Card, Button, Modal } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'
import AddComment from './AddComment'

class SingleBook extends Component {
  state = {
    selected: false,
    // borderRed: '2px solid red',
    showModal: false,
    showModal2: false,
  }

  handleHide = () => {
    this.setState({ showModal: false })
  }
  handleHide2 = () => {
    this.setState({ showModal2: false })
  }

  handleShow = () => {
    this.setState({ showModal: true })
  }
  handleShow2 = () => {
    this.setState({ showModal2: true })
  }

  render() {
    return (
      <Col sm={12} md={4} lg={3}>
        <Card
          // style={this.state.selected ? { border: this.state.borderRed } : null}
          // className='h-100'
          onClick={() => this.setState({ selected: !this.state.selected })}
          className='h-100'
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
            <Button variant='warning' onClick={this.handleShow2}>
              Leave a Comment
            </Button>
          </Card.Body>
        </Card>
        <Modal show={this.state.showModal} onHide={this.handleHide}>
          <Modal.Header closeButton>
            <Modal.Title>Feedbacks</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.selected && (
              <CommentArea asin={this.props.OneBook.asin} />
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleHide}>
              Chiudi
            </Button>
          </Modal.Footer>
        </Modal>

        {/* modals per lasciare un feedback */}
        <Modal show={this.state.showModal2} onHide={this.handleHide2} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title>Rate Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddComment selectedBook={this.props.OneBook} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={this.handleHide2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    )
  }
}

export default SingleBook
