import { useState } from 'react';
import {
  Alert,
  Divider,
  Form,
  Input,
  Checkbox,
  Space,
  Button,
  Row,
  Col,
  Radio,
  DatePicker,
  Select,
  Typography,
} from 'antd';
import BackButton from 'Components/BackButton/index.tsx';
import BlueTitle from 'Components/BlueTitle';
import PasswordFields from 'Components/PasswordFields/index.tsx';

import './request-registraition.scss';

const { Option } = Select;
const { TextArea } = Input;
const { Text } = Typography;

const backBtndata = {
  title: 'Voltar para a tela de login',
  back_page_path: '/login',
};

const contactEmail = <strong>&nbsp;exemplo@email.com.br</strong>;

const alertMsg = {
  title: <strong className="request-reg__alert__title">Importante!</strong>,
  msg1:
  <p>
    Este portal é restrito a profissionais, pesquisadores e alunos integrantes de
    equipes específicas,
    autorizadas pelo HRAC-USP. Caso você não esteja enquadrado nessas características,
    não será possível
    realizar seu cadastro. Em caso de dúvidas, entre em contato através
    do e-mail
    {contactEmail}
    .
  </p>,
  msg2:
  <p>
    Para usar este portal você precisará do seu próprio computador com acesso à
    internet e seu próprio fone de ouvido. Você também deve ter a possibilidade
    de ajustar o volume da gravação sendo avaliada.
    <Checkbox className="accept">
      Estou ciente
      <i className="input_must">*</i>
    </Checkbox>
  </p>,
};

