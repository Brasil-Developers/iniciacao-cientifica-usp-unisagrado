import {
  Button, Avatar, Space, Row,
} from 'antd';
import EvaluatorImg from 'Image-general/evaluator_img.jpg';
import EditButton from 'Components/EditButton/index.tsx';

const dataMock = [
  {
    key: 1,
    avaliadores:
  <Space size="large">
    <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
    <span>Nome do Avaliador</span>
  </Space>,
    email: '1avaliador@email.com',
    data_cad:
  <Row justify="center">
    <span>02/02/19</span>
  </Row>,
    data_sol:
  <Row justify="center">
    <span>02/03/1900</span>
  </Row>,
    master:
  <Row justify="center">
    <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
  </Row>,
    avaliacoes:
  <Row justify="center">
    <span>35</span>
  </Row>,
    tarefas:
  <Row justify="center">
    <span>10/04</span>
  </Row>,
    area:
  <Row>
    <span>Fonoaudiólogo</span>
  </Row>,
    status: '',
    view: <Button type="primary">Visualizar</Button>,
    edit_button: <EditButton path="/evaluators/edit-evaluator" />,
  },
];

export default dataMock;
