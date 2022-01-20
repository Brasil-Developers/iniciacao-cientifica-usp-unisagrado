import {
  Space, Input, Button,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { ModelCol1, ModelCol2 } from 'Components/DefaultTable/Columns';
import DefaultTable from 'Components/DefaultTable/index.tsx';
import dataMock from './data-table-mock.tsx';

import './registered-evaluators-style.scss';

const { Search } = Input;

const tableStruct = [
  {
    key: 1,
    tab: 'Cadastrados',
    col: ModelCol1,
  },
  {
    key: 2,
    tab: 'Pendentes',
    col: ModelCol2,
  },
  {
    key: 3,
    tab: 'Recusados',
    col: ModelCol2,
  },
];

const Evaluators = () => (
  <div className="registered_evaluators">
    <header>
      <Space direction="horizontal" className="registered_evaluators-content__header">
        <div>
          <h1>Avaliadores</h1>
        </div>
        <Search allowClear placeholder="Pesquisar Avaliador" style={{ width: 524 }} size="large" />
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Novo Avaliador
        </Button>
      </Space>
    </header>
    <DefaultTable table={tableStruct} data={dataMock} />
  </div>
);

export default Evaluators;
