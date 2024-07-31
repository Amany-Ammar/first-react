function About(){
    return(
        <>
        <div className='bg-[#1ABC9C] text-white p-36'>
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="uppercase text-4xl font-bold">about component</h1>
                <div className="flex gap-4 items-center">
                    <div className="bg-white h-[4px] w-[80px] rounded-sm"></div>
                    <i className="fa-solid fa-star text-lg"></i>
                    <div className="bg-white h-[4px] w-[80px] rounded-sm"></div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <p className="">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className="">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default About