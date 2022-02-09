import {
  Form,
  Divider,
  Space,
  Button,
} from 'antd';
import DefaultTabs from 'Components/DefaultTabs/index.tsx';
import PersonalDataForm from 'Components/PersonalDataForm/index.tsx';
import ProfessionalDataForm from 'Components/ProfessionalDataForm/index.tsx';
import PasswordFields from 'Components/PasswordFields/index.tsx';
import DefaultPageHeader from 'Components/DefaultPageHeader/index.tsx';
import OccupationArea from 'Components/OccupationArea/index.tsx';

const tabs = [
  {
    key: 1,
    name: 'Dados Pessoais',
    content:
  <div>
    <Form
      layout="vertical"
      size="middle"
    >
      <div className="form_space">
        <PersonalDataForm />
        <Divider
          orientation="left"
          plain
        >
          Alterar Senha
        </Divider>
        <PasswordFields size={6} gutter={20} type="modify" />
      </div>
      <Form.Item>
        <Space>
          <Button size="large" type="text" htmlType="reset">Cancelar</Button>
          <Button size="large" type="primary" htmlType="submit" disabled>Salvar Alterações</Button>
        </Space>
      </Form.Item>
    </Form>
  </div>,
  },
  {
    key: 2,
    name: 'Dados Profissionais',
    content:
  <div>
    <Form
      layout="vertical"
      size="large"
    >
      <OccupationArea type="area" />
      <ProfessionalDataForm />
      <Form.Item>
        <Space>
          <Button size="large" type="text" htmlType="reset">Anterior</Button>
          <Button size="large" type="primary" htmlType="submit">Salvar Alterações</Button>
        </Space>
      </Form.Item>
    </Form>
  </div>,
  },
];

const headerData = {
  title: 'Minha Conta',
};

export default function MyAccount() {
  return (
    <div className="page_content_wraper">
      <DefaultPageHeader headerData={headerData} />
      <DefaultTabs tabs={tabs} />
    </div>
  );
}
