import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import './edit-button-style.scss';

export default function EditButton({ path }:any) {
  const history = useHistory();
  const handleClick = (routes:any) => history.push(routes);
  return (
    <Button
      className="edit_button"
      onClick={() => handleClick(path)}
    >
      <EditFilled />
    </Button>
  );
}
