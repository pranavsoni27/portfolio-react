import React from 'react'
import jecrc1 from '../assets/jecrc1.jpeg'
import tvb from '../assets/tvb.jpeg'
import avm from '../assets/avm.jpeg'

const Education = () => {
        return (
                <div name="𝙴𝚍𝚞𝚌𝚊𝚝𝚒𝚘𝚗" className='pb-20 md:pb-28 pt-4 md:pt-0 w-full h-full bg-gradient-to-b from-black to-gray-800 text-white'>
                        <div className='max-w-screen-lg p-4 mx-auto flex flex-col '>
                                <div className='pb-8'>
                                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Education:</p>
                                </div>
                                <div className='mt-12 md:mt-20 md:ml-60'>
                                        <div className='flex flex-col md:flex-row  items-center'>
                                                <img className='w-24 md:w-34 h-24 bg-white mb-4 md:mb-0 p-1 rounded-full' src={jecrc1} alt="" />
                                                <div className='ml-20 md:ml-4'>
                                                        <p className='text-cyan-500'>Jaipur Engineering College and Research Centre, foundation - Jaipur.</p>
                                                        <p>Bachelor of Technology - Computer Science And Engineering</p>
                                                        <p>Aug 2021 - June 2025</p>
                                                        <p>Grade: 7.55 CGPA</p>
                                                </div>
                                        </div>
                                </div>
                                <div className='mt-12 md:ml-60'>
                                        <div className='flex flex-col md:flex-row  items-center'>
                                                <img className='w-24 md:w-34 h-24 bg-white mb-4 md:mb-0 p-1 rounded-full' src={tvb} alt="" />
                                                <div className='ml-4'>
                                                        <p className='text-cyan-500'>Tagore Vidhya Bhawan, shastri nagar - Jaipur.</p>
                                                        <p>Class - 12 (PCM)</p>
                                                        <p>July 2020 - March 2021</p>
                                                        <p>Grade: 92%</p>
                                                </div>
                                        </div>
                                </div>
                                <div className='mt-12 md:ml-60'>
                                        <div className='flex flex-col md:flex-row  items-center'>
                                                <img className='w-24 md:w-34 h-24 bg-white mb-4 md:mb-0 p-1 rounded-full' src={avm} alt="" />
                                                <div className='ml-4'>
                                                        <p className='text-cyan-500'>Sr. Sec. Adarsh Vidhya Mandir, banipark - Jaipur.</p>
                                                        <p>Class - 10</p>
                                                        <p>July 2017 - March 2018</p>
                                                        <p>Grade: 84.33%</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Education