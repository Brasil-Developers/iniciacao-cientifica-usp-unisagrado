import { useHistory } from 'react-router-dom';
import {
  Space,
  Tabs,
  Divider,
  Button,
  Form,
  Input,
  Col,
  Row,
} from 'antd';
import { ReactComponent as BackIcon } from 'assets/icons/back.svg';
import './new-evaluator-style.scss';

const { TabPane } = Tabs;

const NewEvaluator = () => {
  const history = useHistory();
  const handleClick = (routes:any) => history.push(routes);
  return (
    <div className="page_content_wraper">
      <header>
        <button type="button" onClick={() => handleClick('/evaluators')}>
          <Space>
            <BackIcon className="back_icon" />
            <span className="page_title">
              Avaliadores
            </span>
          </Space>
        </button>
        <h1>Cadastrar Novo Avaliador</h1>
      </header>
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Dados Pessoais" key="1">
            <div className="content">
              <Form layout="vertical" size="middle">
                <Divider />
                <Row>
                  <Col>
                    <Space>
                      <Form.Item
                        label="Senha"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                      >
                        <Input.Password />
                      </Form.Item>
                      <Form.Item
                        label="Senha Confirmação"
                        dependencies={['password']}
                        name="confirm"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                      >
                        <Input.Password />
                      </Form.Item>
                    </Space>
                  </Col>
                </Row>
                <Space>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="text" htmlType="reset">Cancelar</Button>
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">Próximo</Button>
                  </Form.Item>
                </Space>
              </Form>
            </div>
          </TabPane>
          <TabPane tab="Dados Profissionais" key="2">
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default NewEvaluator;
