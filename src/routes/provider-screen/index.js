import PageContent from "Components/PageContent";
import Home from "Screens/home";
import About from "Screens/about";

const home = () => <PageContent><Home /></PageContent>
const about = () => <PageContent><About /></PageContent>

const pages = {
  home,
  about, 
};

export default pages;
