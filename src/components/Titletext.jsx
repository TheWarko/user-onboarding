import PropTypes from 'prop-types';
//Styles
import stylesText from '../assets/styles/Text.module.scss'


const Titletext = (props) => {

    const {
        className,
        title,
        children
    } = props

    return (
        <div className={className} >
            <h1 className={stylesText.trex} >{title}</h1>
            <p>{children}</p>
        </div>
    )

}
export default Titletext


Titletext.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.any 
}