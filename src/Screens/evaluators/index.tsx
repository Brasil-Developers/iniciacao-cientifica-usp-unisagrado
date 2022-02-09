import { ModelCol1, ModelCol2 } from 'Components/DefaultTable/Columns';
import RedirectButton from 'Components/RedirectButton/index.tsx';
import DefaultPageHeader from 'Components/DefaultPageHeader/index.tsx';
import DefaultTable from 'Components/DefaultTable/index.tsx';
import dataMock from './data-table-mock.tsx';

import './registered-evaluators-style.scss';

const headerData = {
  title: 'Avaliadores',
  search: 'Pesquisar Avaliadores',
  buttons:
  <RedirectButton
    name="Novo Avaliador"
    path="/Avaliadores/Cadastro"
    type="add"
  />,
};

const tableStruct = [
  {
    key: 1,
    tab: 'Cadastrados',
    col: ModelCol1,
    data: dataMock.register,
  },
  {
    key: 2,
    tab: 'Pendentes',
    col: ModelCol2,
    data: dataMock.pending,
  },
  {
    key: 3,
    tab: 'Recusados',
    col: ModelCol2,
    data: dataMock.refused,
  },
];

const Evaluators = () => (
  <div className="registered_evaluators">
    <DefaultPageHeader headerData={headerData} type="search_header" />
    <DefaultTable tableColumns={tableStruct} />
  </div>
);

export default Evaluators;
