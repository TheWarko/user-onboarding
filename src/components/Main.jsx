import React from 'react'

import stylesMain from '../assets/styles/Main.module.scss'
import Form from './Form'


const Main = () => {
    return (
        <div className={stylesMain.main}>
            <div className={stylesMain.container}>
                {/* <Headbar /> */}
                <Form />
                {/* <Navbar /> */}
            </div>
        </div>
    )
}

export default Main
