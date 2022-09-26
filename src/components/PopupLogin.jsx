import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/userSlice'


const PopupLogin = ({ open, setOpen, setRegister }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(false)

    const loginUser = async () => {

        const req = await fetch("http://localhost:3001/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password
            })
        })

        const data = await req.json();

        if (data.status === 'ok') {
            localStorage.setItem('token', data.token)
            const token = localStorage.getItem('token')
            getUserDetails(token)
            setTimeout(() => {
                setError(false)
                setOpen(false)
                // window.location.reload()
                navigate('/')
            }, 2000)

        } else {
            setError(true)
        }
        console.log(data)
    }

    const getUserDetails = async (tokenUser) => {
        const req = await fetch("http://localhost:3001/getUserDetails", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-access-token': tokenUser },
            body: JSON.stringify({
                tokenUser,
            })
        })

        const data = await req.json();

        console.log(data)
        if (data.status === 'ok') {
            dispatch(update({ nome: data.nome, email: data.email, token: data.token }))
        }

    }

    const openRegisterModal = () => {
        setOpen(false)
        setRegister(true)
    }

    return (
        <div className='overlay'>
            <div className='popupLogin p-8 rounded-2xl bg-white'>
                <div className='flex flex-row justify-between'>
                    <span className='text-2xl font-semibold'>Accedi al tuo account</span>
                    <MdClose
                        onClick={() => setOpen(false)}
                        className="cursor-pointer"
                    />
                </div>
                <div className='w-full grid grid-col-1 gap-4 mt-12'>
                    <input type="email" placeholder='Email' className='p-4 rounded-xl border-slate-500 border w-full'
                        value={email} onChange={(event) => setEmail(event.target.value)}
                    />
                    <input type="password" placeholder='Password' className='p-4 rounded-xl border-slate-500 border w-full'
                        value={password} onChange={(event) => setPassword(event.target.value)}
                    />
                    <p>Non hai un account?<span className='text-green-600 font-medium' onClick={openRegisterModal}> Crealo Ora</span></p>
                    <button className='bg-green-400 py-4 text-white rounded-2xl' onClick={loginUser}>Accedi</button>
                </div>
            </div>
        </div>
    )
}

export default PopupLogin