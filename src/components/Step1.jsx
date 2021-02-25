import {useContext, useEffect, useState} from 'react'
import StepContext from '../contexts/StepContext'
import { useForm } from "react-hook-form"
import { Grid, Row, Col } from 'react-flexbox-grid'
import axios from 'axios'
//Styles
import stylesForm from '../assets/styles/Form.module.scss'
import stylesSpacing from '../assets/styles/Spacing.module.scss'
//Components
import Titletext from './Titletext'
import Arrowlink from './Arrowlink'
//Texts
import texts from '../texts/texts'


const Step1 = (props) => {

    const [datas,setDatas] = useState({})
    const [phonenumber,setPhonenumber] = useState(datas && datas.phone ? datas.phone : '')
    const [fullnameinput,setFullnameinput] = useState(datas && datas.fullname ? datas.fullname : '')

    useEffect(() => {
        setDatas(JSON.parse(localStorage.getItem('data')))
    },[]);
    useEffect(() => {
        if(datas){
            setPhonenumber(datas.phone)
            setFullnameinput(datas.fullname)
        }
    },[datas]);

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
        axios.post('https://39514a2a-e250-4099-bb82-716528b652b1.mock.pstmn.io/users/add', {    //Postman mock API
            data
        })
        .then(function (response) {
            console.log(response);
            localStorage.setItem('data', JSON.stringify(data));
            nextStep()
        })
          .catch(function (error) {
            console.log(error);
        });
    }
    const inputOnlyNumbers = (e) =>{
        const re = /^[0-9\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setPhonenumber(e.target.value)
        }
     }
    const inputOnlyChars = (e) =>{
        const re = /^[A-Z a-z\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setFullnameinput(e.target.value)
        }
     }

    return (
        <div className={props.className}>
            <Titletext className={stylesSpacing.mb48} title={texts.contact.title} >
                {texts.contact.intro}
            </Titletext>

            <form id="hook-form" onSubmit={handleSubmit(onSubmit)} className={stylesForm.form} autoComplete="off" >
                <Grid>
                    <Row className={stylesForm.fields} >
                        <Col xs={12} md={6}>
                            <label htmlFor="fullname">Full name</label>
                            <input 
                                type="text" 
                                name="fullname" 
                                data-testid="fullname" 
                                onChange={inputOnlyChars}
                                defaultValue={datas ? datas.fullname : ''} 
                                value={fullnameinput ? fullnameinput : ''}
                                ref={register({ required: true })} 
                            />
                            <span className={stylesForm.error}>{errors.fullname && "Full name is required"}</span>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="tel" 
                                name="phone" 
                                data-testid="phone" 
                                ref={register({ required: true, pattern: /^[0-9]*$/ })} 
                                onChange={inputOnlyNumbers}
                                defaultValue={datas ? datas.phone : phonenumber}  
                                value={phonenumber ? phonenumber : ''}
                            />
                            <span className={stylesForm.error}>{errors.phone && "Phone is required and accepts only numbers"}</span>
                        </Col>
                    </Row>
                    <Row className={stylesForm.fields} >
                        <Col xs>
                            <label htmlFor="email">E-mail address</label>
                            <input type="email" name="email" defaultValue={datas ? datas.email : ''}  ref={register({ required: true })} />
                            <span className={stylesForm.error}>{errors.email && "Email is required"}</span>
                        </Col>
                    </Row>
                    <Row className={stylesForm.fields} >
                        <Col xs>
                            <label htmlFor="country">Country</label>
                            <select name="country" defaultValue={datas ? datas.country : ''} ref={register({ required: true })} >
                                <option value=""></option>    
                                <option value="Italy">Italy</option>    
                                <option value="England">England</option>    
                                <option value="France">France</option>   
                                <option value="Germany">Germany</option>     
                                <option value="Spanish">Spanish</option>    
                            </select>
                            <span className={stylesForm.error}>{errors.country && "Country is required"}</span>
                        </Col>
                    </Row>
                </Grid>
            </form>

            <Titletext className={stylesSpacing.mb16} title={texts.contact.privacy_title} >
                {texts.contact.privacy_text} 
            </Titletext>
            <Arrowlink next >Expand privacy policy</Arrowlink>

        </div>
    )
}

export default Step1
