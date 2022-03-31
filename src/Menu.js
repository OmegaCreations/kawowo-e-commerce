import React from 'react'
import productImg from './assets/img/product.png'
import Nav from './nav'
import './styles/menu.scss'


var reload = false
export class Menu extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount () {
        if (reload) {
            reload = false
            // reloading page to re render 
            // and prevent animation continuing after changing page back
            window.location.reload(true);
        }
    }

    componentWillUnmount () {
        reload = true
    }

    render() {
        return (
            <div id="container">
                {/* Fancy transition stuff */}
                <div className="transition-circle"></div>
                <div className="transition-box"></div>
                <div className="transition-text"><p>Drink. Focus. Relax.</p></div>
                <div className="nav-wrapper">
                    <Nav/>
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