//Screens 
import login from './login';
import home from './home';
import about from './about';
import evaluators from './evaluators';
import newEvaluator from './new-evaluator';
import tasks from './tasks';
import myAccount from './my-account';
import editEvaluator from './edit-evaluator';
import pendingEvaluator from './pending-evaluator';
import refusedEvaluator from './refused-evaluator';
import help from './help';
import redefinePassword from './redefine-password';
import requestRegistration from './request-registration';
import records from './records';
import addNewRecord from './add-new-record';

const Teste = () => {
  return (
    <>
      <h1>Teste</h1>
    </>
  );
};

const teste = {
  path: "/teste",
  component: <Teste />
};

const routes = [
  login,
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
  redefinePassword,
  requestRegistration,
  records,
  addNewRecord,
  teste,
];

export default routes;
