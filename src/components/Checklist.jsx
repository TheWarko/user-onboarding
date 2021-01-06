import React,{ useState } from 'react'

//styles
import stylesChecklist from '../assets/styles/Checklist.module.scss'

const ChecklistItem = (props) => {
    return (
        //ToDo: shown class active will be depends on step status
        <li className={stylesChecklist.active} >    
            <div>
                <span className={stylesChecklist.checkboxWrapper}>
                    <span className={stylesChecklist.checkbox} >
                        <span></span>
                    </span>
                </span>
                <span className={stylesChecklist.label}>{props.label}</span>
            </div>
            { !props.lastOne && (
                <div>
                    <span className={stylesChecklist.pathline} ></span>
                    <span className={stylesChecklist.pathline} ></span>
                </div>
            )}
        </li>
    )
}

const Checklist = (props) => {

    const [step,setStep] = useState(1)

    return (
        <ul className={`${stylesChecklist.checklist} ${props.className}`} >
            { props.items.map((el,i) => <ChecklistItem key={i} label={el} lastOne={props.items.length == i+1} /> ) }
        </ul>
    )
}



Checklist.defaultProps = {    
    items: ['Contact details','Investment plans','Investment preferences'],
    step: 1
}
  

export default Checklist
