import { Component } from 'react'
import CommentList from './CommentList'

class CommentArea extends Component {
  state = {
    comments: [],
  }

  getComments = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEwMThhZDEyOTAwMTU4NzZiYjUiLCJpYXQiOjE3MzE2NTc5ODUsImV4cCI6MTczMjg2NzU4NX0.NSQnNzM9dxo1zWIq4ud9nziBshRqPm8s2UIO3rZInEs',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei commenti')
        }
      })
      .then((arrayOfComments) => {
        this.setState({
          comments: arrayOfComments,
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  componentDidMount() {
    this.getComments()
  }

  render() {
    return <CommentList feedbacks={this.state.comments} />
  }
}

export default CommentArea
