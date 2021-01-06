//Styles
import stylesText from '../assets/styles/Text.module.scss'
import stylesSidebar from '../assets/styles/Sidebar.module.scss'
//Components
import Checklist from './Checklist'
import Quotes from './Quotes'


const Sidebar = () => {
    return (
        <div className={stylesSidebar.sidebar} >
            <div className={stylesSidebar.container} >
                <h1 className={`${stylesText.twocolors}`} >UNITED<span>PROPERTIES</span></h1>
                <Checklist />
                <Quotes className={stylesSidebar.sidebar__quotes} />
            </div>
        </div>
    )
}

export default Sidebar
