//Styles
import stylesArrowlink from '../assets/styles/Arrowlink.module.scss'


const Arrowlink = (props) => {
    return (
        <>
            <button onClick={props.onClick} className={stylesArrowlink.arrowlink} >{props.prev && `← ` }Lorem ipsum dolor{props.next && ` →` }</button>
        </>
    )
}

export default Arrowlink
