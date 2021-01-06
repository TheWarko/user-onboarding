import {useContext} from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'
import StepContext from '../contexts/StepContext'
//Styles
import stylesHeadbar from '../assets/styles/Headbar.module.scss'
//Components
import Arrowlink from './Arrowlink'


const Headbar = (props) => {

    const [step] = useContext(StepContext);

    return (
        <div className={stylesHeadbar.headbar}>

            <Grid>
                <Row>
                    <Col xs={12} lg={5}>
                        STEP {step} OF 3
                    </Col>
                    <Col xs={12} lg={7} className="alignRightOnlyDesktop" >
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