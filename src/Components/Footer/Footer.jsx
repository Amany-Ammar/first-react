import React from 'react'

export default function Footer() {
  return (<>
    <div className='bg-[#2C3E50] p-9 text-white grid grid-cols-1 lg:grid-cols-3 gap-7'>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='uppercase text-3xl font-semibold'>location</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
            <h2 className='uppercase text-3xl font-semibold'>around the web</h2>
            <div className="flex gap-4">
                <div className='border border-white rounded-full w-9 h-9 flex justify-center items-center'>
                    <i className="fa-brands fa-facebook"></i>
                </div>
                <div className='border border-white rounded-full w-9 h-9 flex justify-center items-center'>
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div className='border border-white rounded-full w-9 h-9 flex justify-center items-center'>
                    <i className="fa-brands fa-linkedin-in"></i>
                </div>
                <div className='border border-white rounded-full w-9 h-9 flex justify-center items-center'>
                    <i className="fa-solid fa-globe"></i>
                </div>
            </div>   
        </div>
        <div className='flex flex-col justify-center items-center gap-2 px-5'>
            <h2 className='uppercase text-3xl font-semibold'>about freelancer</h2>
            <p className='text-center'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
    </div>
    <div className="bg-[#1A252F]">
        <p className="text-center text-white py-5">Copyright &copy; Your Website 2021</p>
    </div>
</>)
  
}
