import React, { useState } from 'react'
import Categoria from '../components/Categoria'
import { IoMdAdd } from 'react-icons/io'
import CreateCategory from '../components/CreateCategory'
import { useEffect } from 'react'

const Categories = () => {
    const [openCategory, setOpenCategory] = useState('')
    const [error, setError] = useState(false)
    const [categories, setCategories] = useState([])

    const getCategories = async () => {
        const res = await fetch("http://localhost:3001/categories", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();

        if (data.status === 'ok') {
            setCategories(data.categories);
            !error && setError(false)
        } else {
            setError(true)
        }
        console.log(categories)
    }

    useEffect(() => {
        getCategories();
    }, [])


    return (
        <div>
            <div className='flex flex-row justify-between'>
                <span className='text-2xl'>Categorie</span>
            </div>
            <div className='mt-8 flex flex-row gap-4 overflow-x-auto'>
                <table className='w-full'>
                    <thead className='bg-green-200 border-b border-gray-200 rounded-t-lg'>
                        <tr>
                            <th className='p-4 text-left'>Nome</th>
                            <th className='p-4 text-left'>Descrizione</th>
                            <th className='p-4 text-left'>N. Articoli</th>
                            <th className='p-4 text-left'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category) => (
                                <Categoria
                                    key={category._id}
                                    id={category._id}
                                    nome={category.nomeCategoria}
                                    descrizione={category.descrizione}
                                />
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='NewProduct bg-green-500 p-4 rounded-full'>
                <IoMdAdd
                    size={36}
                    fill="white"
                    className="cursor-pointer"
                    onClick={() => setOpenCategory(true)}
                />
            </div>
            {
                openCategory && (
                    <CreateCategory
                        openCategory={openCategory}
                        setOpenCategory={setOpenCategory}
                    />
                )
            }
        </div>
    )
}

export default Categories