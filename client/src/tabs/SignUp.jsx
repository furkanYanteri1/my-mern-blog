import React from 'react'
import { Link } from 'react-router-dom';
import profilePicture from '../../public/fy-icon.png'
import { Button, Label, TextInput} from 'flowbite-react'

export default function SignUp() {
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
               <form className='flex flex-col gap-4'>
                  <div className='mt-5 md:mt-0'>
                     <Label value='Your username:' />
                     <TextInput  
                        id='username '
                        placeholder='username'
                        type='text'/>
                  </div>
                  <div>
                     <Label value='Your email:' />
                     <TextInput  
                        id='email '
                        placeholder='name@xyz.com'
                        type='text'/>
                  </div>
                  <div>
                     <Label value='Your password:' />
                     <TextInput  
                        id='password '
                        placeholder='password'
                        type='text'/>
                  </div>
                  <Button className='bg-gradient-to-r from-teal-300 to-green-400' >
                     Sign Up 
                  </Button>
                  <div className='flex flex-row justify-between'>
                     <div className='flex-gap-2 text-xs mt-5 text-gray-500'>
                        <span>Have an account?</span>
                        <Link to='/sign-in'>
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
               </form>
            </div>

         </div>

      </div>
   )
}
