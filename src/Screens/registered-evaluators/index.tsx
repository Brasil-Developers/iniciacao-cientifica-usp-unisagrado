import { Space, Input, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './registered-evaluators-style.scss';

const { Search } = Input;

const RegisteredEvaluators = () => (
  <div>
    <header className="registered_evaluators">
      <Space direction="horizontal" className="registered_evaluators__header">
        <div>
          <h1>Avaliadores</h1>
        </div>
        <Search placeholder="Pesquisar Avaliador" style={{ width: 200 }} />
        <Button type="primary" icon={<PlusOutlined />} size="large">
          Novo Avaliador
        </Button>
      </Space>
    </header>
  </div>
);

export default RegisteredEvaluators;
