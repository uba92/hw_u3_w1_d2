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
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4NmYwNTA2ZmM4YzAwMTU2Yjg2ZmIiLCJpYXQiOjE3MzI4MDAyNjIsImV4cCI6MTczNDAwOTg2Mn0.LBzHQxm8Ovl76SSc6dJv3F12CSJnOAhnNlzvhQB2oec',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          console.log('id ', this.props.asin)
          return response.json()
        } else {
          throw new Error('Errore nel recupero dei commenti')
        }
      })
      .then((arrayOfComments) => {
        console.log('Feedbacks: ', arrayOfComments)
        this.setState({
          comments: arrayOfComments,
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  componentDidUpdate(prevProps) {
    if (this.props.asin !== prevProps.asin) {
      this.getComments()
    }
  }

  componentDidMount() {
    this.getComments()
  }

  render() {
    return (
      <>
        <h5>Feedbacks</h5>
        <CommentList asin={this.props.asin} feedbacks={this.state.comments} />
      </>
    )
  }
}

export default CommentArea
