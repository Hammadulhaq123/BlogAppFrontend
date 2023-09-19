import Link from "next/link"


const Profile = () => {
    return (
        <div className='rectangle bg-[#0e0e10] h-auto py-4 px-4 mb-4 w-full sm:w-full flex flex-col items-center justify-start gap-2 rounded-xl'>
            <img src="/user.jpg" className='w-28 h-28 rounded-full border-2 border-blue-500 object-scale-up' alt="user-image" />
            <div className='link-cont w-full h-auto gap-4 flex flex-col py-2'>
                <Link className="w-full h-12 rounded-lg transition-all hover:border hover:border-blue-500 px-6 py-1 bg-[#1c1c1c] text-white text-lg font-bold flex gap-4 justify-start items-center" href="/info/pro">
                    <i className='fa-solid fa-star text-gradient'></i>
                    <span className='text-white text-lg'>Be a Pro</span>
                </Link>

                <button className="w-full h-12 rounded-lg transition-all hover:border hover:border-blue-500 px-6 py-1 bg-[#1c1c1c] text-white text-lg font-bold flex gap-4 justify-start items-center" href="/info/pro">
                    <i className='fa-solid fa-right-from-bracket text-gradient'></i>
                    <span className='text-white text-lg'>Logout</span>
                </button>


            </div>
        </div>
    )
}

export default Profile
