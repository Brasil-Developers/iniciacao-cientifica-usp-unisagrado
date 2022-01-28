import {
  Avatar,
  Button,
  Typography,
  Space,
} from 'antd';
import EvaluatorImg from 'Image-general/evaluator_img.jpg';

const { Text } = Typography;

const mock = [
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
    responsavel: <Avatar size={32} src={EvaluatorImg} className="small_avatar" />,
    master: <Avatar size={32} src={EvaluatorImg} className="small_avatar" />,
    data: '10/03',
    itens: '8 Gravações',
    entrega: '10/06',
    edit_button: <Button type="primary">Ver Tarefa</Button>,
  },
  {
    key: 2,
    tarefa:
  <Space>
    <span>
      12234345 - Titulo da Tarefa
    </span>
    <Text type="secondary">
      Descrição: Lorem ipsum Lorem ipsum Lorem ipsum Lorem...
    </Text>
  </Space>,
    responsavel: <Avatar size={32} src={EvaluatorImg} className="small_avatar" />,
    master: <Avatar size={32} src={EvaluatorImg} className="small_avatar" />,
    data: '10/03',
    itens: '8 Gravações',
    entrega: '10/06',
    edit_button: <Button type="primary">Ver Tarefa</Button>,
  },
  {
    key: 3,
    tarefa:
  <Space>
    <span>
      12234345 - Titulo da Tarefa
    </span>
    <Text type="secondary">
      Descrição: Lorem ipsum Lorem ipsum Lorem ipsum Lorem...
    </Text>
  </Space>,
    responsavel: <Avatar size={32} src={EvaluatorImg} className="small_avatar" />,
    master: <Avatar size={32} src={EvaluatorImg} className="small_avatar" />,
    data: '10/03',
    itens: '8 Gravações',
    entrega: '10/06',
    edit_button: <Button type="primary">Ver Tarefa</Button>,
  },
];

export default mock;
