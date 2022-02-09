import {
  Form,
  Divider,
  Space,
  Button,
  Avatar,
  Row,
  Col,
} from 'antd';
import DefaultSubPage from 'Components/DefaultSubPage/index.tsx';
import PersonalDataForm from 'Components/PersonalDataForm/index.tsx';
import PasswordFields from 'Components/PasswordFields/index.tsx';
import ProfessionalDataForm from 'Components/ProfessionalDataForm/index.tsx';
import OccupationArea from 'Components/OccupationArea/index.tsx';
import EvaluatorImg from 'Image-general/evaluator_img.jpg';

const pageHeader = {
  back_page_path: '/Avaliadores',
  back_page_title: 'Avaliadores',
  page_title: 'Editar Avaliador',
  extra:
  <Row gutter={70} align="middle">
    <Col>
      <span>Data solicitação: 02/10/19</span>
    </Col>
    <Col>
      <span>Data cadastro: 02/10/19</span>
    </Col>
    <Col>
      <Space size="middle">
        <span>Cadastrado por: </span>
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
  <>
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
        <PasswordFields
          size={6}
          gutter={20}
          type="modify"
        />
        <span>Somente o avaliador pode alterar sua senha de acesso</span>
      </div>
      <Form.Item>
        <Row justify="space-between">
          <Space>
            <Button size="large" type="text" htmlType="reset">Cancelar</Button>
            <Button size="large" type="primary" htmlType="submit">Próximo</Button>
          </Space>
          <Button size="large" type="primary" danger>Excluir Avaliador</Button>
        </Row>
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
        <OccupationArea />
        <ProfessionalDataForm />
      </div>
      <Form.Item>
        <Row justify="space-between">
          <Space>
            <Button size="large" type="text">Anterior</Button>
            <Button size="large" type="primary">Salvar Alterações</Button>
          </Space>
          <Button size="large" type="primary" danger>Excluir Avaliador</Button>
        </Row>
      </Form.Item>
    </Form>
  </>,
  },
];

export default function EditEvaluator() {
  return (
    <div className="page_content_wraper">
      <DefaultSubPage pageHeader={pageHeader} tabs={tabs} />
    </div>
  );
}