const RequestRegistration = () => {
  const [area, setArea] = useState(true);
  const handleArea = (vl:any) => setArea(vl === 'outra_area' ? !area : true);
  const [desc, setDesc] = useState(true);
  const handleDesc = (e:any) => {
    setDesc(e.target.value === 4 ? !desc : true);
  };
  return (
    <>
      <div className="request-reg">
        <div className="request-reg__back_btn">
          <BackButton data={backBtndata} />
        </div>
        <div className="request-reg__info_text">
          <h1>Solicitar Cadastro</h1>
          <p>
            Se você já foi cadastrado como avaliador neste portal mas não lembra sua senha,
            selecione a função
            <strong> RECUPERAR SENHA </strong>
            na tela inicial.
            Se ainda não foi cadastrado,
            <strong> preencha o formulário </strong>
            abaixo para que um
            administrador do portal (Avaliador Master)
            possa realizar seu cadastro. Após o preenchimento,
            fique atento à sua caixa de e-mail. :)
          </p>
        </div>
        <Alert
          className="request-reg__alert closable"
          message={alertMsg.title}
          description={alertMsg.msg1}
          type="info"
          showIcon
          closable
        />
        <Form
          className="request-reg__form"
          layout="vertical"
        >
          <BlueTitle
            title="Dados Pessoais"
            extra="(Necessários para seu cadastro e identificação dentro do portal)"
          />
          <Divider className="divider" />
          {/** ------------------------------------Dados Pessoais */}
          <Col span={24}>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label="Nome"
                  name="name"
                  rules={[{ required: true }]}
                >
                  <Input
                    placeholder="Digite seu nome completo"
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="Data de Nasc."
                  name=""
                  rules={[{ required: true }]}
                >
                  <DatePicker />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="CPF"
                  name="cpf"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Form.Item
                name="sexo"
                label="Sexo"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Radio value="masculino">Feminino</Radio>
                  <Radio value="feminino">Masculino</Radio>
                  <Radio value="outro">Outro</Radio>
                </Radio.Group>
              </Form.Item>
            </Row>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label="Área de Atuação"
                  name="area_atuacao"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Selecionar" onChange={handleArea}>
                    <Option value="fonoaudiologo">Fonoaudiólogo(a)</Option>
                    <Option value="graduando">Graduando de Fonoaudiologia</Option>
                    <Option value="outra_area">Outra área</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Número CRFa"
                  name="area"
                  rules={[{ required: true, type: 'string' }]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          {/** ------------------------------------Email e Senha */}
          <BlueTitle
            title="E-mail e Senha"
            extra="(Você precisará se lembrar deles para acessar o portal)"
          />
          <Divider className="divider" />
          <Col span={24}>
            <Row gutter={12}>
              <Col span={12}>
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Entrada inválida',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <PasswordFields size={12} gutter={12} type="create" />
          </Col>
          {/** ------------------------------------Situação Técnica */}
          <BlueTitle
            title="Situação Técnica"
            extra="(Algumas informações que nos ajudarão a te conhecer melhor)"
          />
          <Divider className="divider" />
          <Space direction="vertical" size="large" className="tec_situation">
            <Space size="large" direction="vertical">
              <Row>
                <Text strong className="register_questions">
                  1. A respeito do avaliador a ser cadastrado,
                  selecione a opção que mais se adequa:*
                </Text>
              </Row>
              <Form.Item
                name="questao1"
                rules={[{ required: true }]}
              >
                <Radio.Group
                  onChange={handleDesc}
                >
                  <Space direction="vertical" size="middle">
                    <Radio value={1}>Possui acuidade auditiva normal</Radio>
                    <Radio value={2}>
                      Tem perda auditiva mas faz uso de aparelho de amplificação sonora
                    </Radio>
                    <Radio value={3}>Faz uso de implante coclear</Radio>
                    <Radio value={4}>Outro</Radio>
                    <TextArea disabled={desc} placeholder="Descreva" />
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Space>
            <Space size="large" direction="vertical">
              <Row>
                <Text strong className="register_questions">
                  2. A respeito da experiência profissional do avaliador a ser cadastrado,
                  selecione a opção que melhor o descreve:*
                </Text>
              </Row>
              <Form.Item
                name="questao2"
                rules={[{ required: true }]}
              >
                <Radio.Group>
                  <Space direction="vertical" size="middle">
                    <Radio value={1}>
                      Nunca conversou ou ouviu gravações de uma pessoa com hipernasalidade
                      ou hiponasalidade.
                    </Radio>
                    <Radio value={2}>
                      Já conversou ou ouviu gravações de uma pessoa com hipernasalidade
                      ou hiponasalidade de fala, porém informalmente.
                    </Radio>
                    <Radio value={3}>
                      Ouviu algumas gravações de pessoas com hipernasalidade ou hiponasalidade
                      de fala, durante a graduação em Fonoaudiologia ou durante algum curso
                      ou palestra (contato breve com hipernasalidade ou hiponasalidade de fala).
                    </Radio>
                    <Radio value={4}>
                      Ouviu gravações de pessoas com hipernasalidade ou hiponasalidade de
                      fala várias vezes
                      (contato moderado/intermitente com hipernasalidade ou hiponasalidade de fala).
                    </Radio>
                    <Radio value={5}>
                      Ouviu gravações de pessoas com hipernasalidade ou hiponasalidade
                      de fala muitas vezes
                      (contato regular/constante com hipernasalidade ou hiponasalidade de fala).
                    </Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
            </Space>
          </Space>
          <Divider className="divider" />
          {/** ------------------------------------------------------------------------------ */}
          <Form.Item
            rules={[{ required: true }]}
          >
            <Alert
              className="request-reg__alert"
              message={alertMsg.title}
              description={alertMsg.msg2}
              type="info"
              showIcon
            />
          </Form.Item>
          <Col span={24}>
            <Form.Item>
              <Row gutter={12}>
                <Col span={9}>
                  <Space>
                    <Button size="large" type="text" htmlType="reset">Cancelar</Button>
                    <Button size="large" type="primary" htmlType="submit">Enviar</Button>
                  </Space>
                </Col>
                <Col span={15}>
                  <Alert message="Solicitação enviada!" type="success" showIcon />
                </Col>
              </Row>
            </Form.Item>
          </Col>
        </Form>
      </div>
    </>
  );
};

export default RequestRegistration;
