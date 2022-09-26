import React from 'react'
import { dashboardLinks } from '../utils/data'
import { HiOutlineLogout } from 'react-icons/hi'
import { FiLogOut } from 'react-icons/fi'
import { Link, Navigate, useNavigate, NavLink } from 'react-router-dom'

const active = ""

const nonActive = ""

const Sidebar = () => {

    const navigate = useNavigate()

    const logOut = () => {
        localStorage.setItem('token', '')
        window.location.reload()
    }

    return (
        <div className='flex flex-col h-screen p-8 gap-12 w-full'>

            <Link to="/">
                <span className='text-3xl font-bold p-4'>Dashboard</span>
            </Link>

            <div className='flex flex-col justify-between h-full'>
                <div className='linksSide flex flex-col gap-2'>
                    {
                        dashboardLinks.map((item) => (
                            <NavLink key={item.link} to={`/${item.link.toLowerCase()}`} className={({ isActive }) => (isActive ? 'bg-slate-200 rounded-xl' : 'rounded-xl hover:bg-slate-100')}>
                                <div className="text-xl uppercase flex flex-row gap-2 items-center p-4  rounded-xl cursor-pointer">
                                    <span>{item.icon}</span>
                                    <span className='lg:block hidden'>{item.link}</span>
                                </div>
                            </NavLink>
                        ))
                    }
                </div>
                <div className='flex flex-row gap-2 p-4 items-center hover:bg-red-200 rounded-xl cursor-pointer'>
                    <HiOutlineLogout size={24} />
                    <span className='uppercase' onClick={logOut}>Esci</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar