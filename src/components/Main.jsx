//Styles
import stylesMain from '../assets/styles/Main.module.scss'
//Components
import Headbar from './Headbar'
import Step1 from './Step1'
import Navbar from './Navbar'


const Main = () => {

    return (
        <div className={stylesMain.main}>
            <div className={stylesMain.container}>
                <Headbar />
                <Step1 />
                <Navbar />
            </div>
        </div>
    )
}

export default Main
