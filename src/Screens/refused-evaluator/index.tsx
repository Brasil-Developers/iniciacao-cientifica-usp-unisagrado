import {
  Form,
  Row,
  Col,
  Space,
  Avatar,
} from 'antd';
import DefaultSubPage from 'Components/DefaultSubPage/index.tsx';
import ProfessionalDataForm from 'Components/ProfessionalDataForm/index.tsx';
import PersonalDataForm from 'Components/PersonalDataForm/index.tsx';
import OccupationArea from 'Components/OccupationArea/index.tsx';
import EvaluatorImg from 'Image-general/evaluator_img.jpg';

const pageHeader = {
  back_page_path: '/Avaliadores',
  back_page_title: 'Avaliadores',
  page_title: 'Solicitação Recusada',
  extra:
  <Row gutter={70} align="middle">
    <Col>
      <span>Data solicitação: 02/10/19</span>
    </Col>
    <Col>
      <span>Recusada em: 02/10/19</span>
    </Col>
    <Col>
      <Space size="middle">
        <span>Recusada por: </span>
        <Avatar size={30} src={EvaluatorImg} className="small_avatar" />
      </Space>
    </Col>
  </Row>,
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
  </>,
  },
];

export default function RefusedEvaluator() {
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
