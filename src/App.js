import NavBar from './components/NavBar'
import Banner from './components/Banner/Banner'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App () {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <div className="development-banner">
        This Website is Under Development
      </div>
    </div>
  )
}

export default App
