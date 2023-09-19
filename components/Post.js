import Link from 'next/link'


const Post = ({ title, content }) => {
    return (
        <div>
            <Link href="#" class="flex flex-col h-60 w-[33rem] items-start justify-start p-4 bg-gray-50 rounded-xl shadow shadow-gray-100 dark:shadow-[#4c4c4c] md:flex-row md:max-w-xl hover:shadow-blue-300  dark:bg-[#0e0e10] dark:hover:shadow-blue-500">
                <div className='rectangle bg-[#1c1c1c] h-full py-4 px-4 mb-4 w-48 sm:w-48 flex flex-col items-center justify-start gap-2 rounded-xl'>
                    <img src="/user.jpg" className='w-16 h-16 rounded-full border-2 border-blue-500 object-scale-up' alt="user-image" />
                    <span className='text-center text-sm text-blue-600'>
                        Profile details goes here...
                    </span>
                    <div className='link-cont w-full h-auto gap-4 flex flex-col py-2'>


                        <button className="w-full h-10 rounded-lg transition-all hover:bg-blue-700 py-1 bg-blue-600 text-white text-md font-semibold flex  justify-center items-center" href="/info/pro">
                            <span className='text-white text-md'>Read More</span>
                        </button>


                    </div>
                </div>
                <div class="h-full w-full flex flex-col justify-start items-start px-4 py-2 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title.substr(0, 30)}...</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content.substr(0, 150)}...</p>
                </div>
            </Link>

        </div>
    )
}

export default Post
