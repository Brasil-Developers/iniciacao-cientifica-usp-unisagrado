import { Table, Tabs, Spin } from 'antd';

import './default-table-style.scss';

const { TabPane } = Tabs;

const DefaultTable = ({ tableColumns, pageSize, totalItems, currentPage, onChange, onChangePage, isLoading = false }: any) => (
  <div className="wrapper_default_table">
    <Tabs defaultActiveKey="1" className="wrapper_default_table-tabs">
      {tableColumns.map((item: any) => (
        <TabPane tab={item.tab} key={item.key}>
          <Table
            onChange={onChange}
            columns={item.col}
            dataSource={item.data}
            pagination={{
              showSizeChanger: true,
              position: ['topRight'],
              defaultCurrent: currentPage,
              total: totalItems,
              onChange: onChangePage,
              pageSize: pageSize,
            }}
            loading={{ indicator: <div><Spin /></div>, spinning: isLoading }}
          />
        </TabPane>
      ))}
    </Tabs>
  </div>
);

export default DefaultTable;
