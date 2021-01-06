import React from 'react'

import stylesButton from '../assets/styles/Button.module.scss'
import stylesNavbar from '../assets/styles/Navbar.module.scss'
import Arrowlink from './Arrowlink'


const Navbar = (props) => {

    return (
        <div className={stylesNavbar.navbar}>
            <div className={stylesNavbar.navbar__left}>
                <Arrowlink prev />
            </div>
            <div className={stylesNavbar.navbar__right}>
                <button className={stylesButton.buttonLight}>Skip for now</button>
                <button className={stylesButton.button} form="hook-form" >Next step →</button>
            </div>
        </div>
    )
}

export default Navbar
