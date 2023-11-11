import './App.css'
import Index from './pages/Home/Index'
import Index1 from './pages/About/Index'
import Index2 from './pages/Contact/Index'
import SignIn from './pages/Authentication/Signin'
import Signup from './pages/Authentication/Signup'
import Dashboard from './pages/Dashboard/Dashboard'
import Dashboard1 from './pages/Dashboard/Dashboard1'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route exact path='/about' element={<Index1 />} />
          <Route exact path='/contact' element={<Index2 />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dashboard1' element={<Dashboard1 />} />
        </Routes>
      </Router>
      {/* <h1 className='bg-slate-600'>dasjld</h1> */}
    </>
  )
}

export default App
