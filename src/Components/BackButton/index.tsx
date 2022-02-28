import { useHistory } from 'react-router-dom';
import { Space } from 'antd';

import { ReactComponent as BackIcon } from 'assets/icons/back.svg';

import './back-button-style.scss';

const BackButton = (props:any) => {
  const { data } = props;
  const history = useHistory();
  const handleClick = (routes:any) => history.push(routes);
  return (
    <>
      <button type="button" onClick={() => handleClick(data.back_page_path)}>
        <Space className="back_button">
          <BackIcon className="back_button_icon" />
          <span>
            {data.title}
          </span>
        </Space>
      </button>
    </>
  );
};

export default BackButton;
