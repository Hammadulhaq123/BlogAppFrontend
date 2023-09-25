import Header from '@components/Header'
import '../globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@components/Sidebar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Blogs',
    description: 'Present your creative writing like a social media post.',
}

export default function RootLayout({ children }) {

    return (
        <>
            <Header />
            <div className='flex flex-row w-full h-full relative'>
                <div className='w-72 z-50 flex items-center justify-between fixed top-16 left-0'>
                    <Sidebar />

                </div>
                <div className='w-full md:w-[calc(100%-18rem)] overflow-y-auto overflow-x-hidden absolute top-16 right-0'>
                    {children}
                </div>
            </div>
        </>

    )
}