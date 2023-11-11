import './App.css'
import Index from './pages/Home/Index'
import Index1 from './pages/About/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/about' element={<Index1 />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
