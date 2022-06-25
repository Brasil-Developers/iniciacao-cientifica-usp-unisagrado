import { Table, Tabs } from 'antd';

import './default-table-style.scss';

const { TabPane } = Tabs;

const DefaultTable = ({ tableColumns }:any) => (
  <div className="wrapper_default_table">
    <Tabs defaultActiveKey="1" className="wrapper_default_table-tabs">
      {tableColumns.map((item: any) => (
        <TabPane tab={item.tab} key={item.key}>
          <Table
            columns={item.col}
            dataSource={item.data}
            pagination={{
              position: ['topRight'],
              defaultCurrent: 1,
              pageSize: 20,
            }}
          />
        </TabPane>
      ))}
    </Tabs>
  </div>
);

export default DefaultTable;
