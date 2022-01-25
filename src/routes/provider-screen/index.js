import PageContent from "Components/PageContent";
import Home from "Screens/home";
import About from "Screens/about";
import Evaluators from "Screens/evaluators";
import NewEvaluator from "Screens/new-evaluator";

const home = () => <PageContent><Home /></PageContent>
const about = () => <PageContent><About /></PageContent>
const evaluators = () => <PageContent><Evaluators /></PageContent>
const newEvaluator = () => <PageContent><NewEvaluator /></PageContent>

const pages = {
  home,
  about, 
  evaluators,
  newEvaluator,
};

export default pages;
