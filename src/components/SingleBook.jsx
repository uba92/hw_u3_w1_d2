import { Col, Card, Button } from 'react-bootstrap'
import { Component } from 'react'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
    borderRed: '2px solid red',
  }

  render() {
    return (
      <Col sm={12} md={4} lg={3}>
        <Card
          style={this.state.selected ? { border: this.state.borderRed } : null}
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
            {this.state.selected && (
              <CommentArea asin={this.props.OneBook.asin} />
            )}
            <Button variant='primary'>Add Comment</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
