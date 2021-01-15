//Styles
import {useContext} from 'react'
import stylesMain from '../assets/styles/Main.module.scss'
import StepContext from '../contexts/StepContext'
//Components
import Headbar from './Headbar'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Navbar from './Navbar'


const Main = () => {

    const [step] = useContext(StepContext)

    return (
        <div className={stylesMain.main}>
            <div className={stylesMain.container}>
                <Headbar />
                {
                    {
                        1: <Step1 />,
                        2: <Step2 />,
                        3: <Step3 />
                    }[step]
                }
                <Navbar />
            </div>
        </div>
    )
}

export default Main
