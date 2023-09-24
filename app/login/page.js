"use client"
import Link from "next/link"
import Image from "next/image"
import axiosInstance from "@axios"
import { useState } from "react"
import { useRouter } from "next/navigation"


const page = () => {

    const router = useRouter()

    const initialFormData = Object.freeze({
        email: "",
        password: "",
    })

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            // trimming the whitespaces from the value
            [e.target.name]: e.target.value.trim(),
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        axiosInstance
            .post(
                'token/', {
                "email": formData.email,
                "password": formData.password,

            }
            )
            .then((res) => {
                localStorage.setItem("access_token", res.data.access);
                localStorage.setItem("refresh_token", res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] = "JWT " + localStorage.getItem("access_token")
                router.push("/blogs");
                // console.log(res);
                // console.log(res.data);
            })
    }

    return (
        <>

            <div className="flex justify-center items-center w-screen h-auto lg:h-screen dark:bg-[#1c1c1c] bg-white">
                {/* <!-- COMPONENT CODE --> */}
                <div className="container mx-auto my-4 px-4 lg:px-20">

                    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 bg-gray-100 dark:bg-[#0e0e10] mr-auto rounded-2xl shadow-2xl">
                        <div className="flex">
                            <Link href="/" className="flex items-center">
                                <Image src='dark-logo.svg' width={40} height={30} alt="Logo" />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap gradient">Bloggify</span>
                            </Link>
                        </div>
                        <form>

                            <div className="grid grid-cols-1 gap-5 mt-5">
                                <input className="w-full bg-white dark:bg-[#1c1c1c] dark:text-white text-[#1c1c1c] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="email" type="email" onChange={handleChange} placeholder="Email" required />
                            </div>

                            <div className="grid grid-cols-1 gap-5 mt-5">
                                <input className="w-full bg-white dark:bg-[#1c1c1c] dark:text-white text-[#1c1c1c] mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    name="password" onChange={handleChange} type="password" placeholder="Password" minLength={8} required />
                            </div>


                            <div className="my-5 w-1/2 lg:w-1/4">
                                <button type="submit" onClick={handleSubmit} className="uppercase text-sm font-bold tracking-wide bg-gradient text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>

                    <div
                        className="w-full lg:-mt-[20rem] lg:w-2/6 px-8 py-12 ml-auto bg-gradient shadow-md shadow-gray-200 dark:shadow-[#1c1c1c] rounded-2xl">
                        <div className="flex flex-col text-white">
                            <h1 className="font-bold uppercase text-4xl  my-4">Welcome Back!</h1>
                            <p className="text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                tincidunt arcu diam,
                                eu feugiat felis fermentum id. Curabitur vitae nibh viverra, auctor turpis sed, scelerisque ex.
                            </p>



                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/ENLIGHTENEERING/" target="_blank" rel="noreferrer" className="rounded-full bg-[#fff] h-8 w-8 inline-block mx-1 text-center pt-1">
                                    <i className="fab fa-facebook-f text-white" />
                                </a>
                                <a href="https://www.linkedin.com/company/enlighteneering-inc-" target="_blank" rel="noreferrer" className="rounded-full bg-[#fff] h-8 w-8 inline-block mx-1 text-center pt-1">
                                    <i className="fab fa-linkedin-in text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- COMPONENT CODE --> */}
            </div>


        </>
    )
}

export default page
