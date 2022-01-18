import PageContent from "Components/PageContent";
import Home from "Screens/home";
import About from "Screens/about";
import RegisteredEvaluators from "Screens/registered-evaluators";

const home = () => <PageContent><Home /></PageContent>
const about = () => <PageContent><About /></PageContent>
const registeredEvaluators = () => <PageContent><RegisteredEvaluators /></PageContent>

const pages = {
  home,
  about, 
  registeredEvaluators,
};

export default pages;
