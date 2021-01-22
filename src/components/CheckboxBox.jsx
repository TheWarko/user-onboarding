// import {useRef} from 'react'
//Styles
import stylesCheckboxbox from '../assets/styles/CheckboxBox.module.scss'


const CheckboxBox = ({ id, children, register, ...inputProps }) => {

    // const inputEl = useRef(null);

    const onBoxClick = () => {
        // inputEl.current.click();
        document.getElementById(id).click()
    };

    return (
        <div className={stylesCheckboxbox.checkboxBox} onClick={onBoxClick} >
            <input 
                type="checkbox"
                ref={register} 
                // ref={inputEl}
                id={id}
                onClick={onBoxClick}
                {...inputProps} 
            />
            <label htmlFor={id} onClick={onBoxClick}>{children}</label>
        </div>
    )
}

export default CheckboxBox
