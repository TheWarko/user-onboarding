import StepContext from '../contexts/StepContext'
import {useContext} from 'react'
//Styles
import stylesText from '../assets/styles/Text.module.scss'
import stylesSidebar from '../assets/styles/Sidebar.module.scss'
import stylesSpacing from '../assets/styles/Spacing.module.scss'
//Components
import Checklist from './Checklist'
import Quotes from './Quotes'
//Texts
import texts from '../texts/texts'


const Sidebar = () => {

    const [step] = useContext(StepContext);

    return (
        <div className={stylesSidebar.sidebar} >
            <div className={stylesSidebar.container} >
                <h1 className={`${stylesText.twocolors} ${stylesSpacing.mb200}`} >UNITED<span>PROPERTIES</span></h1>
                <Checklist className={stylesSpacing.mb64} />
                <Quotes className={stylesSidebar.sidebar__quotes} text={texts.quotes[step].text} signWho={texts.quotes[step].signWho} signRole={texts.quotes[step].signRole} />
            </div>
        </div>
    )
}

export default Sidebar
