import React, {useEffect, useState} from 'react'

const Experience = () => {
        const [duration, setDuration] = useState({});

        useEffect(() => {
                // Ensure Shery.js is loaded before calling the method
                if (window.Shery) {
                  Shery.makeMagnet('.a');
                }
        }, []);

        useEffect(() => {
                const startDate = new Date('2025-09-29T00:00:00');
                
                const updateDuration = () => {
                        const now = new Date();
                        const diff = now - startDate;
                        
                        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
                        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
                        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                        
                        setDuration({
                                years,
                                months,
                                days,
                                hours,
                                minutes,
                                seconds
                        });
                };
                
                updateDuration();
                const interval = setInterval(updateDuration, 1000);
                
                return () => clearInterval(interval);
        }, []);

        return (
                <div name="𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎" className='pb-20 md:pb-28 pt-8 md:pt-0 w-full h-full bg-gradient-to-b from-green-950 to-green-950 text-white'>
                        <div className='max-w-screen-lg p-4 mx-auto flex flex-col '>
                                <div className='pb-8'>
                                        <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience:</p>
                                </div>
                                <div className='bb mt-12 md:mt-20 md:ml-60'>
                                        <div className='flex flex-col md:flex-row  items-center'>
                                                <img className='a w-24 md:w-34 h-24 bg-white mb-4 md:mb-0 p-1 rounded-full' src="https://images.seeklogo.com/logo-png/8/1/kpmg-logo-png_seeklogo-80055.png" alt="KPMG Logo" />
                                                <div className='flex flex-col items-center md:ml-4'>
                                                        <p className='text-cyan-500'>KPMG India · Full-time</p>
                                                        <p>Analyst Software Engineer</p>
                                                        <p className="text-center md:text-left">September 2025 - Present</p>
                                                        <p className="text-center md:text-left text-sm text-gray-400">( {duration.years || 0} years · {duration.months || 0} months · {duration.days || 0} days · {duration.hours || 0} hours · {duration.minutes || 0} minutes · {duration.seconds || 0} seconds )</p>
                                                        <p>Bengaluru · On-site</p>
                                                        <p className='text-sm text-gray-300 mt-2'>Skills: React.js · Java · Spring Boot · JavaScript · Core Java · Bootstrap · JDBC · Spring Framework · Spring · Spring Integration · MySQL · SQL · Oracle sql · SQL Server Management Studio · Microsoft SQL Server</p>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Experience
