import React from 'react'

const Problem = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row justify-between items-center'>
                <span className='text-lg font-semibold'>Titolo</span>
                <span className='text-green-400'>Leggi di più</span>
            </div>
            <span>Breve Descrizione del Problema</span>
        </div>
    )
}

export default Problem