import { Input } from 'antd';

import './default-page-header-style.scss';

const { Search } = Input;

const DefaultPageHeader = ({ headerData }:any) => (
  <header className="default_page_header">
    <div>
      <h1>{headerData.title}</h1>
    </div>
    <Search allowClear placeholder={headerData.search} style={{ width: 524 }} size="large" />
    {headerData.buttons}
  </header>
);

export default DefaultPageHeader;
