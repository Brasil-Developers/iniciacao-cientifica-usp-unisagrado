import { ModelCol1, ModelCol2 } from 'Components/DefaultTable/Columns';
import DefaultTable from 'Components/DefaultTable/index.tsx';
import dataMock from './data-table-mock';

import './registered-evaluators-style.scss';

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
    <DefaultTable tableColumns={tableStruct} />
  </div>
);

export default Evaluators;
