import React from 'react'

const Contact = () => {
  return (
    <>
      <div name="𝙲𝚘𝚗𝚝𝚊𝚌𝚝" className='w-full bg-gradient-to-b from-blue-950 to-yellow-950 text-white'>
        <div className='flex flex-col p-4 max-w-screen-lg mx-auto h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me:</p>
            <p className='py-6 text-cyan-500'>Submit the form below to get in touch with me</p>
          </div>

          <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/ajjelzda" method='POST' className='flex flex-col w-full md:w-1/2'>
              <input required className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="text" name="name" placeholder='Enter your name' />
              <input required className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' type="email" name="email" placeholder='Enter your email' />
              <textarea required className='p-2 bg-transparent border-2 rounded-md text-white focu:outline-none' name="message" rows={10} id="" placeholder='Enter your message'></textarea>
              <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact