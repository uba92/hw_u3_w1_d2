import { Component } from 'react'
import { ListGroup, Button } from 'react-bootstrap'

class SingleComment extends Component {
  render() {
    return (
      <ListGroup as='ul'>
        <ListGroup.Item as='li'>
          <span>{this.props.singleFeed}</span>{' '}
          <Button
            variant='danger'
            onClick={() => {
              fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' +
                  this.props.asin,
                {
                  method: 'DELETE',
                  headers: {
                    Authorization:
                      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MDEwMThhZDEyOTAwMTU4NzZiYjUiLCJpYXQiOjE3MzE2NTc5ODUsImV4cCI6MTczMjg2NzU4NX0.NSQnNzM9dxo1zWIq4ud9nziBshRqPm8s2UIO3rZInEs',
                  },
                }
              )
                .then((response) => {
                  if (response.ok) {
                    alert('elemento eliminato')
                  } else {
                    throw new Error('Errore nella rimozione del commento!')
                  }
                })
                .catch((error) => {
                  alert('NON ELIMINATO', error)
                })
            }}
          >
            X
          </Button>
        </ListGroup.Item>
      </ListGroup>
    )
  }
}

export default SingleComment
