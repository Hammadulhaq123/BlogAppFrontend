'use client'
import Loader from "@components/Loader";
import Post from "@components/Post";
import Alert from "@components/Alert";
import { useState, useEffect } from "react"
import Head from "next/head";


const page = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:8000/api/');
            const result = await response.json();
            if (result.length >= 1) {
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

    return (
        <>

            <div className="h-auto p-8">
                {loading ? (
                    <Loader />
                ) : data ?
                    <div className="flex flex-wrap p-4 gap-4">
                        {
                            data.map((post) => (
                                <Post title={post.title} content={post.content} slug={post.slug} />
                            ))
                        }
                    </div>
                    : error ?
                        <h1>
                            Internal server error.
                        </h1>
                        :
                        <h1>
                            Cannot find any post.
                        </h1>

                }
            </div>
        </>
    );
}


export default page
