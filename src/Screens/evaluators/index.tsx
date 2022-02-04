import { ModelCol1, ModelCol2 } from 'Components/DefaultTable/Columns';
import AddButton from 'Components/AddButton/index.tsx';
import DefaultPageHeader from 'Components/DefaultPageHeader/index.tsx';
import DefaultTable from 'Components/DefaultTable/index.tsx';
import dataMock from './data-table-mock.tsx';

import './registered-evaluators-style.scss';

const headerData = {
  title: 'Avaliadores',
  search: 'Pesquisar Avaliadores',
  buttons: <AddButton name="Novo Avaliador" path="/evaluators/new-evaluator" />,
};

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
    <DefaultPageHeader headerData={headerData} />
    <DefaultTable tableColumns={tableStruct} rowData={dataMock} />
  </div>
);

export default Evaluators;
