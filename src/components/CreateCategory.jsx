import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'

const CreateCategory = ({ openCategory, setOpenCategory }) => {

    const [nomeCategoria, setNomeCategoria] = useState('')
    const [descrizione, setDescrizione] = useState('')
    const [error, setError] = useState(false)


    const addCategory = async () => {
        const res = await fetch("http://localhost:3001/newCategory", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nomeCategoria, descrizione
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


    return (
        <div className='overlay'>
            <div className='createCategory bg-white p-8 rounded-3xl'>
                <div className='flex flex-row justify-between mb-8'>
                    <span className='text-2xl font-semibold'>Nuova Categoria</span>
                    <MdClose
                        className="cursor-pointer"
                        onClick={() => setOpenCategory(false)}
                    />
                </div>


                <div className='col-span-5 flex flex-col gap-4'>
                    <div className='grid grid-cols-1 gap-4'>
                        <div className='col-span-2'>
                            <label for="nome">Nome Categoria</label>
                            <input type="text" placeholder='Nome Prodotto' className='flex-2 p-2 rounded-lg border border-slate-600 w-full' value={nomeCategoria} onChange={(event) => setNomeCategoria(event.target.value)} />
                        </div>
                        <div className=''>
                            <label for="prezzo">Descrizione</label>
                            <textarea placeholder='Descrizione' className='flex-1  border border-slate-600 rounded-lg p-2 w-full' value={descrizione} onChange={(event) => setDescrizione(event.target.value)} />
                        </div>
                    </div>

                    <button className='bg-green-500 text-white py-4 rounded-xl' onClick={addCategory}>
                        Registra Prodotto
                    </button>

                </div>
            </div>
        </div>
    )
}

export default CreateCategory