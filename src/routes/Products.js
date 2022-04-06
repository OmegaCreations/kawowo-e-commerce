import React from 'react'
import logoIcon from '../assets/img/icon.png'
import ProductImg from '../assets/img/labelpng.png'


export class Products extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="products-container">
                <div className="menu">
                    <a><span className="menu-span cursor-hover">PRODUCTS</span></a>
                    <img src={logoIcon} />
                    <a><span className="menu-span cursor-hover">ABOUT US</span></a>
                </div>
                <div className="product-content">
                    <div className="preview"><img src={ ProductImg } /></div>

                    <div className="description">
                        <div className="desc-bar">
                            <ul>
                                <li className="cursor-hover" style={{color: '#161616', fontWeight: '400'}}>Overview</li>
                                <li className="cursor-hover">Details</li>
                                <li className="cursor-hover">Shipping</li>
                            </ul>
                        </div>
                        <span className="title">KAWOWO</span>

                        <span className="desc-text">

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est tellus, malesuada vestibulum elementum id, ornare sed augue. Etiam vehicula purus sapien, quis ullamcorper purus aliquet in. In eu aliquam metus. Donec eget tincidunt augue.
<br/><br/>
Nullam vestibulum ut massa ut dapibus. Ut a tortor sagittis, rutrum velit nec, cursus nunc. Aliquam lacinia varius justo id pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Donec et orci quam. Nunc vehicula quam sed mi porttitor pulvinar. Ut ut semper quam, vel sollicitudin diam. Quisque sapien ipsum, vehicula non commodo ut, eleifend vulputate nunc.

                        </span>
                    </div>

                    <div className="scaled-img cursor-hover"><img src={ ProductImg } /></div>
                    <div className="product-text"><span>Designed for</span>
                        <span style={{fontWeight: '800'}}>&nbsp;coffee lovers </span> 
                        <span>&nbsp;with</span> 
                        <span style={{fontWeight:'100', fontStyle: 'italic'}}>&nbsp;expectations</span>
                    </div>
                    <div className="buy">
                        <span>
                            <span style={{fontWeight: '100', fontSize: '46px', color: '#161616'}}>49,99</span>
                            <span style={{fontWeight: '800', fontSize: '16px', color: '#fff'}}>&nbsp;&nbsp;zł</span>
                        </span>
                        <button className="cursor-hover"><span>BUY NOW</span></button>
                    </div>
                </div>


                <div className="cursor"></div>
            </div>
        )
    }
}