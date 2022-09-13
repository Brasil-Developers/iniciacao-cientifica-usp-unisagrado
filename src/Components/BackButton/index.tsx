import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Space } from 'antd';

import { ReactComponent as BackIcon } from 'assets/icons/back.svg';

import './back-button-style.scss';

interface BackButtonProps {
  title: string;
  back_page_path: string;
}

const BackButton: React.FC<BackButtonProps> = ({ title, back_page_path }) => {
  const navigate = useNavigate();
  const handleClick = (routes:any) => navigate(routes);
  return (
    <>
      <button type="button" onClick={() => handleClick(back_page_path)}>
        <Space className="back_button">
          <BackIcon className="back_button_icon" />
          <span>
            {title}
          </span>
        </Space>
      </button>
    </>
  );
};

export default BackButton;
