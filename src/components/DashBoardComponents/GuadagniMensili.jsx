import React from 'react'
import { MdAttachMoney } from 'react-icons/md'

const GuadagniMensili = () => {
    return (
        <div className='bg-white p-8 rounded-3xl justify-between'>
            <div className='bg-green-400 inline-block p-4 rounded-full'>
                <MdAttachMoney color='white' size={28} />
            </div>
            <div className='flex flex-col gap-2 mt-8'>
                <span className='text-xl'>€ 512,453,06</span>
                <span>Guadagni di questo mese</span>
            </div>
        </div>
    )
}

export default GuadagniMensili