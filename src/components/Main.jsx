import React,{useState} from 'react'

import stylesMain from '../assets/styles/Main.module.scss'
import Headbar from './Headbar'
import Form from './Form'
import Navbar from './Navbar'


const Main = () => {

    return (
        <div className={stylesMain.main}>
            <div className={stylesMain.container}>
                <Headbar />
                <Form />
                <Navbar />
            </div>
        </div>
    )
}

export default Main
