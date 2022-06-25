import DefaultTable from 'Components/DefaultTable/index.tsx';
import { ModelCol3 } from 'Components/DefaultTable/Columns';
import mock from './mock.tsx';

const tableColumns = [
  {
    key: 1,
    tab: 'Caixa de Entrada',
    col: ModelCol3,
    data: mock.register,
  },
  {
    key: 2,
    tab: 'Concluídas',
    col: ModelCol3,
    data: mock.done,
  },
  {
    key: 3,
    tab: 'Não Finalizadas',
    col: ModelCol3,
    data: mock.notDone,
  },
];

const Tasks = () => (
  <div>
    <DefaultTable tableColumns={tableColumns} />
  </div>
);

export default Tasks;
