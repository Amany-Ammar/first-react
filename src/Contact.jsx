// import React from 'react'

export default function Contact() {
    return (
        <>
        <div className="bg-white py-16">
            <form className="w-1/2 mx-auto">
                <div className="relative z-0 w-full mb-7 group">
                    <input type="text" name="userName" id="userName" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-[#1ABC9C] dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer" placeholder=" " required />
                    <label for="userName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userName</label>
                </div>
                <div className="relative z-0 w-full mb-7 group">
                    <input type="number" name="userAge" id="userAge" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-[#1ABC9C] dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer" placeholder=" " required />
                    <label for="userAge" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userAge</label>
                </div>
                <div className="relative z-0 w-full mb-7 group">
                    <input type="email" name="userEmail" id="userEmail" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-[#1ABC9C] dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer" placeholder=" " required />
                    <label for="userEmail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userEmail</label>
                </div>
                <div className="relative z-0 w-full mb-7 group">
                    <input type="password" name="userPassword" id="userPassword" className="block py-4 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-white dark:border-[#1ABC9C] dark:focus:border-[#1ABC9C] focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer" placeholder=" " required />
                    <label for="userPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#1ABC9C] peer-focus:dark:text-[#1ABC9C] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">userPassword</label>
                </div>
                <button type="submit" className="text-white bg-[#1ABC9C] hover:bg-[#35a08a] focus:ring-4 focus:outline-none focus:ring-[#1ABC9C] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#1ABC9C] dark:hover:bg-[#1ABC9C] dark:focus:ring-[#1ABC9C]">Submit</button>
            </form>
        </div>

        </>
    )
}
