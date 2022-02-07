import DefaultPageHeader from 'Components/DefaultPageHeader/index.tsx';
import DefaultTable from 'Components/DefaultTable/index.tsx';
import AddButton from 'Components/AddButton/index.tsx';
import { ModelCol3 } from 'Components/DefaultTable/Columns';
import mock from './mock.tsx';

const headerData = {
  title: 'Tarefas',
  search: 'Pesquisar Tarefas',
  buttons: <AddButton name="Nova Tarefa" path="/home" />,
};

const tableColumns = [
  {
    key: 1,
    tab: 'Caixa de Entrada',
    col: ModelCol3,
  },
  {
    key: 2,
    tab: 'Concluídas',
    col: ModelCol3,
  },
  {
    key: 3,
    tab: 'Não Finalizadas',
    col: ModelCol3,
  },
];

const Tasks = () => (
  <div>
    <DefaultPageHeader headerData={headerData} type="search_header" />
    <DefaultTable tableColumns={tableColumns} rowData={mock} />
  </div>
);

export default Tasks;
