import { useState } from 'react';
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Alert,
  message,
} from 'antd';
import TopBar from 'Components/TopBar';
import FooterInitial from 'Components/FooterInitial';
import BackButton from 'Components/BackButton/index.tsx';

import { ReactComponent as ImageApresentation } from 'assets/icons/initial-page/image-apresentation.svg';

import './redefine-password-style.scss';

const backBtndata = {
  title: 'Voltar para a tela de login',
  back_page_path: '/login',
};

const RedefinePassword = () => {
  const [requestSend, setRequest] = useState(false);
  const onFinish = (values: any) => {
    if (!requestSend) {
      if (values.email !== undefined) {
        setRequest(true);
      } else {
        message.error('Erro: o e-mail não foi preenchido!');
      }
    }
  };
  const onFinishFailed = () => {
    message.error('Erro ao enviar a solicitação!');
    message.error('Tente novamente');
  };
  const sucessMsg = requestSend && <Alert message="Solicitação enviada!" type="success" showIcon />;
  return (
    <>
      <TopBar />
      <Row className="redefine-pass">
        <Col className="redefine-pass__c1">
          <ImageApresentation className="redefine-pass__c1__img" />
        </Col>
        <Col className="redefine-pass__c2">
          <div className="redefine-pass__c2__back-btn">
            <BackButton data={backBtndata} />
          </div>
          <Col className="redefine-pass__c2__form">
            <div>
              <h1>Redefinir Senha</h1>
              <p>
                Para redefinir sua senha, insira no campo
                abaixo o e-mail cadastrado no sistema.

                Assim que enviar a solicitação para
                redefinição de senha, dê uma olhadinha
                na sua caixa de e-mail. :)
              </p>
              <Form
                name="form"
                layout="vertical"
                size="middle"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[{ type: 'email', message: 'E-mail inválido' }]}
                >
                  <Input
                    placeholder="Digite seu e-mail"
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="redefine-pass__c2__form__button"
                    size="large"
                    type="primary"
                    htmlType="submit"
                    disabled={requestSend}
                  >
                    Enviar
                  </Button>
                </Form.Item>
                {sucessMsg}
              </Form>
            </div>
          </Col>
        </Col>
      </Row>
      <FooterInitial />
    </>
  );
};

export default RedefinePassword;
