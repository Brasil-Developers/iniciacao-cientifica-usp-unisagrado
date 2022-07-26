import { Table } from 'antd';
import { ModelCol4 } from 'Components/DefaultTable/Columns';

// @note apenas para teste
const tableColumns = [
  {
    key: 1,
    tab: 'Cadastrados',
    col: ModelCol4,
    data: [
      {
        key: 1,
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
