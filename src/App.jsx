import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './tabs/Home'
import About from './tabs/About'
import Dashboard from './tabs/Dashboard'
import Projects from './tabs/Projects'
import SignIn from './tabs/SignIn'
import SignUp from './tabs/SignUp'
import Header from './components/Header'

export default function main() {
  return (
   <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      
    </Routes>
   </BrowserRouter>
  )
}
