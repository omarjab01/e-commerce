import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import Ordine from '../components/Ordine'

const Orders = () => {
    return (
        <div>
            <div className='flex flex-row justify-between'>
                <span className='text-2xl'>Ordini</span>
            </div>
            <div className='mt-8 flex flex-row gap-4 overflow-x-auto'>
                <table className='w-full'>
                    <thead className='bg-green-200 border-b border-gray-200 rounded-t-lg'>
                        <tr>
                            <th className='p-4 text-left'>ID Ordine</th>
                            <th className='p-4 text-left'>Cliente</th>
                            <th className='p-4 text-left'>N. Articoli</th>
                            <th className='p-4 text-left'>Articoli</th>
                            <th className='p-4 text-left'>Data</th>
                            <th className='p-4 text-left'>Totale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Ordine />
                        <Ordine />
                        <Ordine />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders