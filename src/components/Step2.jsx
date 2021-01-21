import {useContext,useRef} from 'react'
import StepContext from '../contexts/StepContext'
import { useForm } from "react-hook-form"
import { Grid, Row, Col } from 'react-flexbox-grid'
//Styles
import stylesForm from '../assets/styles/Form.module.scss'
import stylesSpacing from '../assets/styles/Spacing.module.scss'
import stylesText from '../assets/styles/Text.module.scss'
//Components
import Titletext from './Titletext'
import PriceInput from './PriceInput'
import RadioBox from './RadioBox'
import PriceBar from './PriceBar'
//Texts
import texts from '../texts/texts'


const Step1 = (props) => {

    // Steps Context
    const [step,setStep] = useContext(StepContext);
    const nextStep = () => {
        if(step < 3) {
            setStep(step + 1);
        }else{
            alert('Finish!');
        }
    }

    // Form
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        nextStep()
    }

    // const startBar = useRef(0)
    // const endBar = useRef(0)

    return (
        <div>
            <Titletext className={stylesSpacing.mb48} title={texts.invesmentplans.title} >
                {texts.invesmentplans.intro}
            </Titletext>

            <form id="hook-form" onSubmit={handleSubmit(onSubmit)} className={stylesForm.form} >
                <Grid>
                    <Row>
                        <Col xs>
                            <p className={stylesText.stegosaurus} >How much are you planning to invest in this year?</p>
                        </Col>
                    </Row>
                    <Row className={stylesForm.fields} >
                        <Col xs={12} md={6}>
                            <label htmlFor="from">From</label>
                            <PriceInput name="from" id="from" min="10000" max="500000" register={register({ required: true })} />
                            <span className={stylesForm.error}>{errors.from && "From price name is required"}</span>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="to">To</label>
                            <PriceInput name="to" id="to" min="50000" register={register({ required: true })} />
                            <span className={stylesForm.error}>{errors.to && "From price name is required"}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs>
                            <PriceBar className={stylesSpacing.mb32} start={12000} end={500000} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs >
                            <p className={stylesText.stegosaurus} >Are you an accredited investor?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={2}>
                            <RadioBox name="accreditor" value={true} id="accreditor_yes" register={register({ required: true })} >Yes</RadioBox>
                        </Col>
                        <Col xs={6} md={2}>
                            <RadioBox name="accreditor" value={false} id="accreditor_no" register={register({ required: true })} >No</RadioBox>
                        </Col>
                        <Col xs={12} md={12}>
                            <span className={stylesForm.error}>{errors.accreditor && "Answer the question is required"}</span>
                        </Col>
                    </Row>
                </Grid>
            </form>

        </div>
    )
}

export default Step1
