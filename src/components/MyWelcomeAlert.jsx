import { Alert } from 'react-bootstrap'

const MyWelcomeAlert = function () {
  return (
    <Alert variant='success'>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Welcome to our book haven. Explore our collection, and let your next
        favorite book find you!
      </p>
      <hr />
      <p className='mb-0'>Happy Reading!</p>
    </Alert>
  )
}

export default MyWelcomeAlert
