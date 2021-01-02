import React from 'react'

import styleQuotes from '../assets/styles/Quotes.module.scss'

import imgQuotemarks from '../assets/icons/quotationmarks.svg'
import imgBrandlogo from '../assets/icons/up.svg'



const Quotes = (props) => {
    return (
        <div>
            <div className={styleQuotes.box} >
                <div className={styleQuotes.quotationmarks}>
                    <img src={imgQuotemarks} alt="quotes marks" />
                </div>

                <p className={styleQuotes.text}>{props.items[0].text}</p>
                <div className={styleQuotes.flexContainer}>
                    <div className={styleQuotes.sign}>
                        <p className={styleQuotes.signWho}>{props.items[0].signWho}</p>
                        <p className={styleQuotes.signRole}>{props.items[0].signRole}</p>
                    </div>
                    <div className={styleQuotes.brandlogo}><img src={imgBrandlogo} alt="brand logo" /></div>
                </div>
            </div>
        </div>
    )
}

Quotes.defaultProps = {    
    items: [
        {
            text: 'We care about your time, that\'s why we created a 3-stage onboarding that will not take more than 5 minutes to complete',
            signWho: 'William Mac',
            signRole: 'CO-FOUNDER, INVESTOR',
        },
        {
            text: 'We care about your time, that\'s why we created a 3-stage onboarding that will not take more than 5 minutes to complete',
            signWho: 'William Mac',
            signRole: 'CO-FOUNDER, INVESTOR',
        },
        {
            text: 'We care about your time, that\'s why we created a 3-stage onboarding that will not take more than 5 minutes to complete',
            signWho: 'William Mac',
            signRole: 'CO-FOUNDER, INVESTOR',
        },
    ]
}

export default Quotes
