import { Table } from 'antd';
import AudioPlayer from 'Components/AudioPlayer/index.tsx';
import DataText from 'Components/DataText/index.tsx';
import { ModelCol4 } from 'Components/DefaultTable/Columns';
import RedirectButton from 'Components/RedirectButton/index.tsx';

// const ModelCol4 = [
//   {
//     title: 'No da Gravação',
//     dataIndex: 'record_number',
//     width: '60%',
//     sorter: (a, b) => a.tarefas - b.tarefas,
//   },
//   {
//     title: 'Data',
//     dataIndex: 'record_date',
//     width: '8%',
//     sorter: (a, b) => a.tarefas - b.tarefas,
//   },
//   {
//     title: 'Falante',
//     dataIndex: 'speaker',
//     width: '8%',
//     sorter: (a, b) => a.tarefas - b.tarefas,
//   },
//   {
//     title: 'Local',
//     dataIndex: 'local',
//     width: '8%',
//     sorter: (a, b) => a.tarefas - b.tarefas,
//   },
//   {
//     title: '',
//     dataIndex: 'record_analyze',
//     width: '',
//     sorter: false,
//   },
//   {
//     title: '',
//     dataIndex: 'record_edit',
//     width: '',
//     sorter: false,
//   },
// ];

// @note apenas para teste
const tableColumns = [
  {
    key: 1,
    tab: 'Cadastrados',
    col: ModelCol4,
    data: [
      {
        key: 1,
        record_number:
  <>
    <DataText>
      Gravação 1158714544
    </DataText>
    <AudioPlayer path="../../audios/audio1.mp3" />
  </>,
        record_date:
  <p>teste</p>,
        speaker:
  <p>teste</p>,
        local:
  <p>teste</p>,
        record_analyze: <RedirectButton name="Analisar Gravação" path="/gravacoes/analisar" />,
        record_edit: <RedirectButton type="edit" path="/gravacoes/editar" />,
      },
    ],
  },
];

const Records = () => (
  <div>
    {tableColumns.map((item: any) => (
      <Table
        columns={item.col}
        dataSource={item.data}
        rowSelection={{
          type: 'checkbox',
        }}
        pagination={{
          position: ['topRight'],
          defaultCurrent: 1,
          pageSize: 20,
        }}
      />
    ))}
  </div>
);

export default Records;
