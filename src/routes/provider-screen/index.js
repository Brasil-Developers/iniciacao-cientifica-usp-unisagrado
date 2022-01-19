import PageContent from "Components/PageContent";
import Home from "Screens/home";
import About from "Screens/about";
import Evaluators from "Screens/evaluators";

const home = () => <PageContent><Home /></PageContent>
const about = () => <PageContent><About /></PageContent>
const evaluators = () => <PageContent><Evaluators /></PageContent>

const pages = {
  home,
  about, 
  evaluators,
};

export default pages;
