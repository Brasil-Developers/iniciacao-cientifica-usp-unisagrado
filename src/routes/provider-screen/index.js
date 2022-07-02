import PageContent from "Components/PageContent";
import InitialPageContent from "Components/InitialPageContent";
import Home from "Screens/home";
import About from "Screens/about";
import Evaluators from "Screens/evaluators";
import NewEvaluator from "Screens/new-evaluator";
import Tasks from "Screens/tasks";
import MyAccount from "Screens/my-account";
import EditEvaluator from "Screens/edit-evaluator";
import PendingEvaluator from "Screens/pending-evaluator";
import RefusedEvaluator from "Screens/refused-evaluator";
import Help from "Screens/help";
import RedefinePassword from "Screens/redefine-password";
import RequestRegistration from "Screens/request-registration";
import Records from "Screens/records";

const home = () => <PageContent><Home /></PageContent>
const about = () => <PageContent><About /></PageContent>
const evaluators = () => <PageContent><Evaluators /></PageContent>
const newEvaluator = () => <PageContent><NewEvaluator /></PageContent>
const tasks = () => <PageContent><Tasks /></PageContent>
const myAccount = () => <PageContent><MyAccount /></PageContent>
const editEvaluator = () => <PageContent><EditEvaluator /></PageContent>
const pendingEvaluator = () => <PageContent><PendingEvaluator /></PageContent>
const refusedEvaluator = () => <PageContent><RefusedEvaluator /></PageContent>
const help = () => <PageContent><Help /></PageContent>
const requestRegistration = () => <InitialPageContent><RequestRegistration /></InitialPageContent>
const redefinePassword = () => <InitialPageContent><RedefinePassword /></InitialPageContent>
const records = () => <PageContent><Records /></PageContent>

const pages = {
  home,
  about, 
  evaluators,
  newEvaluator,
  tasks,
  myAccount,
  editEvaluator,
  pendingEvaluator,
  refusedEvaluator,
  help,
  requestRegistration,
  redefinePassword,
  records,
};

export default pages;
