import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <div className='h-full'>
        <Navbar />
        <main className='container grow'>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout