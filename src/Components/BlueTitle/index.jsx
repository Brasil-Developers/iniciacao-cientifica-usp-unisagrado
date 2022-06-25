import {
  Typography,
} from 'antd';

import './blue-title-style.scss';

const { Text } = Typography;

const BlueTitle = (props) => {
  const { title, extra } = props;
  return (
    <>
      <Text>
        <span className="blue_title">
          {title}
        </span>
        <Text type="secondary">
          {extra && extra}
        </Text>
      </Text>
    </>
  );
};

export default BlueTitle;
