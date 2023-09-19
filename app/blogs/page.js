'use client'
import Loader from "@components/Loader";
import Post from "@components/Post";
import { useState, useEffect } from "react"


const page = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://127.0.0.1:8000/api');
            const result = await response.json();
            setData(result);
            setLoading(false);
        } catch (error) {
            setLoading(true);
        }
    }
    console.log(data)
    return (
        <div className="h-auto p-8">
            {loading ? (
                <Loader />
            ) : data &&
            <div className="flex flex-wrap p-4 gap-4">
                {
                    data.map((post) => (
                        <Post title={post.title} content={post.content} />
                    ))
                }
            </div>

            }
        </div>
    );
}


export default page
