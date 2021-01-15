//Styles
import stylesText from '../assets/styles/Text.module.scss'


const Titletext = (props) => {
    return (
        <div className={props.className} >
            <h1 className={stylesText.trex} >{props.title}</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default Titletext
