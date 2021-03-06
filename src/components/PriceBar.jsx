import {useState, useEffect} from 'react'
//Styles
import stylesPriceBar from '../assets/styles/PriceBar.module.scss'


const PriceBar = (props) => {

    const {
        className,
        start,
        end
    } = props

    const [points] = useState([10000,50000,100000,200000,500000,1000000])
    const [startBar,setStartBar] = useState(0)
    const [endBar,setEndBar] = useState(0)

    useEffect(() => {
        setStartBar(0)
        points.forEach((point,i) => {if(start >= point) { setStartBar(i) }} )
    },[start,points]);
    useEffect(() => {
        setEndBar(0)
        points.forEach((point,i) => {if(end >= point) { setEndBar(i) }} )
    },[end,points]);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return (
        <div className={className}>
            <div className={stylesPriceBar.pricebar} >
                <div className={stylesPriceBar.backgroundBar}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={stylesPriceBar.activeBar} style={{ paddingLeft: startBar > 0 ? `${startBar*20}%`: '0'}} >
                    { endBar > startBar ? [...Array(endBar-startBar)].map((e, i) => <span key={i}></span>) : null }
                </div>
            </div>
            <div>
            <div className={stylesPriceBar.labels}>
                {points.map((el,i) => (<span key={i} >{formatter.format(el).replace(/\D00$/, '')}{i === points.length-1 ? '+' : ''}</span>))}
            </div>
            </div>
        </div>
    )
}

export default PriceBar
