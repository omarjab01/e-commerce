import React from 'react'
import { BsExclamationLg } from 'react-icons/bs'
import Problem from '../Problem'

const Attenzione = () => {
    return (
        <div className='bg-white p-8 rounded-3xl justify-between'>
            <div className='bg-orange-400 inline-block p-4 rounded-full'>
                <BsExclamationLg color='white' size={28} />
            </div>
            <div className='flex flex-col gap-2 mt-8 border-b pb-8'>
                <span className='text-xl'>5</span>
                <span>Problemi</span>
            </div>
            <div className='mt-8'>
                <div className='gap-12 flex flex-col'>
                    <Problem />
                    <Problem />
                    <Problem />
                </div>
            </div>
        </div>
    )
}

export default Attenzione