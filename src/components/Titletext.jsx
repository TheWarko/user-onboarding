//Styles
import stylesText from '../assets/styles/Text.module.scss'


const Titletext = (props) => {
    return (
        <div className={props.className} >
            <h1 className={stylesText.trex} >Contact details</h1>
            <p>Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</p>
        </div>
    )
}

export default Titletext
