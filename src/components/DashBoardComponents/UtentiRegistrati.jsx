import React from 'react'
import { FaUsers } from 'react-icons/fa'

const UtentiRegistrati = () => {
    return (
        <div className='bg-white p-8 rounded-3xl justify-between'>
            <div className='bg-blue-400 inline-block p-4 rounded-full'>
                <FaUsers color='white' size={28} />
            </div>
            <div className='flex flex-col gap-2 mt-8'>
                <span className='text-xl'>123k</span>
                <span>Utenti Registrati</span>
            </div>
        </div>
    )
}

export default UtentiRegistrati