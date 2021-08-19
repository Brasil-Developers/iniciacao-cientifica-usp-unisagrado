import React from 'react';
import { Col, Row, Input, Form, Button, Checkbox } from 'antd';

import { ReactComponent as LogoSystem } from '../../image-general/logo.svg';

// Components

//stye item 
import './style.scss';

const FormLogin = () => {

  //create a [new Form] to the login 
  const [form] = Form.useForm();

  const loga = () => {
    let formItens = form.getFieldsValue();
    console.log(formItens);
    console.log( formItens.email_user );
    console.log( formItens.password_user );
    console.log( formItens.remember_psw );
    
    console.log("fabricio carneiro", formItens.password_user)
  };

  return (
    <>
      <Col
        xs={24} xl={10}
        className="align"
      > 
        <Form  
          form={form}
          className="login_page__content-card_form"
        > 
          <Col span={24} className="login_page__content-card_form-logo align">
            <LogoSystem />
          </Col>
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
          <Col span={24} className="login_page__content-card_form-pws align">
            <Col span={12}>
              <Form.Item 
                name="password_user"
              >
                <Row>
                  <Col span={4}>
                    <label>Senha</label>
                  </Col>
                  <Col span={20} className="login_page__content-card_form-pws--reset_pws">
                    <span>Esqueceu sua senha?</span>
                  </Col>
                </Row>
                <Input placeholder="Digite a senha "/>
              </Form.Item>
            </Col>
          </Col>
          <Col span={24} className="login_page__content-card_form-remember_psw align">
            <Col span={12}>
              <Form.Item 
                name="remember_psw"
              >
                <Checkbox>Lembre-me minha senha teste de</Checkbox>
              </Form.Item>
            </Col>
          </Col>
          <Col span={24} className="login_page__content-card_form-btn_enter align">
            <Col span={12}>
              <Button 
                onClick={()=> loga()}
                type="primary"
                size="large"
              >
                Entrar
              </Button>
              <Col>
                <p>
                  Ainda não é cadastrado? 
                  <span> 
                    <a>
                      Solicitar cadastro.
                    </a>
                  </span>
                </p>
              </Col>
            </Col>
          </Col>
        </Form> 
      </Col>
    </>
  )

}

export default FormLogin;