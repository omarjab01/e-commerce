import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'

const UltimiOrdini = () => {
    return (
        <div className='bg-white p-8 rounded-3xl justify-between'>
            <div className='bg-purple-400 inline-block p-4 rounded-full'>
                <HiShoppingCart color='white' size={28} />
            </div>
            <div className='flex flex-col gap-2 mt-8'>
                <span className='text-xl'>12,4k</span>
                <span>Ordini nelle ultime 24h</span>
            </div>
        </div>
    )
}

export default UltimiOrdini