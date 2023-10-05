import { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <nav className='navbar'>
            <div className="logo">
                <h1>Foodies</h1>
            </div>
            <label htmlFor="check" className='openMenu'> <FaBars /> </label>
            <input type="checkbox" name="check" id="check" onClick={toggleNav} checked={isOpen} />
            <div className='links'>
                <label htmlFor="check" className='closeMenu'> <FaTimes /> </label>
                <NavLink className='nav-link' to='/'> Home </NavLink>
                <NavLink className='nav-link' to='/products'> Products </NavLink>
                <NavLink className='nav-link' to='/profile'> Profile </NavLink>
                <NavLink className='nav-link' to='/new'> New </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;