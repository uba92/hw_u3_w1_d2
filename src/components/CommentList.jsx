import { Component } from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

class CommentList extends Component {
  render() {
    return this.props.feedbacks.map((feedback, i) => {
      return <SingleComment key={i} singleFeed={feedback.comment} />
    })
  }
}

export default CommentList
