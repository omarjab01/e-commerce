import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const PopupRegistrazione = ({ open, setOpen, register, setRegister }) => {

    const navigate = useNavigate();

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cognome, setCognome] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState(false);

    const creaAccount = async () => {
        const res = await fetch("http://localhost:3001/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome, cognome, email, password
            })
        })

        const data = await res.json();

        if (data.status === 'ok') {
            !error && setError(false)
            navigate('/')
        } else {
            setError(true)
        }
        console.log(data)

    }




    const openLogin = () => {
        setRegister(false)
        setOpen(true)
    }

    return (
        <div className='overlay'>
            <div className='popupLogin p-8 rounded-2xl bg-white'>
                <div className='flex flex-row justify-between'>
                    <span className='text-2xl font-semibold'>Crea Account</span>
                    <MdClose
                        onClick={() => setRegister(false)}
                        className="cursor-pointer"
                    />
                </div>
                <div className='w-full grid grid-col-1 gap-4 mt-12'>

                    <input type="text" placeholder='Nome' className='p-4 rounded-xl border-slate-500 border w-full'
                        value={nome} onChange={(event) => setNome(event.target.value)}
                    />
                    <input type="text" placeholder='Cognome' className='p-4 rounded-xl border-slate-500 border w-full'
                        value={cognome} onChange={(event) => setCognome(event.target.value)}
                    />
                    <input type="email" placeholder='Email' className='p-4 rounded-xl border-slate-500 border w-full'
                        value={email} onChange={(event) => setEmail(event.target.value)}
                    />
                    <input type="password" placeholder='Password' className='p-4 rounded-xl border-slate-500 border w-full'
                        value={password} onChange={(event) => setPassword(event.target.value)}
                    />

                    <p>Hai già un account?<span className='text-green-600 font-medium' onClick={openLogin}> Accedi</span></p>
                    <button className='bg-green-400 py-4 text-white rounded-2xl' onClick={creaAccount}>Crea Account</button>
                </div>
            </div>
        </div>
    )
}

export default PopupRegistrazione