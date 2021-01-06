import React from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid'
import stylesHeadbar from '../assets/styles/Headbar.module.scss'
import Arrowlink from './Arrowlink'


const Headbar = (props) => {
    return (
        <div className={stylesHeadbar.headbar}>

            <Grid>
                <Row>
                    <Col xs={12} lg={5}>
                        STEP {props.step} OF 3
                    </Col>
                    <Col xs={12} lg={7} className="alignRightOnlyDesktop">
                        Lost or have trouble? <Arrowlink next />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

export default Headbar


Headbar.defaultProps = {
    step: 1
}