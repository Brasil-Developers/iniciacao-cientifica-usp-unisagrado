import {
  Row,
  Col,
  Form,
  Input,
  Space,
  Button,
  Divider,
  Collapse,
} from 'antd';

import './help-style.scss';

const { TextArea } = Input;
const { Panel } = Collapse;

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Cras ultricies aliquet aliquet. Quisque pharetra nibh dui. Donec aliquam ligula nibh, 
id fermentum nibh blandit et. Etiam magna velit, volutpat nec luctus vel, sollicitudin 
ultricies orci. Phasellus ipsum quam, euismod vel justo in, efficitur aliquet lacus. 
Mauris massa nisl, facilisis non arcu et, feugiat mollis massa. Pellentesque vitae erat 
hendrerit, ultricies elit ut, commodo justo. Praesent vestibulum nisi a rutrum fermentum. 
Aliquam felis est, ultricies nec consequat at, pellentesque vel dolor. 
In aliquet mi mauris, vitae tincidunt dui condimentum in.`;

export default function Help() {
  return (
    <div className="page_content_wraper">
      <div className="help_screen_wraper">
        <Row
          justify="center"
          className="help_page"
        >
          <Row
            justify="center"
            className="help_page__header"
          >
            <Col>
              <Space align="center" direction="vertical">
                <h1>Solicitar Ajuda</h1>
                <p>
                  Lembre-se de que você pode tirar dúvidas a qualquer momento
                  consultando a seção Perguntas Frequentes logo abaixo.
                  Tem alguma dúvida ou problema específico?
                  Preencha o formulário e nos diga como podemos ajudá-lo(a).
                </p>
              </Space>
            </Col>
          </Row>
          <Form
            className="help_page__form"
            layout="vertical"
            size="middle"
          >
            <Row gutter={14}>
              <Col span={12}>
                <Form.Item
                  label="Nome"
                  name="nome"
                  rules={[
                    {
                      type: 'string',
                      message: 'Entrada inválida',
                    },
                  ]}
                >
                  <Input placeholder="Digite seu nome completo" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      type: 'email',
                      message: 'Entrada inválida',
                    },
                  ]}
                >
                  <Input placeholder="Digite seu e-mail" />
                </Form.Item>
              </Col>
            </Row>
            <Col span={24}>
              <Form.Item
                label="Assunto"
                name="assunto"
                rules={[
                  {
                    type: 'string',
                    message: 'Entrada inválida',
                  },
                ]}
              >
                <Input placeholder="Digite o assunto do e-mail" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Mensagem"
                name="mensagem"
                rules={[
                  {
                    type: 'string',
                    message: 'Entrada inválida',
                  },
                ]}
              >
                <TextArea placeholder="Digite aqui sua mensagem" />
              </Form.Item>
              <Form.Item>
                <Space>
                  <Button size="large" type="text" htmlType="reset">Cancelar</Button>
                  <Button size="large" type="primary" htmlType="submit">Enviar</Button>
                </Space>
              </Form.Item>
            </Col>
          </Form>
        </Row>
        <Divider orientation="left">Perguntas Frequentes</Divider>
        <Collapse accordion>
          <Panel header="Como cadastrar um novo avaliador" key="1">
            <p>{text}</p>
          </Panel>
          <Panel header="Como alterar minha senha?" key="2">
            <p>{text}</p>
          </Panel>
          <Panel header="Como cadastrar uma gravação?" key="3">
            <p>{text}</p>
          </Panel>
          <Panel header="Como editar uma gravação cadastrada?" key="4">
            <p>{text}</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
