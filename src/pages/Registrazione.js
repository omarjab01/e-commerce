import React from 'react'

const defaultImg = "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"

const Registrazione = () => {
    return (
        <div>
            <span>
                Crea il tuo account
            </span>
            <div className='grid grid-cols-3'>
                <div>
                    <img src={defaultImg} className="w-64 h-64 rounded-full" />
                    <input type="text" placeholder="ulrImmagine ( Temporaneo )" />
                </div>
                <div className='grid grid-cols-1 col-span-2'>
                    <input type="text" placeholder='Nome' />
                    <input type="text" placeholder='Cognome' />
                    <input type="email" placeholder='Email' />
                    <input type="number" placeholder='Numero di cellulare' />
                    <input type="password" placeholder='Password' />
                </div>
            </div>
        </div>

    )
}

export default Registrazione