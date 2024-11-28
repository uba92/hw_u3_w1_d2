import { Alert, Button } from 'react-bootstrap'
import { useState } from 'react'

const MyWelcomeAlert = function () {
  const [show, setShow] = useState(true)
  return (
    <Alert variant='dark' className='text-center' show={show}>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Welcome to our book haven. Explore our collection, and let your next
        favorite book find you!
      </p>
      <hr />
      <p className='mb-0'>Happy Reading!</p>
      <div className='d-flex justify-content-end'>
        <Button onClick={() => setShow(false)} variant='outline-dark'>
          Close
        </Button>
      </div>
    </Alert>
  )
}

export default MyWelcomeAlert
