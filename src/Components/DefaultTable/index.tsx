import { Table, Tabs } from 'antd';

import './default-table-style.scss';

const { TabPane } = Tabs;
 
const DefaultTable = (props: any) => {
  const { table, data } = props;
  return (
    <div className="wrapper_default_table">
      <Tabs defaultActiveKey="1" className="wrapper_default_table-tabs">
        {table.map((item: any) => (
          <TabPane tab={item.tab} key={item.key}>
            <Table
              columns={item.col}
              dataSource={data}
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
};

export default DefaultTable;
