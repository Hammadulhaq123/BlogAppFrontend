"use client"
import Alert from "@components/Alert";
import { useState, useEffect } from "react";
import Spinner from "@components/Spinner";

const page = ({ params }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);


    useEffect(() => {
        fetchBlog(params.blogdetail[1]);
    }, []);

    const fetchBlog = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/${id}`);
            const result = await response.json();
            if (result) {
                setData(result);
                setLoading(false);
            } else {
                setLoading(false);
                setData(null)
            }
        } catch (error) {
            setLoading(false);
            setError(true);
        }
    }
    console.log(data)

    return (
        <>
            {
                loading ? <Spinner /> : error ? <Alert message="Error While Loading the data" /> :
                    data &&
                    <main className="pt-8 pb-16 lg:pt-16 w-full lg:pb-24 flex flex-col items-center justify-start bg-white dark:bg-[#1c1c1c] antialiased">
                        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
                            <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                                <header className="mb-4 lg:mb-6 not-format">
                                    <address className="flex items-center mb-6 not-italic">
                                        <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                            <img className="mr-4 w-16 h-16 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" />
                                            <div>
                                                <a href="#" rel="author" className="text-xl font-bold text-gray-900 dark:text-white">Jeff Bezos</a>
                                                <p className="text-base text-gray-500 dark:text-gray-400">Graphic Designer, educator & CEO Flowbite</p>
                                                <p className="text-base text-gray-500 dark:text-gray-400"><time dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                            </div>
                                        </div>
                                    </address>
                                </header>
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{data.title}</h1>
                                </div>

                                <div id="content" className="flex text-gray-400 flex-col justify-start items-start gap-1">
                                    {data.content}
                                </div>

                            </article>
                        </div>


                    </main >

            }

        </>
    )
}

export default page
