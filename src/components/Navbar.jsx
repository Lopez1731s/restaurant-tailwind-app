import React from 'react'
import { NavLink } from 'react-router-dom'

const ListNav = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Products',
        link: '/products',
    },
    {
        name: 'Categories',
        link: '/categories',
    },
    {
        name: 'Favorites',
        link: '/favorites',
    },
]

const Navbar = () => {
    return (
        <nav className="bg-slate-900 px-2 py-4">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <NavLink to="/" className="flex items-center">
                    <span className="self-center text-white text-xl font-semibold whitespace-nowrap dark:text-white">Restaurant</span>
                </NavLink>
                
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {ListNav.map((link) => (
                            <li key={link.name}>
                                <NavLink
                                    to={link.link}
                                    className={({ isActive }) => isActive ? 'text-neutral-100' : 'text-neutral-400'}
                                >
                                    {link.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar