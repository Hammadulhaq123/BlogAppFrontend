import Link from "next/link"


const Profile = () => {
    return (
        <div className='rectangle bg-gray-100 dark:bg-[#0e0e10] h-auto py-4 px-4 mb-4 w-full sm:w-full flex flex-col items-center justify-start gap-2 rounded-xl'>
            <div className="w-28 h-28 rounded-full border-4 flex items-center justify-center border-blue-500">
                <svg className="w-full h-full text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#1c1c1c" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
            </div>
            <div className='link-cont w-full h-auto gap-4 flex flex-col py-2'>
                <Link className="w-full h-12 rounded-lg transition-all hover:border hover:border-blue-500 px-6 py-1 bg-white dark:bg-[#1c1c1c] text-[#1c1c1c] dark:text-white text-lg font-bold flex gap-4 justify-start items-center" href="/info/pro">
                    <i className='fa-solid fa-star text-gradient'></i>
                    <span className='gradient text-md'>Be a Pro</span>
                </Link>

                <button className="w-full h-12 rounded-lg transition-all hover:border hover:border-blue-500 px-6 py-1 bg-white dark:bg-[#1c1c1c] text-[#1c1c1c] dark:text-white text-lg font-bold flex gap-4 justify-start items-center" href="/info/pro">
                    <i className='fa-solid fa-right-from-bracket text-gradient'></i>
                    <span className='gradient text-md'>Logout</span>
                </button>


            </div>
        </div>
    )
}

export default Profile
