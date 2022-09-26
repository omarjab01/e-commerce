import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiNotification3Line } from 'react-icons/ri'
import { BiMessageDetail } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import PopupLogin from './PopupLogin'
import PopupRegistrazione from './PopupRegistrazione'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [register, setRegister] = useState(false)

    const storeName = useSelector(state => state.user.nome)

    console.log(storeName)

    return (
        <>
            <div className='flex flex-row justify-between items-center'>
                <GiHamburgerMenu size={24} className="cursor-pointer" />
                <div className='flex gap-4 items-center'>
                    <div className='flex gap-2 items-center relative mr-12'>
                        <AiOutlineSearch className='absolute ml-3' size={20} />
                        <input type="search" placeholder="Cerca" className='p-2 pl-10 rounded-3xl' />
                    </div>
                    <ul className='flex flex-row gap-2 items-center'>
                        <li>
                            <RiNotification3Line size={24} />
                        </li>
                        <li>
                            <BiMessageDetail size={24} />
                        </li>
                    </ul>
                    {
                        !storeName ? (
                            <button onClick={() => setOpen(true)} className="px-6 py-3 bg-green-500 text-white rounded-lg">Accedi</button>

                        ) : (
                            <span className='text-2xl font-semibold'>👋 {storeName}</span>
                        )
                    }

                </div>
            </div>

            {
                open && <PopupLogin
                    open={open}
                    setOpen={setOpen}
                    setRegister={setRegister}
                />
            }
            {
                register && <PopupRegistrazione
                    register={register}
                    setRegister={setRegister}
                    setOpen={setOpen}
                />
            }

        </>
    )
}

export default Navbar