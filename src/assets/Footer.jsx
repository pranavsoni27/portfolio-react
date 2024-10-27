import React, {useEffect} from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const Footer = () => {
  useEffect(() => {
    // Ensure Shery.js is loaded before calling the method
    if (window.Shery) {
      Shery.makeMagnet('.a');
    }
  }, []);

  return (
    <div className='pt-44 md:pt-10 pb-4 w-full bg-yellow-950 text-white flex flex-col justify-center items-center'>
        <div className='flex p-4 text-4xl gap-4'> 
                <a href="https://www.linkedin.com/in/pranavsoni27/" target='_blank'><FaLinkedin className='a rounded-md cursor-pointer hover:text-blue-900 hover:bg-white duration-200 hover:scale-105'/></a>
                <a href="https://github.com/pranavsoni27" target='_blank'><FaGithub className='a rounded-md cursor-pointer hover:text-black hover:bg-white duration-200 hover:scale-105'/></a>
                <a href="mailto: pranavsoni2702@gmail.com" target='_blank'><HiOutlineMail className='a rounded-md cursor-pointer hover:text-blue-500 hover:bg-white duration-200 hover:scale-105'/></a>
                <a href="https://www.instagram.com/pranavsonnii/" target='_blank'><FaInstagram className='a rounded-md cursor-pointer hover:text-red-500 hover:bg-white duration-200 hover:scale-105'/></a>                
        </div>

        <div>
                Copyright &copy;pranavsoni. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer