import { Tabs } from 'antd';

import './default-tabs-style.scss';

const { TabPane } = Tabs;

export default function DefaultTabs(props:any) {
  const { tabs } = props;
  return (
    <div className="page_content_wraper">
      <div>
        <Tabs defaultActiveKey="1" className="tabs">
          {tabs.map((item:any) => (
            <TabPane tab={item.name} key={item.key}>
              {item.content}
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
