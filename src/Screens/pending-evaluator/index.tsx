import { Button, Form, Space } from 'antd';
import DefaultSubPage from 'Components/DefaultSubPage/index.tsx';
import ProfessionalDataForm from 'Components/ProfessionalDataForm/index.tsx';
import PersonalDataForm from 'Components/PersonalDataForm/index.tsx';
import OccupationArea from 'Components/OccupationArea/index.tsx';

const pageHeader = {
  back_page_path: '/Avaliadores',
  back_page_title: 'Avaliadores',
  page_title: 'Solicitação para Cadastro',
  extra: <span>Data solicitação: 02/10/19</span>,
};

const tabs = [
  {
    key: 1,
    name: 'Dados Pessoais',
    content:
  <div className="form_space">
    <PersonalDataForm />
  </div>,
  },
  {
    key: 2,
    name: 'Dados Profissionais',
    content:
  <>
    <OccupationArea />
    <ProfessionalDataForm />
    <Form.Item>
      <Space>
        <Button type="text" size="large">Recusar Cadastro</Button>
        <Button type="primary" size="large">Aceitar Cadastro</Button>
      </Space>
    </Form.Item>
  </>,
  },
];

export default function PendingEvaluator() {
  return (
    <div className="page_content_wraper">
      <Form
        layout="vertical"
        size="middle"
      >
        <DefaultSubPage pageHeader={pageHeader} tabs={tabs} type="view" />
      </Form>
    </div>
  );
}
