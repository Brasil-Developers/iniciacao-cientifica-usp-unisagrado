/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
// ICONS
// eslint-disable-next-line object-curly-newline
import { Alert, Button, Checkbox, Input, Radio, Select, Space } from 'antd';
import React, { useState } from 'react';
import FooterInitial from 'Screens/footer/footer-initial.tsx';
// eslint-disable-next-line import/no-extraneous-dependencies
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { ReactComponent as BackIcon } from '../../assets/icons/components/reset-password/back.svg';

// STYLE COMPONENT
import './registration-style.scss';

export default function Resgistration() {
  const [valueOption, setValueOption] = useState();
  const { Option } = Select;
  const [value, setValue] = useState();
  const [valueQuestion2, setValueQuestion2] = useState();

  const onChange = (e) => {
    setValueOption(e.target.value);
  };

  const onChangeRadio1 = (e) => {
    setValue(e.target.value);
  };

  const onChangeRadio2 = (e) => {
    setValueQuestion2(e.target.value);
  };

  const { TextArea } = Input;

  function onChangeCheck() {
  }

  return (
    <>
      <div className="login_page">
        <div className="login_page__top_bar"></div>
        <div className="login_page__content">
          <div className="registration__content">
            <div className="registration__btn_back">
              <div className="btn_back">
                <BackIcon className="icon_back" />
                Voltar para a tela de login
              </div>
            </div>
            <div className="title">Solicitar Cadastro</div>
            <div className="content_text">
              Se você já foi cadastrado como avaliador neste portal mas não
              lembra sua senha, selecione a função
              <b> RECUPERAR SENHA </b>
              na tela inicial. Se ainda não foi cadastrado,
              <b> preencha o formulário abaixo </b>
              para que um administrador do portal (Avaliador Master) possa
              realizar seu cadastro. Após o preenchimento, fique atento à sua
              caixa de e-mail. :)
            </div>
            <div className="box_important">
              <Alert
                message="Importante!"
                description="Este portal é restrito a profissionais, pesquisadores e alunos
                          integrantes de equipes específicas, autorizadas pelo HRAC-USP.
                          Caso você não esteja enquadrado nessas características, não será
                          possível realizar seu cadastro. Em caso de dúvidas, entre em
                          contato através do e-mail exemplo@email.com.br."
                type="info"
                showIcon
                closable
              />
            </div>
            <div className="data-person_title">
              <text className="title_blue">Dados pessoais</text>
              <text className="subtitle">
                {' '}
                (Necessários para seu cadastro e identificação dentro do portal)
              </text>
              <div className="line"></div>
              <div className="table_forms">
                <table>
                  <td>
                    <p className="input_title">
                      Nome
                      <i className="input_must">*</i>
                    </p>
                    <Input
                      placeholder="Digite seu nome completo"
                      style={{ width: '254px', marginRight: '16px' }}
                    />
                  </td>
                  <td>
                    <p className="input_title">
                      Data de Nasc*
                      <i className="input_must">*</i>
                    </p>
                    <Input
                      placeholder="Digite seu nome completo"
                      style={{ width: '150px', marginRight: '16px' }}
                    />
                  </td>
                  <td>
                    <p className="input_title">
                      CPF
                      <i className="input_must">*</i>
                    </p>
                    <Input placeholder="Digite seu nome completo" />
                  </td>
                </table>
              </div>
              <div className="table_forms">
                <Radio.Group onChange={onChange} value={valueOption}>
                  <Radio value={1}>Feminino</Radio>
                  <Radio value={2}>Masculino</Radio>
                  <Radio value={3}>Outro</Radio>
                </Radio.Group>
              </div>
              <div className="table_forms">
                <table>
                  <td>
                    <p className="input_title">
                      Área de atuação
                      <i className="input_must">*</i>
                    </p>
                    <Select style={{ width: 200 }} placeholder="Selecionar">
                      <Option value="1">Astrologia</Option>
                      <Option value="2">Vampirismo</Option>
                      <Option value="3">Pompoarismo</Option>
                      <Option value="4">Professor de Geografia</Option>
                      <Option value="5">Atendente de sex shop</Option>
                      <Option value="6">Vendedor da Avon</Option>
                    </Select>
                  </td>
                  <td>
                    <p className="input_title">
                      Número do CRFa
                      <i className="input_must">*</i>
                    </p>
                    <Input
                      placeholder="_______________"
                      style={{ width: '254px', marginRight: '16px' }}
                    />
                  </td>
                </table>
              </div>
            </div>
            <div className="data-person_title">
              <text className="title_blue">E-mail e Senha</text>
              <text className="subtitle">
                {' '}
                (Você precisará se lembrar deles para acessar o portal)
              </text>
              <div className="line"></div>
              <div className="table_forms">
                <table>
                  <td>
                    <p className="input_title">
                      E-mail
                      <i className="input_must">*</i>
                    </p>
                    <Input
                      placeholder="Digite seu e-mail"
                      style={{ width: '254px', marginRight: '16px' }}
                    />
                  </td>
                </table>
              </div>
              <div className="table_forms">
                <table>
                  <td>
                    <p className="input_title">
                      Senha
                      <i className="input_must">*</i>
                    </p>
                    <Space direction="vertical">
                      <Input.Password
                        placeholder="input password"
                        style={{ width: '254px', marginRight: '16px' }}
                        // eslint-disable-next-line max-len
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Space>
                  </td>
                  <td>
                    <p className="input_title">
                      Senha Confirmação
                      <i className="input_must">*</i>
                    </p>
                    <Space direction="vertical">
                      <Input.Password
                        placeholder="input password"
                        style={{ width: '254px', marginRight: '16px' }}
                        // eslint-disable-next-line max-len
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Space>
                  </td>
                </table>
              </div>
            </div>
            <div className="data-person_title">
              <text className="title_blue">Situação Técnica</text>
              <text className="subtitle">
                {' '}
                (Algumas informações que nos ajudarão a te conhecer melhor)
              </text>
              <div className="line"></div>
              <div className="questions">
                1. Antes de analisar as gravações de fala neste portal, você
                deve indicar qual das seguintes opções melhor descrevem você:
                <i className="input_must">*</i>
              </div>
              <div className="table_forms">
                <Radio.Group onChange={onChangeRadio1} value={value}>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={1}>Estou com acuidade auditiva normal</Radio>
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={2}>
                      Tenho perda auditiva mas faço uso de aparelho de
                      amplificação sonora
                    </Radio>
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={3}>Faço uso de implante coclear</Radio>
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={4}>Outro</Radio>
                  </p>
                </Radio.Group>
                <TextArea rows={4} style={{ marginBottom: '32px' }} />
              </div>
              <div className="questions">
                2. A respeito de sua experiência profissional, qual das
                seguintes opções melhor descreve você:
                <i className="input_must">*</i>
              </div>
              <div className="table_forms">
                <Radio.Group onChange={onChangeRadio2} value={valueQuestion2}>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={1}>
                      Nunca conversei ou ouvi gravações de uma pessoa com
                      hipernasalidade ou hiponasalidade.
                    </Radio>
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={2}>
                      Já conversei ou ouvi gravações de uma pessoa com
                      hipernasalidade ou hiponasalidade de fala, porém
                      informalmente.
                    </Radio>
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={3}>
                      Ouvi algumas gravações de pessoas com hipernasalidade ou
                      hiponasalidade de fala, durante a graduação em
                      Fonoaudiologia ou durante algum curso ou palestra (contato
                      breve com hipernasalidade ou hiponasalidade de fala).
                    </Radio>
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={4}>
                      Ouvi gravações de pessoas com hipernasalidade ou
                      hiponasalidade de fala várias vezes (contato
                      moderado/intermitente com hipernasalidade ou
                      hiponasalidade de fala).
                    </Radio>
                  </p>
                  <p style={{ marginBottom: '14px' }}>
                    <Radio value={5}>
                      Ouvi gravações de pessoas com hipernasalidade ou
                      hiponasalidade de fala muitas vezes (contato
                      regular/constante com hipernasalidade ou hiponasalidade de
                      fala).
                    </Radio>
                  </p>
                </Radio.Group>
              </div>
              <div className="line"></div>
            </div>
            <div className="box_important">
              <Alert
                message="Importante!"
                description="Para usar este portal você precisará do seu
                próprio computador com acesso à
                internet e seu próprio fone de ouvido.
                Você também deve ter a possibilidade de ajustar o volume da gravação sendo avaliada."
                type="info"
                showIcon
                closable
              />
            </div>
            <div className="agree">
              <Checkbox onChange={onChangeCheck}>
                Estou ciente
                <i className="input_must">*</i>
              </Checkbox>
            </div>
            <div className="data-person_bottom">
              <div className="buttons_bottom">
                <div className="buttons_bottom__cancel">Cancelar</div>
                <div className="buttons_bottom__send">
                  <Button
                    type="primary"
                    style={{ width: '92px', height: '38px' }}
                  >
                    Enviar
                  </Button>
                </div>
                <div className="buttons_bottom__msg">
                  <Alert
                    message="Solicitação enviada!"
                    type="success"
                    showIcon
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterInitial />
      </div>
    </>
  );
}
