import {useContext} from 'react'
import StepContext from '../contexts/StepContext'
//Styles
import stylesButton from '../assets/styles/Button.module.scss'
import stylesNavbar from '../assets/styles/Navbar.module.scss'
//Components
import Arrowlink from './Arrowlink'


const Navbar = (props) => {

    const [step,setStep] = useContext(StepContext);

    const next = () => {
        if(step < 3) {
            setStep(step + 1);
        }else{
            alert('Finish!');
        }
    }

    return (
        <div className={stylesNavbar.navbar}>
            <div className={stylesNavbar.navbar__left}>
                <Arrowlink prev />
            </div>
            <div className={stylesNavbar.navbar__right}>
                <button className={stylesButton.buttonLight}>Skip for now</button>
                <button onClick={next} className={stylesButton.button} form="hook-form" >Next step →</button>
            </div>
        </div>
    )
}

export default Navbar
