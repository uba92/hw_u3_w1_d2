import { Col, Card, Button } from 'react-bootstrap'
import { Component } from 'react'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  render() {
    console.log(this.state)
    return (
      <Col sm={12} md={4} lg={3}>
        <Card
          style={this.state.selected ? { border: '2px solid red' } : null}
          className='h-100'
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
            <Button variant='primary'>Add to Chart</Button>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default SingleBook
