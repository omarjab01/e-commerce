import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
    return (
        <div className='flex flex-row h-screen overflow-hidden'>
            <div className='col-span-2 h-screen bg-white sidebardiv'>
                <Sidebar />
            </div>
            <div className='col-span-10 h-screen bg-slate-50 p-6 w-full'>
                <Navbar />
                <div className='bg-slate-50 h-full overflow-hidden mt-6'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Layout