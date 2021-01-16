import {useContext} from 'react'
import StepContext from '../contexts/StepContext'
import { useForm } from "react-hook-form"
import { Grid, Row, Col } from 'react-flexbox-grid'
//Styles
import stylesForm from '../assets/styles/Form.module.scss'
import stylesSpacing from '../assets/styles/Spacing.module.scss'
import stylesText from '../assets/styles/Text.module.scss'
//Components
import Titletext from './Titletext'
import CheckboxBox from './CheckboxBox'
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

    return (
        <div>
            <Titletext className={stylesSpacing.mb48} title={texts.invesmentpreferences.title} >
                {texts.invesmentpreferences.intro}
            </Titletext>

            <form id="hook-form" onSubmit={handleSubmit(onSubmit)} className={stylesForm.form} >
                <Grid>
                    <Row>
                        <Col xs>
                            <p className={stylesText.stegosaurus} >What kind of real estate are you interested in?</p>
                        </Col>
                    </Row>
                    <Row className={stylesForm.fields} >
                        <Col xs={3} md={3}>
                            <CheckboxBox name="preferences" value="single_family" id="single_family" register={register} >Single family</CheckboxBox>
                        </Col>
                        <Col xs={3} md={3}>
                            <CheckboxBox name="preferences" value="residential_multifamily" id="residential_multifamily" register={register} >Residential multifamily</CheckboxBox>
                        </Col>
                        <Col xs={3} md={3}>
                            <CheckboxBox name="preferences" value="commercial_retail" id="commercial_retail" register={register} >Commercial retail</CheckboxBox>
                        </Col>
                        <Col xs={3} md={3}>
                            <CheckboxBox name="preferences" value="commercial_industrial" id="commercial_industrial" register={register} >Commercial industrial</CheckboxBox>
                        </Col>
                    </Row>
                    <Row className={stylesForm.fields} >
                        <Col xs={3} md={3}>
                            <CheckboxBox name="preferences" value="commercial_hospitality" id="commercial_hospitality" register={register} >Commercial hospitality</CheckboxBox>
                        </Col>
                        <Col xs={3} md={3}>
                            <CheckboxBox name="preferences" value="commercial_warehousing" id="commercial_warehousing" register={register} >Commercial warehousing</CheckboxBox>
                        </Col>
                        <Col xs={3} md={3}>
                            <CheckboxBox name="preferences" value="commercial_office" id="commercial_office" register={register} >Commercial office</CheckboxBox>
                        </Col>
                        <Col xs={3} md={3}>
                            <CheckboxBox name="preferences" value="other" id="other" register={register} >Other</CheckboxBox>
                        </Col>
                    </Row>
                </Grid>
            </form>

        </div>
    )
}

export default Step1
