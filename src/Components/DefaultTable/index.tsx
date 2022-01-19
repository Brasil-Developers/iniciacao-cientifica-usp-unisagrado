import { Table, Tabs } from 'antd';

const { TabPane } = Tabs;

const DefaultTable = (props: any) => {
  const { table, data } = props;
  return (
    <Tabs defaultActiveKey="1">
      {table.map((item: any) => (
        <TabPane tab={item.tab} key={item.key}>
          <Table
            className="default_table"
            columns={item.col}
            dataSource={data}
            pagination={{
              position: ['topRight'],
              current: 1,
              pageSize: 10,
            }}
          />
        </TabPane>
      ))}
    </Tabs>
  );
};

export default DefaultTable;
