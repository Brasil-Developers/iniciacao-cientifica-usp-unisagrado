import { Tabs } from 'antd';

import './default-tabs-style.scss';

const { TabPane } = Tabs;

export default function DefaultTabs(props:any) {
  const { tabs, orientation } = props;
  return (
    <div className="page_content_wraper">
      <div>
        {orientation === 'vertical' ? (
          tabs.map((item:any) => (
            <Tabs>
              <TabPane tab={item.name} key={item.key}>
                {item.content}
              </TabPane>
            </Tabs>
          ))
        )
          : (
            <Tabs defaultActiveKey="1" className="tabs">
              {tabs.map((item:any) => (
                <TabPane tab={item.name} key={item.key}>
                  {item.content}
                </TabPane>
              ))}
            </Tabs>
          )}
      </div>
    </div>
  );
}
