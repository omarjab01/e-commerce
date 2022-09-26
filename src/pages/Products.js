import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import CreateProduct from '../components/CreateProduct'

const Products = () => {
    const [openProduct, setOpenProduct] = useState(false)
    const [error, setError] = useState(false)
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const res = await fetch("http://localhost:3001/products", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();

        if (data.status === 'ok') {
            setProducts(data.products);
            !error && setError(false)
        } else {
            setError(true)
        }
        console.log(products)
    }

    useEffect(() => {
        getProducts()
    }, [])



    return (
        <div>
            <div className='flex flex-row justify-between'>
                <span className='text-2xl'>I Prodotti</span>
                <div className='flex flex-row gap-1 items-center'>
                    <MdKeyboardArrowLeft />
                    <MdKeyboardArrowRight />
                </div>
            </div>
            <div className='mt-8 flex flex-row gap-4 overflow-x-auto'>
                <table className='w-full'>
                    <thead className='bg-green-200 border-b border-gray-200 rounded-t-lg'>
                        <tr>
                            <th className='p-4 text-left'>ID</th>
                            <th className='p-4 text-left'>Immagine</th>
                            <th className='p-4 text-left'>Nome</th>
                            <th className='p-4 text-left'>Prezzo</th>
                            <th className='p-4 text-left'>Descrizione</th>
                            <th className='p-4 text-left'>Categoria</th>
                            <th className='p-4 text-left'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) => (
                                <Product
                                    key={product._id}
                                    product={product}
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
                    onClick={() => setOpenProduct(true)}
                    className="cursor-pointer"
                />
            </div>
            {
                openProduct && (
                    <CreateProduct
                        openProduct={openProduct}
                        setOpenProduct={setOpenProduct}
                    />
                )
            }

        </div>
    )
}

export default Products