"use client"
import Link from "next/link"
import { useEffect } from "react"
import axiosInstance from "@axios"
import { useRouter } from "next/navigation"

const Profile = () => {

    const router = useRouter();

    const handleClick = () => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem("refresh_token"),
        })
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        axiosInstance.defaults.headers['Authorization'] = null;
        console.log(response)
        router.push("/login/");

    }
    return (
        <div className='rectangle bg-gray-100 dark:bg-[#0e0e10] h-auto py-4 px-4 mb-4 w-full sm:w-full flex items-center justify-start gap-2 rounded-xl'>
            <div className="w-8 h-8 rounded-full border flex items-center justify-between border-blue-500" >
                <svg className="w-full h-full text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#1c1c1c" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>

            </div >
            <div className="flex flex-col ">
                <span className="text-sm font-semibold gradient">Your Name</span>
                <span className="text-xs text-[#1c1c1c] dark:text-gray-100">@username</span>
            </div>
            <div className="ml-auto">
                <button onClick={() => { handleClick() }} className="text-sm bg-blue-600 rounded-lg p-1 font-semibold">logout</button>
            </div>

        </div >
    )
}

export default Profile
