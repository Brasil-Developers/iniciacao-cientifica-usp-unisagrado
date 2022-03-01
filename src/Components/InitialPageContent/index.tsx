import TopBar from 'Components/TopBar';
import FooterInitial from 'Components/FooterInitial';

const InitialPageContent = ({ children }:any) => (
  <>
    <TopBar />
    {children}
    <FooterInitial />
  </>
);

export default InitialPageContent;
