import PageContent from "Components/PageContent";
import Home from "Screens/home";
import About from "Screens/about";
import Evaluators from "Screens/evaluators";
import NewEvaluator from "Screens/new-evaluator";
import Tasks from "Screens/tasks";

const home = () => <PageContent><Home /></PageContent>
const about = () => <PageContent><About /></PageContent>
const evaluators = () => <PageContent><Evaluators /></PageContent>
const newEvaluator = () => <PageContent><NewEvaluator /></PageContent>
const tasks = () => <PageContent><Tasks /></PageContent>

const pages = {
  home,
  about, 
  evaluators,
  newEvaluator,
  tasks,
};

export default pages;
