import { Input } from 'antd';

import './default-page-header-style.scss';

const { Search } = Input;

const DefaultPageHeader = ({ headerData, type }:any) => {
  switch (type) {
    case 'search_header':
      return (
        <header className="default_page_header">
          <div>
            <h1>{headerData.title}</h1>
          </div>
          <Search allowClear placeholder={headerData.search} style={{ width: 524 }} size="large" />
          {headerData.buttons}
        </header>
      );
    default:
      return (
        <header className="default_page_header">
          <div className="default_page_header--default">
            <h1>{headerData.title}</h1>
          </div>
        </header>
      );
  }
};

export default DefaultPageHeader;
