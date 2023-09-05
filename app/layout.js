import Footer from './componentes/Footer'
import Header2 from './componentes/Heading2'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-[#222223] overflow-x-hidden">
      <Header2 />
        {children}
       
        </body>
    </html>
  )
}
