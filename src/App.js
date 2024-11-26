import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import MyWelcomeAlert from './components/MyWelcomeAlert'

function App() {
  return (
    <div className='App'>
      <header>
        <MyNavbar isFluid={true} />
      </header>
      <main>
        <MyWelcomeAlert />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
