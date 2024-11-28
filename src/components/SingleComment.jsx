import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class SingleComment extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>{this.props.singleFeed}</ListGroup.Item>
      </ListGroup>
    )
  }
}

export default SingleComment
