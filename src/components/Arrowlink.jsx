import PropTypes from 'prop-types';
//Styles
import stylesArrowlink from '../assets/styles/Arrowlink.module.scss'


const Arrowlink = (props) => {
    
    const {
        onClick,
        children,
        prev,
        next
    } = props

    return (
        <>
            <button onClick={onClick} className={stylesArrowlink.arrowlink} >{prev && `← ` }{children}{next && ` →` }</button>
        </>
    )

}


export default Arrowlink

Arrowlink.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
    prev: PropTypes.bool,
    next: PropTypes.bool
}