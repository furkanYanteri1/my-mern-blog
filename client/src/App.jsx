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
            <Route element={<Home />} path='/' />
            <Route element={<About />} path='/about' />
            <Route element={<Dashboard />} path='/dashboard' />
            <Route element={<Projects />} path='/projects' />
            <Route element={<SignIn />} path='/sign-in' />
            <Route element={<SignUp />} path='/sign-up' />
      
         </Routes>
      </BrowserRouter>
   )
}
