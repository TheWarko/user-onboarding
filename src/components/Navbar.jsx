import {useContext} from 'react'
import StepContext from '../contexts/StepContext'
//Styles
import stylesButton from '../assets/styles/Button.module.scss'
import stylesNavbar from '../assets/styles/Navbar.module.scss'
//Components
import Arrowlink from './Arrowlink'


const Navbar = () => {

    const [step,setStep] = useContext(StepContext);

    const nextStep = () => {
        if(step < 3) {
            setStep(step + 1);
        }else{
            alert('Finish!');
        }
    }
    const prevStep = () => {
        if(step > 1) {
            setStep(step - 1);
        }else{
            alert('Back to the homepage!');
        }
    }

    return (
        <div className={stylesNavbar.navbar}>
            <div className={stylesNavbar.navbar__left}>
                <Arrowlink prev onClick={prevStep} dataTestIdChild="prevStep" >Back to Previuos step</Arrowlink>
            </div>
            <div className={stylesNavbar.navbar__right}>
                <button className={stylesButton.buttonLight} onClick={nextStep} data-testid="nextStep" >Skip for now</button>
                <button className={stylesButton.button} form="hook-form" >Next step →</button>
            </div>
        </div>
    )
}

export default Navbar
