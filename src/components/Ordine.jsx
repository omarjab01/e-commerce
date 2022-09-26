import React from 'react'

const Ordine = () => {
    return (
        <tr>
            <td className='p-4'>2432</td>
            <td className='p-4'>Omar Jabraoui</td>
            <td className='p-4'>3</td>
            <td className='p-4 w-auto'>
                <div className='flex flex-wrap gap-1 w-full'>
                    <div className='px-2 py-1 rounded-lg bg-slate-300  inline-block'>
                        Macbook air
                    </div>
                    <div className='px-2 py-1 rounded-lg bg-slate-300  inline-block'>
                        Macbook air
                    </div>
                    <div className='px-2 py-1 rounded-lg bg-slate-300  inline-block'>
                        Macbook air
                    </div>
                    <div className='px-2 py-1 rounded-lg bg-slate-300  inline-block'>
                        Macbook air
                    </div>
                    <div className='px-2 py-1 rounded-lg bg-slate-300  inline-block'>
                        Macbook air
                    </div>
                </div>
            </td>
            <td className='p-4'>26/09/22</td>
            <td className='p-4'>1.823, 85 €</td>
        </tr>
    )
}

export default Ordine