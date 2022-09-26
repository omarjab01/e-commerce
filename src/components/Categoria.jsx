import React from 'react'
import { FaPen } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'

const Categoria = ({ id, nome, descrizione }) => {
    return (
        <tr className="border-b-slate-200 border-b">
            <td className='p-4'>{nome}</td>
            <td className='p-4'>{descrizione}</td>
            <td className='p-4'>46</td>
            <td className='p-4'>
                <div>
                    <div className='bg-blue-500 inline-block p-2 rounded-full cursor-pointer'>
                        <FaPen color="white" />
                    </div>
                    <div className='bg-red-500 inline-block p-2 rounded-full ml-2 cursor-pointer'>
                        <RiDeleteBin6Fill color="white" />
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default Categoria