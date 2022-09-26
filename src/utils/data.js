import { AiOutlineShop } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'


export const dashboardLinks = [
    {
        link: 'Dashboard',
        icon: <BsGraphUp />
    },
    {
        link: 'Products',
        icon: <AiOutlineShop />
    },
    {
        link: 'Categories',
        icon: <AiOutlineShop />
    },
    {
        link: 'Users',
        icon: <BiUser />
    },
    {
        link: 'Orders',
        icon: <AiOutlineShoppingCart />
    },
    {
        link: 'Settings',
        icon: <FiSettings />
    },
]

export const UserData = [
    {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823,
    },
    {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345,
    },
    {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555,
    },
    {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555,
    },
    {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234,
    },
];