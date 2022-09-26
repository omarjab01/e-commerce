import React, { useState } from 'react'
import { MdAttachMoney } from 'react-icons/md'
import Attenzione from '../components/DashBoardComponents/Attenzione'
import Chart from '../components/DashBoardComponents/Chart'
import GuadagniMensili from '../components/DashBoardComponents/GuadagniMensili'
import UltimiOrdini from '../components/DashBoardComponents/UltimiOrdini'
import UtentiRegistrati from '../components/DashBoardComponents/UtentiRegistrati'
import { UserData } from '../utils/data'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/userSlice'

const Dashboard = () => {

    const dispatch = useDispatch()

    const token = localStorage.getItem('token');
    const user2 = useSelector(state => state.user)

    const getUserDetails = async () => {
        const req = await fetch("http://localhost:3001/getUserDetails", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-access-token': token },
            body: await JSON.stringify({
                token,
            })
        })

        const data = await req.json();

        if (data.status === 'ok') {
            dispatch(update({ nome: data.nome, email: data.email, token: data.token }))
        }

        console.log(user2)
    }


    useState(() => {

        // getUserDetails()
        // window.location.reload()

    }, [])

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: "Ordini",
                data: UserData.map((data) => data.userGain),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 2,
            },
        ],
    });


    return (
        <div className=' gap-8 grid grid-cols-4'>
            <div className='col-span-3'>
                <div className='col-span-3 grid grid-cols-3 gap-8'>
                    <GuadagniMensili />
                    <UtentiRegistrati />
                    <UltimiOrdini />
                </div>
                <div className='mt-8'>
                    <Chart chartData={userData} />
                </div>
            </div>
            <div>
                <Attenzione />
            </div>
        </div>
    )
}

export default Dashboard