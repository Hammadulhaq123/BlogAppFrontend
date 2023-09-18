import Link from 'next/link'


const Post = ({ title, content }) => {
    return (
        <div>
            <Link href="#" class="flex flex-col h-60 w-full items-center bg-gray-50 rounded-lg shadow shadow-gray-100 dark:shadow-[#4c4c4c] md:flex-row md:max-w-xl hover:bg-gray-100  dark:bg-[#191919] dark:hover:bg-[#4c4c4c]">
                <img class="object-cover w-full rounded-t-lg h-full md:h-full md:w-56 md:rounded-none md:rounded-l-lg" src="/image.jpg" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
                </div>
            </Link>

        </div>
    )
}

export default Post
