import React from 'react'
import { useForm } from "react-hook-form"
import stylesButton from '../assets/styles/Button.module.scss'
import stylesForm from '../assets/styles/Form.module.scss'
import stylesSpacing from '../assets/styles/Spacing.module.scss'

import { Grid, Row, Col } from 'react-flexbox-grid'
import Titletext from './Titletext'
import Arrowlink from './Arrowlink'



const Form = (props) => {

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <Titletext className={stylesSpacing.mb48} />

            <form id="hook-form" onSubmit={handleSubmit(onSubmit)} className={stylesForm.form} >
                <Grid>
                    <Row className={stylesForm.fields} >
                        <Col xs={12} md={6}>
                            <label htmlFor="fullname">Full name</label>
                            <input name="fullname" ref={register({ required: true })} />
                            <span className={stylesForm.error}>{errors.fullname && "Full name is required"}</span>
                        </Col>
                        <Col xs={12} md={6}>
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" ref={register({ required: true, pattern: /^[0-9]*$/ })} />
                            <span className={stylesForm.error}>{errors.phone && "Phone is required and accepts only numbers"}</span>
                        </Col>
                    </Row>
                    <Row className={stylesForm.fields} >
                        <Col xs>
                            <label htmlFor="email">E-mail address</label>
                            <input type="email" name="email" ref={register({ required: true })} />
                            <span className={stylesForm.error}>{errors.email && "Email is required"}</span>
                        </Col>
                    </Row>
                    <Row className={stylesForm.fields} >
                        <Col xs>
                            <label htmlFor="country">Country</label>
                            <select name="country" ref={register({ required: true })} >
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

            <Titletext className={stylesSpacing.mb16} />
            <Arrowlink next />

        </div>
    )
}

export default Form
