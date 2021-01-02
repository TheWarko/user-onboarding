import React from 'react'

import Checklist from './Checklist'
import Quotes from './Quotes'

import stylesText from '../assets/styles/Text.module.scss'
import stylesSidebar from '../assets/styles/Sidebar.module.scss'
import stylesSpacing from '../assets/styles/Spacing.module.scss'


const Sidebar = () => {
    return (
        <div className={stylesSidebar.sidebar} >
            <h1 className={`${stylesText.twocolors} ${stylesSpacing.mb200}`} >UNITED<span>PROPERTIES</span></h1>
            <Checklist mb={stylesSpacing.mb64} />
            <Quotes />
        </div>
    )
}

export default Sidebar
