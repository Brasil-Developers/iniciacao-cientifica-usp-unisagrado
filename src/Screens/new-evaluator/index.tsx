import {
  Form,
  Space,
  Button,
  Divider,
  Typography,
} from 'antd';
import DefaultSubPage from 'Components/DefaultSubPage/index.tsx';
import PersonalDataForm from 'Components/PersonalDataForm/index.tsx';
import PasswordFields from 'Components/PasswordFields/index.tsx';
import ProfessionalDataForm from 'Components/ProfessionalDataForm/index.tsx';
import './new-evaluator-style.scss';

const { Text } = Typography;

const pageHeader = {
  back_page_path: '/evaluators',
  back_page_title: 'Avaliadores',
  page_title: 'Cadastrar Novo Avaliador',
};

const tabs = [
  {
    key: 1,
    name: 'Dados Pessoais',
    content:
  <>
    <Form
      layout="vertical"
      size="middle"
    >
      <div className="form_space">
        <PersonalDataForm />
        <Text>
          <span className="blue_title">
            Senha Provisória
          </span>
          <Text type="secondary"> (O avaliador cadastrado deverá alterar a senha em seu primeiro acesso ao portal)</Text>
        </Text>
        <Divider />
        <PasswordFields size={6} gutter={20} />
      </div>
      <Form.Item>
        <Space>
          <Button size="large" type="text" htmlType="reset">Cancelar</Button>
          <Button size="large" type="primary" htmlType="submit">Próximo</Button>
        </Space>
      </Form.Item>
    </Form>
  </>,
  },
  {
    key: 2,
    name: 'Dados Profissionais',
    content:
  <>
    <Form
      layout="vertical"
      size="middle"
    >
      <div className="prof_form_wraper">
        <ProfessionalDataForm />
      </div>
      <Form.Item>
        <Space>
          <Button size="large" type="text" htmlType="reset">Cancelar</Button>
          <Button size="large" type="primary">Anterior</Button>
          <Button size="large" type="primary" htmlType="submit">Cadastrar</Button>
        </Space>
      </Form.Item>
    </Form>
  </>,
  },
];

export default function NewEvaluator() {
  return (
    <div className="page_content_wraper">
      <DefaultSubPage pageHeader={pageHeader} tabs={tabs} />
    </div>
  );
}
