import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const AddButton = (props:any) => {
  const { name, path } = props;
  const history = useHistory();
  const handleClick = (routes:any) => history.push(routes);
  return (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      onClick={() => handleClick(path)}
      size="large"
    >
      {name}
    </Button>
  );
};

export default AddButton;
