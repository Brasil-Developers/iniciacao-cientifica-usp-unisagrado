import {
  Avatar,
  Button,
  Typography,
  Space,
  Row,
} from 'antd';
import EvaluatorImg from 'Image-general/evaluator_img.jpg';

const { Text } = Typography;

const register = [
  {
    key: 1,
    tarefa:
  <Space>
    <span>
      12234345 - Titulo da Tarefa
    </span>
    <Text type="secondary">
      Descrição: Lorem ipsum Lorem ipsum Lorem ipsum Lorem...
    </Text>
  </Space>,
    responsavel:
  <Row justify="center">
    <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
  </Row>,
    master:
  <Row justify="center">
    <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
  </Row>,
    data:
  <Row justify="center">
    <span>10/03</span>
  </Row>,
    itens:
  <Row justify="center">
    <span>8 Gravações</span>
  </Row>,
    entrega:
  <Row justify="center">
    <span>10/06</span>
  </Row>,
    edit_button: <Button type="primary">Ver Tarefa</Button>,
  },
];

const done = [
  {
    key: 1,
    tarefa:
  <Space>
    <span>
      12234345 - Titulo da Tarefa
    </span>
    <Text type="secondary">
      Descrição: Lorem ipsum Lorem ipsum Lorem ipsum Lorem...
    </Text>
  </Space>,
    responsavel:
  <Row justify="center">
    <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
  </Row>,
    master:
  <Row justify="center">
    <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
  </Row>,
    data:
  <Row justify="center">
    <span>10/03</span>
  </Row>,
    itens:
  <Row justify="center">
    <span>8 Gravações</span>
  </Row>,
    entrega:
  <Row justify="center">
    <span>10/06</span>
  </Row>,
    edit_button: <Button type="primary">Ver Tarefa</Button>,
  },
];

const notDone = [
  {
    key: 1,
    tarefa:
  <Space>
    <span>
      12234345 - Titulo da Tarefa
    </span>
    <Text type="secondary">
      Descrição: Lorem ipsum Lorem ipsum Lorem ipsum Lorem...
    </Text>
  </Space>,
    responsavel:
  <Row justify="center">
    <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
  </Row>,
    master:
  <Row justify="center">
    <Avatar size={32} src={EvaluatorImg} className="small_avatar" />
  </Row>,
    data:
  <Row justify="center">
    <span>10/03</span>
  </Row>,
    itens:
  <Row justify="center">
    <span>8 Gravações</span>
  </Row>,
    entrega:
  <Row justify="center">
    <span>10/06</span>
  </Row>,
    edit_button: <Button type="primary">Concluir</Button>,
  },
];

const mock = {
  register,
  done,
  notDone,
};

export default mock;
