import { useContext } from 'react'
import StepContext from '../contexts/StepContext'
//Styles
import stylesChecklist from '../assets/styles/Checklist.module.scss'


const ChecklistItem = (props) => {
    return (
        //ToDo: shown class active will be depends on step status
        <li className={props.active ? stylesChecklist.active : ''} >    
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

    const [step] = useContext(StepContext);

    return (
        <ul className={`${stylesChecklist.checklist} ${props.className}`} >
            { props.items.map((el,i) => <ChecklistItem key={i} label={el} lastOne={props.items.length === i+1} active={i+1 <= step ? true : false} /> ) }
        </ul>
    )
}



Checklist.defaultProps = {    
    items: ['Contact details','Investment plans','Investment preferences'],
    step: 1
}
  

export default Checklist
