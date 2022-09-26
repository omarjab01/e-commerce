import React from 'react'
import { FaPen } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'


const imgUrl = "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"

const Product = ({ product }) => {
    return (
        <tr className='border-b-slate-200 border-b'>
            <td className='p-4'>{product._id.slice(0, 6)}</td>
            <td className='p-4'>
                <img className='w-24 h-24 rounded-xl object-cover' src={product.imgUrl} />
            </td>
            <td className='p-4'>{product.nomeProdotto}</td>
            <td className='p-4'>€ {product.prezzo}</td>
            <td className='p-4'>{product.descrizione.slice(0, 80)}</td>
            <td className='p-4'>{product.categoria}</td>
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

export default Product