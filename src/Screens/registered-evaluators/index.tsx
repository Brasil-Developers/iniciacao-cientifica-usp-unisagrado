import {
  Space, Input, Button, Table, Tabs,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './registered-evaluators-style.scss';

const { TabPane } = Tabs;
const { Search } = Input;

const columns = [
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
    width: '10%',
  },
  {
    title: 'Data Cad.',
    dataIndex: 'data_cad',
    sorter: true,
    width: '10%',
  },
  {
    title: 'Master',
    dataIndex: 'master',
    sorter: true,
    width: '10%',
  },
  {
    title: 'Avaliações',
    dataIndex: 'avaliacoes',
    sorter: true,
    width: '10%',
  },
  {
    title: 'Tarefas',
    dataIndex: 'tarefas',
    sorter: true,
    width: '10%',
  },
  {
    title: 'Área',
    dataIndex: 'area',
    sorter: true,
    width: '10%',
  },
];

const data: any = [];

for (let i = 0; i < 100; i += 1) {
  data.push({
    key: `${i}`,
    avaliadores: `Nome do avaliador${i}`,
    email: 'avaliador@email.com',
    data_cad: '02/02/19',
    master: `${i}`,
    avaliacoes: 35,
    tarefas: '10/15',
    area: 'vazio',
  });
}

const RegisteredEvaluators = () => (
  <div className="registered_evaluators">
    <header>
      <Space direction="horizontal" className="registered_evaluators-content__header">
        <div>
          <h1>Avaliadores</h1>
        </div>
        <Search placeholder="Pesquisar Avaliador" style={{ width: 524, height: 40 }} />
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Novo Avaliador
        </Button>
      </Space>
    </header>
    <div className="registered_evaluators-content__table">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Cadastrados" key="1">
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              current: 1,
              pageSize: 10,
            }}
          />
        </TabPane>
        <TabPane tab="Pendentes" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Recusados" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default RegisteredEvaluators;
