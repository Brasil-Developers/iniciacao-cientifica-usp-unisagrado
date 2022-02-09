import DefaultPageHeader from 'Components/DefaultPageHeader/index.tsx';
import DefaultTable from 'Components/DefaultTable/index.tsx';
import RedirectButton from 'Components/RedirectButton/index.tsx';
import { ModelCol3 } from 'Components/DefaultTable/Columns';
import mock from './mock.tsx';

const headerData = {
  title: 'Tarefas',
  search: 'Pesquisar Tarefas',
  buttons:
  <RedirectButton
    name="Nova Tarefa"
    path="/Avaliadores/Cadastro"
    type="add"
  />,
};

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
    <DefaultPageHeader headerData={headerData} type="search_header" />
    <DefaultTable tableColumns={tableColumns} />
  </div>
);

export default Tasks;
