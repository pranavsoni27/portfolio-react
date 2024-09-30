import React from 'react'
import pranavv from '../assets/pranavv.png'
import {useTypewriter} from 'react-simple-typewriter'
import {MdOutlineKeyboardArrowDown, MdOutlineNorthEast} from 'react-icons/md'

const Home = () => {

  const [typeEffect] = useTypewriter({
    words: ['Pranav Soni', 'Web Developer', 'Java Programmer', 'Problem Solver'],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  return (
    <div name ="𝙷𝚘𝚖𝚎" className='pt-6 md:pt-0 h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-auto px-4 lg:pt-16 md:flex-row'>
                <div className='flex flex-col justify-center h-full mt-32 pl-4'>
                      <h2 className='text-4xl  sm:text-6xl font-bold text-white'>Hi, I'm <br /><span className='text-cyan-500'>'{typeEffect}</span></h2>  
                      <p className='text-gray-400 max-w-3xl pt-8 pb-8'>Proficiency in HTML, CSS, JavaScript, React.js, and Node.js, I builds responsive and beautiful websites that adapt to various devices and screen sizes. Additionally, my interest in UI/UX design fuels my passion for creating visually appealing and user-friendly interfaces with help of figma design.
                      </p>
                      <div className='w-40'>
                        <a href="https://drive.google.com/file/d/1CZbL9zMVj5bUPZXC6qvV1Fa8W-WkoNYx/view?usp=sharing" target='_blank'><button className='text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-200'>My Resume <span><MdOutlineNorthEast size={20} className='ml-1'/></span></button></a>
                        
                      </div>
                </div>

                <div className='pl-8 pt-4 md:pt-16'>
                  <img className='bg-cyan-950 blob-effect border-4 border-cyan-600 hover:scale-105 duration-200 rounded-full mx-12 w-2/3 md:w-80 md:mt-0 mt-16' src={pranavv} alt="" />
                </div>
        </div>

        {/* <div className='flex justify-center pt-16 md:hidden   items-center'>
        <MdOutlineKeyboardArrowDown size={45} className='ml-1 text-white'/>
        </div> */}
        
    </div>
  )
}

export default Home