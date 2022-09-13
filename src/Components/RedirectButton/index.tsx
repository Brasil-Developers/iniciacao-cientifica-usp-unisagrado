import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { EditFilled, PlusOutlined } from '@ant-design/icons';
import './edit-button-style.scss';

export default function RedirectButton(props:any) {
  const { path, type, name } = props;
  const navigate = useNavigate();
  const handleClick = (routes:any) => navigate(routes);

  switch (type) {
    case 'edit':
      return (
        <Button
          className="edit_button"
          onClick={() => handleClick(path)}
        >
          <EditFilled />
        </Button>
      );
    case 'add':
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
    default:
      return (
        <Button
          type="primary"
          onClick={() => handleClick(path)}
        >
          {name}
        </Button>
      );
  }
}
