import React from 'react'

import stylesArrowlink from '../assets/styles/Arrowlink.module.scss'

const Arrowlink = (props) => {
    return (
        <>
            <a href="/" onClick={null} className={stylesArrowlink.arrowlink} >{props.prev && `← ` }Lorem ipsum dolor{props.next && ` →` }</a>
        </>
    )
}

export default Arrowlink
