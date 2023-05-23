import React from 'react';
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Navbar = () => {
    return (
        <section className='navBarSection'>
            <header className="header flex">

                <div className="logoDiv">
                   <a href="#" className="logo flex">
                     <h1><MdOutlineTravelExplore
                     className="icon"/> Voyage.</h1>
                   </a>
                </div>
                <div className="navBar">
                    <ul className="navLists-flex">
                        <li className="navItem">
                            <a href="#" className="navlink">Home</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">Packages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">Shop</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">About</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">Pages</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">News</a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navlink">Contact</a>
                        </li>
                    </ul>
                </div>

            </header>
        <section/>
    )

}   
export default Navbar