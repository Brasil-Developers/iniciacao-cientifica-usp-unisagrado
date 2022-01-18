import {
  Space, Input, Button, Table, Tabs,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import EvaluatorImg from 'Image-general/evaluator_img.jpg';

import './registered-evaluators-style.scss';

const { TabPane } = Tabs;
const { Search } = Input;

const registeredCol = [
  {
    title: 'Avaliadores',
    dataIndex: 'avaliadores',
    sorter: true,
    width: '30%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: true,
    width: '',
  },
  {
    title: 'Data Cad.',
    dataIndex: 'data_cad',
    sorter: true,
  },
  {
    title: 'Master',
    dataIndex: 'master',
    sorter: true,
  },
  {
    title: 'Avaliações',
    dataIndex: 'avaliacoes',
    sorter: true,
  },
  {
    title: 'Tarefas',
    dataIndex: 'tarefas',
    sorter: true,
  },
  {
    title: 'Área',
    dataIndex: 'area',
    sorter: true,
  },
  {
    title: '',
    dataIndex: 'view',
    sorter: false,
  },
];

const pendentAndRecusedCol = [
  {
    title: 'Avaliadores',
    dataIndex: 'avaliadores',
    sorter: true,
    width: '50%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: true,
  },
  {
    title: 'Data Sol.',
    dataIndex: 'data_sol',
    sorter: true,
  },
  {
    title: 'Área',
    dataIndex: 'area',
    sorter: true,
  },
  {
    title: '',
    dataIndex: 'view',
  },
];

const Perfil = (props: any) => {
  const { nome } = props;
  return (
    <div className="wrapper_perfil">
      <div className="wrapper_perfil-photo">
        <img src={EvaluatorImg} alt="mulher" className="wrapper_perfil-photo__img" />
      </div>
      <div className="wrapper_perfil-name">
        <span>{nome}</span>
      </div>
    </div>
  );
};

const RegisteredEval = [
  {
    key: 1,
    avaliadores: <Perfil nome="Nome do Avaliador" />,
    email: 'avaliador@email.com',
    data_cad: '02/02/19',
    data_sol: '02/03/1900',
    master: <Perfil />,
    avaliacoes: 35,
    tarefas: '10/15',
    area: 'vazio',
    status: '',
    view: <Button type="primary">Visulizar</Button>,
  },
];

const TableAnalise = (props: any) => {
  const { data, col } = props;
  return (
    <Table
      columns={col}
      dataSource={data}
      pagination={{
        current: 1,
        pageSize: 10,
      }}
    />
  );
};

const RegisteredEvaluators = () => (
  <div className="registered_evaluators">
    <header>
      <Space direction="horizontal" className="registered_evaluators-content__header">
        <div>
          <h1>Avaliadores</h1>
        </div>
        <Search placeholder="Pesquisar Avaliador" style={{ width: 524 }} />
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Novo Avaliador
        </Button>
      </Space>
    </header>
    <div className="registered_evaluators-content__table">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Cadastrados" key="1">
          <TableAnalise data={RegisteredEval} col={registeredCol} />
        </TabPane>
        <TabPane tab="Pendentes" key="2">
          <TableAnalise data={RegisteredEval} col={pendentAndRecusedCol} />
        </TabPane>
        <TabPane tab="Recusados" key="3">
          <TableAnalise data={RegisteredEval} col={pendentAndRecusedCol} />
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default RegisteredEvaluators;
