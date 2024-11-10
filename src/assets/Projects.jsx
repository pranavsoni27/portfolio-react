import React, {useEffect} from 'react'
import p1 from '../assets/p1.png'
import lo from '../assets/locatrix.png'
import server from '../assets/server.png'
import p4 from '../assets/quickdocmeet.png'

const Projects = () => {
        useEffect(() => {
                // Ensure Shery.js is loaded before calling the method
                if (window.Shery) {
                  Shery.makeMagnet('.a');
                }
        }, []);

        return (
                <div name="𝙿𝚛𝚘𝚓𝚎𝚌𝚝𝚜" className='pb-24 md:pt-3 md:pb-28 bg-gradient-to-b from-orange-950 to-blue-950 w-full text-white'>
                        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                                <div className='pb-20'>
                                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Projects:</p>
                                </div>

                                <div className='flex flex-col md:flex-row gap-16 px-12'>
                                        <div className='bb md:w-1/2'>
                                                <img className='a rounded-lg border-2 border-cyan-500' src={p1} alt="" />
                                        </div>
                                        <div className='bb'>
                                                <p className='text-3xl'><span className='text-cyan-500 font-bold'>Title: </span>Personal Portfolio Website</p>
                                                <p className='text-xl mt-2'><span className='text-cyan-500 font-bold'>Technologies/Tools Used: </span>Html, css, javascript, react.js, tailwind css, figma, github, netlify</p>
                                                <div className='mt-2 flex ml-8 md:ml-16 gap-16'>
                                                        <a href="https://github.com/pranavsoni27/portfolio-react.git" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>My Code</button></a>
                                                        <a href="https://pranavsoni.netlify.app" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Live Demo</button></a>
                                                        
                                                </div>
                                        </div>  
                                </div>

                                <hr className='bg-white mb-9'/>

                                <div className='flex flex-col md:flex-row gap-16 px-12'>
                                        <div className='bb md:w-1/2'>
                                                <img className='a rounded-lg border-2 border-cyan-500' src={lo} alt="" />
                                        </div>
                                        <div className='bb'>
                                                <p className='text-3xl'><span className='text-cyan-500 font-bold'>Title: </span>Locatrix - Track Your Location</p>
                                                <p className='text-xl mt-2'><span className='text-cyan-500 font-bold'>Technologies/Tools Used: </span>Html, Css, JavaScript, Express.js, EJS, Socket.io, Leaflet, Github, Glitch</p>
                                                <div className='mt-2 flex ml-8 md:ml-16 gap-16'>
                                                        <a href="https://github.com/pranavsoni27/locatrix.git" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>My Code</button></a>
                                                        <a href="https://pointy-rambunctious-intelligence.glitch.me/" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Live Demo</button></a>
                                                </div>
                                        </div>  
                                </div>

                                <hr className='bg-white mb-9'/>

                                <div className='flex flex-col md:flex-row gap-16 px-12'>
                                        <div className='bb md:w-1/2'>
                                                <img className='a rounded-lg border-2 border-cyan-500' src={server} alt="" />
                                        </div>
                                        <div className='bb'>
                                                <p className='text-3xl'><span className='text-cyan-500 font-bold'>Title: </span>ThreadServer: Connecting multiple clients to server</p>
                                                <p className='text-xl mt-2'><span className='text-cyan-500 font-bold'>Technologies/Tools Used: </span>Java, Java Sockets, Java Threads, Jmeter, Github</p>
                                                <div className='mt-2 flex items-center justify-center ml-8 md:-ml-24 gap-16'>
                                                <a href="https://github.com/pranavsoni27/Server.git" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>My Code</button></a>
                                                {/* <a href="" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Live Demo</button></a> */}
                                                </div>
                                        </div>  
                                </div>

                                <hr className='bg-white mb-9'/>

                                <div className='flex flex-col md:flex-row gap-16 px-12'>
                                        <div className='bb md:w-1/2'>
                                                <img className='a rounded-lg border-2 border-cyan-500' src={p4} alt="" />
                                        </div>
                                        <div className='bb'>
                                                <p className='text-3xl'><span className='text-cyan-500 font-bold'>Title: </span>QuickDocMeet</p>
                                                <p className='text-xl mt-2'><span className='text-cyan-500 font-bold'>Technologies/Tools Used: </span>Html, css, javascript, react.js, tailwind css, figma, github, netlify</p>
                                                <div className='mt-2 flex ml-8 md:ml-16 gap-16'>
                                                <a href="https://github.com/pranavsoni27/QuickDocMeet.git" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>My Code</button></a>
                                                <a href="https://quickdocmeet.netlify.app" target='_blank'><button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-110 duration-300'>Live Demo</button></a>
                                                </div>
                                        </div>  
                                </div>


                                

                        </div>
                </div>
        )
}

export default Projects