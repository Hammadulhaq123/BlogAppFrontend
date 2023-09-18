import Header from '@components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@components/Footer'
import Sidebar from '@components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bloggify',
  description: 'Present your creative writing like a social media post.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className='flex flex-row w-full h-full relative'>
          <div className='w-60 h-full hidden lg:flex flex-col fixed top-16 left-0'>
            <Sidebar />
          </div>
          <div className='w-full lg:w-[calc(100%-15rem)] overflow-y-auto overflow-x-hidden absolute top-16 right-0'>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
