import { Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-lg lg:text-2xl font-semibold dark:text-white'>
            <span className='py-1 px-2 bg-gradient-to-r from-cyan-600 to-indigo-500 rounded-lg text-white'>Furkan&apos;s</span>
            Blog
        </Link>
    </Navbar>
  )
}
