import { Button, Navbar, TextInput } from 'flowbite-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa';
import profilePicture from '../../public/fy-icon.png'

export default function Header() {
   const path = useLocation().pathname
   
   return (
      <Navbar className='border-b-2 bg-gradient-to-r from-purple-200 to-blue-200' >
         <Link className='self-center whitespace-nowrap text-sm sm:text-lg lg:text-2xl font-semibold dark:text-white' to="/">
            <div className='flex items-center gap-0'>
               <span className='hidden sm:inline py-1 px-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg text-white'>FurkanYanteri1</span>
               <span className='py-1 inline sm:hidden'>
                  <img alt='Profile' className='w-8 h-8 rounded-md' src={profilePicture} />
               </span>
               <span className='bg-gradient-to-r text-transparent from-purple-400 to-blue-400 bg-clip-text'>Blog</span>
            </div>
         </Link>
        
         <form>
            <TextInput className='hidden lg:inline' 
               placeholder='Search...' 
               rightIcon={AiOutlineSearch} 
               type='text'
            />  
         </form>

         <Button pill className='w-12 h-10 lg:hidden ' color='gray'>
            <AiOutlineSearch className='' />
         </Button>

         <div className='flex gap-2 md:order-2'>
            <Button pill className='bg-gray-100'>
               <FaMoon color='black'/>
            </Button>
            <Link to='/signin'>
               <Button outline gradientDuoTone='purpleToBlue'>
                  Sing In
               </Button>
            </Link>
            <Navbar.Toggle /> 
         </div>
         <Navbar.Collapse>
            <Navbar.Link active={path === '/'} as={'div'}>
               <Link to='/'>
                  Home
               </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/about'} as={'div'}>
               <Link to='/about'>
                  About
               </Link>
            </Navbar.Link>
            <Navbar.Link active={path === '/projects'} as={'div'}>
               <Link to='/projects'>
                  Projects
               </Link>
            </Navbar.Link>
         </Navbar.Collapse>
      </Navbar>
   )
}
