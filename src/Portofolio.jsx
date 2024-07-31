import img from './assets/port2.png'
import img2 from './assets/port3.png'
import img3 from './assets/poert1.png'
export default function Portofolio(){
    
    return(
        <>
        <div className="bg-white p-9">
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="uppercase text-4xl font-bold text-[#2C3E50]">portofolio component</h1>
                <div className="flex gap-4 items-center">
                    <div className="bg-[#2C3E50] h-[4px] w-[80px] rounded-sm"></div>
                    <i className="fa-solid fa-star text-lg"></i>
                    <div className="bg-[#2C3E50] h-[4px] w-[80px] rounded-sm"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 px-16">
                    <div className="relative overflow-hidden image-item">
                        <img src={img3} alt="" className='rounded-lg'/>
                        <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                            <i className="fa-solid fa-plus fa-6x text-white"></i>
                        </div>
                    </div>
                    <div className="relative overflow-hidden image-item">
                        <img src={img} alt="" className='rounded-lg'/>
                        <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                            <i className="fa-solid fa-plus fa-6x text-white"></i>
                        </div>
                    </div>
                    <div className="relative overflow-hidden image-item">
                        <img src={img2} alt="" className='rounded-lg'/>
                        <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                            <i className="fa-solid fa-plus fa-6x text-white"></i>
                        </div>
                    </div>
                    <div className="relative overflow-hidden image-item">
                        <img src={img3} alt="" className='rounded-lg'/>
                        <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                            <i className="fa-solid fa-plus fa-6x text-white"></i>
                        </div>
                    </div>
                    <div className="relative overflow-hidden image-item">
                        <img src={img} alt="" className='rounded-lg'/>
                        <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                            <i className="fa-solid fa-plus fa-6x text-white"></i>
                        </div>
                    </div>
                    <div className="relative overflow-hidden image-item">
                        <img src={img2} alt="" className='rounded-lg'/>
                        <div className="absolute flex justify-center items-center w-full h-full bg-[#1abc9cb0] top-0 cursor-pointer rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                            <i className="fa-solid fa-plus fa-6x text-white"></i>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
       
        </>
    )
}
