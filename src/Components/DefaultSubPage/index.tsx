import { useHistory } from 'react-router-dom';
import {
  Space,
  Row,
  Col,
} from 'antd';
import { ReactComponent as BackIcon } from 'assets/icons/back.svg';
import DefaultTabs from 'Components/DefaultTabs/index.tsx';
import './default-subpage-style.scss';

export default function DefaultSubPage(props:any) {
  const { pageHeader, tabs } = props;
  const history = useHistory();
  const handleClick = (routes:any) => history.push(routes);
  return (
    <div className="page_content_wraper">
      <header>
        <Row justify="space-between">
          <Col>
            <button type="button" onClick={() => handleClick(pageHeader.back_page_path)}>
              <Space>
                <BackIcon className="back_icon" />
                <span>
                  {pageHeader.back_page_title}
                </span>
              </Space>
            </button>
            <h1 className="subpage_title">{pageHeader.page_title}</h1>
          </Col>
          <Col>
            { pageHeader.extra === '' ? '' : pageHeader.extra }
          </Col>
        </Row>
      </header>
      <div>
        <DefaultTabs tabs={tabs} />
      </div>
    </div>
  );
}
