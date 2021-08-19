import React from 'react';
import { Col, Row, Form, Input, Button } from 'antd';

//ICONS
import { ReactComponent as BackIcon } from '../../assets/icons/components/reset-password/back.svg';

//STYLE COMPONENT 
import './reset-password-style.scss';

const ResetPassword = () => {
    return (
        <>
         <Col
           xs={24} xl={10}
           className="reset_pws"
         > 
            <Col className="reset_pws__content">
                <Col className="reset_pws__content-btn_back">
                    <Col span={14}>
                        <BackIcon /> Voltar para a tela de login
                    </Col>
                </Col>
                <Col>
                    Redefinir Senha
                </Col>
                <Col>
                    <Col span={14}>
                        Para redefinir sua senha, insira no campo abaixo o 
                        e-mail cadastrado no sistema.
                        Assim que enviar a solicitação para redefinição de
                        senha, dê uma olhadinha na sua caixa de e-mail. 
                    </Col>
                </Col>
                <Form  
                    //  form={form}
                    className="login_page__content-card_form"
                > 
                <Col span={24} className="login_page__content-card_form-email align">
                <Col span={12}>
                    <Form.Item 
                    name="email_user"
                    >
                    <label>E-mail</label>
                    <Input placeholder="Digite seu e-mail"/>
                    </Form.Item>
                </Col>
                </Col>
                <Col span={24} className="login_page__content-card_form-btn_enter align">
                <Col span={12}>
                    <Button 
                    type="primary"
                    size="large"
                    >
                    Enviar
                    </Button>
                </Col>
                </Col>
            </Form> 

               </Col>
           </Col>
       </>
    );
}

export default ResetPassword;