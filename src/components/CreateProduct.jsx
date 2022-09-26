import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'

const imgSrc = "https://images.unsplash.com/photo-1663409106461-af875e0e35e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"

const CreateProduct = ({ openProduct, setOpenProduct }) => {
    const [imgUrl, setImgUrl] = useState(imgSrc)
    const [nomeProdotto, setNomeProdotto] = useState('')
    const [prezzo, setPrezzo] = useState('')
    const [descrizione, setDescrizione] = useState('')
    const [quantity, setQuantity] = useState('')
    const [selected, setSelected] = useState('')

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

    const addProduct = async () => {
        const res = await fetch("http://localhost:3001/newProduct", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeProdotto, descrizione, prezzo, selected, imgUrl
            })
        })
        const data = await res.json();

        if (data.status === 'ok') {
            !error && setError(false)
            window.location.reload();
        } else {
            setError(true)
        }
        console.log(data)
    }

    console.log(selected)

    const handleClose = () => {

    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <div className='overlay'>
            <div className='createProduct bg-white p-8 rounded-3xl'>
                <div className='flex flex-row justify-between mb-8'>
                    <span className='text-2xl font-semibold'>Registra Nuovo Prodotto</span>
                    <MdClose
                        className="cursor-pointer"
                        onClick={() => setOpenProduct(false)}
                    />
                </div>

                <div className='grid grid-cols-8 gap-12'>
                    <div className='col-span-3 flex flex-col justify-between'>
                        <img
                            src={imgUrl}
                            className="rounded-lg"
                        />
                        <input type="text" placeholder='url img temp' onChange={(event) => setImgUrl(event.target.value)} />
                    </div>
                    <div className='col-span-5 flex flex-col gap-4'>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='col-span-2'>
                                <label for="nome">Nome Prodotto</label>
                                <input type="text" placeholder='Nome Prodotto' className='flex-2 p-2 rounded-lg border border-slate-600 w-full' value={nomeProdotto} onChange={(event) => setNomeProdotto(event.target.value)} />
                            </div>
                            <div className=''>
                                <label for="prezzo">Prezzo</label>
                                <input type="number" placeholder='Prezzo' className='flex-1  border border-slate-600 rounded-lg p-2 w-full' value={prezzo} onChange={(event) => setPrezzo(event.target.value)} />
                            </div>
                        </div>
                        <div>
                            <label for="prezzo">Descrizione</label>
                            <textarea placeholder='Descrizione' className='w-full p-2 rounded-lg border border-slate-600 h-48 resize-none' value={descrizione} onChange={(event) => setDescrizione(event.target.value)} />
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <div className='col-span-2 flex flex-col'>
                                <label for="categoria">Categoria</label>
                                <select className='border border-slate-600 rounded-lg p-2 w-full' name="categorie" id="categorie" onChange={(event) => setSelected(event.target.value)}>
                                    {
                                        categories.map((category) => (
                                            <option value={category.nomeCategoria} key={category._id}>{category.nomeCategoria}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div>
                                <label for="quantita">Quantità</label>
                                <input type="number" placeholder='Quantità' className='border border-slate-600 rounded-lg p-2 w-full' value={quantity} onChange={(event) => setQuantity(event.target.value)} />
                            </div>
                        </div>

                        <button className='bg-green-500 text-white py-4 rounded-xl' onClick={addProduct}>
                            Registra Prodotto
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct