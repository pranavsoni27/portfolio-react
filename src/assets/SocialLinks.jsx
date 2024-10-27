import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'

const SocialLinks = () => {

        const links = [
                {
                     id: 1,
                     child: (
                        <>LinkedIn <FaLinkedin size={30}/></>
                     ), href: 'https://www.linkedin.com/in/pranavsoni27/',
                     style: 'rounded-tr-md' 
                },
                {
                        id: 2,
                        child: (
                           <>Github <FaGithub size={30}/></>
                        ), href: 'https://github.com/pranavsoni27'
                },
                {
                        id: 3,
                        child: (
                           <>Email <HiOutlineMail size={30}/></>
                        ), href: 'mailto: pranavsoni2702@gmail.com'
                },
                {
                        id: 4,
                        child: (
                           <>Instagram <FaInstagram size={30}/></>
                        ), href: 'https://www.instagram.com/pranavsonnii/',
                        style: 'rounded-br-md',
                        download: true,
                },
        ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
                {links.map(({id, child, href, style, download}) => (
                        <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-white/1 backdrop-blur-md hover:ml-[-10px] hover:rounded-md duration-300' + ' ' + style}>
                                <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noreferrer'>
                        {child}
                        </a>
                </li>
                ))}
                
        </ul>
    </div>
  )
}

export default SocialLinks