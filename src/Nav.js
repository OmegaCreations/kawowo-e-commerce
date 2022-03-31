import React from 'react'
import logoImg from './assets/img/logo.png'
import 'regenerator-runtime/runtime'
import {Link, useNavigate } from "react-router-dom";

export default function Nav () {

    let navigate = useNavigate();

    async function navigateProducts (e) {
        e.preventDefault() //prevent transition

        window.setTimeout(() => {
           navigate("/Products")
        }, 4050)
    }

    async function navigateAbout (e) {
        e.preventDefault() //prevent transition

        window.setTimeout(() => {
           navigate("/About-us")
        }, 4050)
    }

    return (
        <nav>
            <div className="logo"><img src={ logoImg } alt="kawowo icon" /></div>
            {/* Menu */}
            <Link onClick={navigateProducts} to="/Products" className="hover-this"><span>Products</span></Link>
            <Link onClick={navigateAbout} to="/About us" className="hover-this"><span>About us</span></Link>
            {/* Custom cursor */}
            <div className="cursor"></div>
        </nav>
    )
}