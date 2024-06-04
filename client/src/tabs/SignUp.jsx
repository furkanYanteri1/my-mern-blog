import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import profilePicture from '../../public/fy-icon.png'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'

export default function SignUp() {
   const [formData, setFormData] = useState({})
   const [errorMessage, setErrorMessage] = useState(null)
   const [loading, setloading] = useState(false)
   const handleChange = (e) => {
      setFormData({...formData,
         [e.target.id]: e.target.value.trim()})
      if(Object.values(formData).every(
         (value) => value !== null && value !== ''
      )){
         setErrorMessage(null)
      }
   }
   const handleSubmit = async (e) => {
      e.preventDefault()
      if(!formData.name ||!formData.email ||!formData.password) {
         setErrorMessage('All fields are required')
         return
      }
      try {
         setloading(true)
         setErrorMessage(null)
         const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         })
         const data = await res.json()
         if (data.success === false) {
            setErrorMessage(data.message)
         } else {
            setErrorMessage(null)
            setFormData({})
         }
         setloading(false)
      } catch (error) {
         console.log(error)
         setloading(false) 
      }
   }
   return (
      <div className='min-h-screen min-w-screen mt-5 md:mt-20'>

         <div className='flex p-3 max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5 md:gap-20'>

            {/* left div */}
            <div className='flex-1'>
               <Link className='whitespace-nowrap text-4xl font-bold dark:text-white' to="/">
                  <div className='flex items-center gap-0'>
                     <span className='hidden sm:inline py-1 px-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-lg text-white'>FurkanYanteri1</span>
                     <span className='py-1 inline sm:hidden'>
                        <img alt='Profile' className='w-8 h-8 rounded-md' src={profilePicture} />
                     </span>
                     <span className='bg-gradient-to-r text-transparent from-purple-400 to-blue-400 bg-clip-text'>Blog</span>
                  </div>
               </Link>
               <p className='text-sm mt-5'>
                  Hey mate :) Wellcome to my blog. Happy to see you here. You can sign up with your email and password, or with your Google Account.
               </p>
            </div>

            {/* right div */}
            <div className='flex-1'>
               <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                  <div className='mt-5 md:mt-0'>
                     <Label value='Your username:' />
                     <TextInput
                        id='name'
                        placeholder='username'
                        type='text' onChange={handleChange} />
                  </div>
                  <div>
                     <Label value='Your email:' />
                     <TextInput
                        id='email'
                        placeholder='name@xyz.com'
                        type='email' onChange={handleChange} />
                  </div>
                  <div>
                     <Label value='Your password:' />
                     <TextInput
                        id='password'
                        placeholder='password'
                        type='password' onChange={handleChange} 
                        
                     />
                  </div>
                  <Button className='bg-gradient-to-r from-teal-300 to-green-400' disabled={loading} type='submit' >
                     {
                        loading? (
                           <>
                              <Spinner size='sm' />
                              <span className='ml-3'>Loading</span>
                           </>
                        ) : 'Sign Up'
                     }
                  </Button>
                  <div className='flex flex-row justify-between'>
                     <div className='flex-gap-2 text-xs mt-5 text-gray-500'>
                        <span>Have an account?</span>
                        <Link to='/signin'>
                           <Button outline gradientDuoTone='purpleToBlue'>
                              Sing In
                           </Button>
                        </Link>
                     </div>
                     <div className='flex-gap-2 text-xs text-gray-500 mt-5'>
                        <span>Have a code?</span>
                        <Button outline gradientDuoTone='purpleToBlue'>
                           Code In
                        </Button>
                     </div>
                  </div>
                  {errorMessage && (
                     <Alert className='mt-1' color='red'>
                        {errorMessage}
                     </Alert>
                  )}
               </form>
            </div>

         </div>

      </div>
   )
}
