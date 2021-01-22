import {useRef} from 'react'
//Styles
import stylesRadiobox from '../assets/styles/RadioBox.module.scss'
import stylesForm from '../assets/styles/Form.module.scss'


const RadioBox = ({ id, children, register, ...inputProps }) => {

    // const inputEl = useRef(null);

    const onBoxClick = () => {
        // inputEl.current.click();
        document.getElementById(id).click()
    };

    return (
        <div className={stylesRadiobox.radiobox} onClick={onBoxClick} >
            <input 
                type="radio"
                ref={register} 
                // ref={inputEl}
                id={id}
                {...inputProps} 
            />
            <label htmlFor={id} >{children}</label>
        </div>
    )
}

export default RadioBox
