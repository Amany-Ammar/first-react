import React from 'react'
import avatar from './assets/avataaars.svg'

export default function Home() {
  return (
    <>
    <div className='bg-[#1ABC9C] py-9'>
        <div className="flex flex-col justify-center items-center text-white gap-4">
            <img src={avatar} alt="" className='w-1/5' />
            <h1 className='text-4xl uppercase font-bold'>start framework</h1>
            <div className="flex gap-4 items-center">
                <div className="bg-white h-[4px] w-[80px] rounded-sm"></div>
                <i className="fa-solid fa-star text-lg"></i>
                <div className="bg-white h-[4px] w-[80px] rounded-sm"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
    </div>
    </>
  )
}
