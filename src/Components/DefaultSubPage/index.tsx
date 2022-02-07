import { useHistory } from 'react-router-dom';
import {
  Space,
  Tabs,
} from 'antd';
import { ReactComponent as BackIcon } from 'assets/icons/back.svg';
import './default-subpage-style.scss';

const { TabPane } = Tabs;

export default function DefaultSubPage(props:any) {
  const { pageHeader, tabs } = props;
  const history = useHistory();
  const handleClick = (routes:any) => history.push(routes);
  return (
    <div className="page_content_wraper">
      <header>
        <button type="button" onClick={() => handleClick(pageHeader.back_page_path)}>
          <Space>
            <BackIcon className="back_icon" />
            <span>
              {pageHeader.back_page_title}
            </span>
          </Space>
        </button>
        <h1 className="subpage_title">{pageHeader.page_title}</h1>
      </header>
      <div>
        <Tabs defaultActiveKey="1">
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
