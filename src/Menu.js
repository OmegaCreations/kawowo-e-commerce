import React from 'react'
import productImg from './assets/img/product.png'
import logoImg from './assets/img/logo.png'

export class Menu extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="container">
                {/* Fancy transition stuff */}
                <div className="transition-circle"></div>
                <div className="transition-box"></div>
                <div className="transition-text"><p>Drink. Focus. Relax.</p></div>
                <div className="nav-wrapper">
                    <nav>
                        <div className="logo"><img src={ logoImg } alt="kawowo icon" /></div>
                        {/* Menu */}
                        <a href="#" className="hover-this"><span>Home</span></a>
                        <a href="#" className="hover-this"><span>Products</span></a>
                        <a href="#" className="hover-this"><span>Contact</span></a>
                        <a href="#" className="hover-this"><span>About us</span></a>
                        {/* Custom cursor */}
                        <div className="cursor"></div>
                    </nav>
                </div>
                <div className="product-row">
                    <div className="info"></div>
                    <div className="product-bg"></div>
                    <div className="product parallax" data-speed="4">
                        <img src={ productImg } alt="kawowo icon" />
                    </div>
                    <div className="info-2"></div>
                </div>
            </div>
        )
    }
}