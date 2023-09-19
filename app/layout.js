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
        {children}
      </body>
    </html>
  )
}
