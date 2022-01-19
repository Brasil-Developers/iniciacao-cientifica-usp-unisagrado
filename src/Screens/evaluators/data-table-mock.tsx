import { Button } from 'antd';
import { EditFilled } from '@ant-design/icons';
import EvaluatorImg from 'Image-general/evaluator_img.jpg';

const Perfil = (props: any) => {
  const { nome, perfilImg } = props;
  return (
    <div className="wrapper_perfil">
      <div className="wrapper_perfil-photo">
        <img src={perfilImg} alt="mulher" className="wrapper_perfil-photo__img" />
      </div>
      <div className="wrapper_perfil-name">
        <span>{nome}</span>
      </div>
    </div>
  );
};

const dataMock = [
  {
    key: 1,
    avaliadores: <Perfil nome="Nome do Avaliador" perfilImg={EvaluatorImg} />,
    email: 'avaliador@email.com',
    data_cad: '02/02/19',
    data_sol: '02/03/1900',
    master: <Perfil perfilImg={EvaluatorImg} />,
    avaliacoes: 35,
    tarefas: '10/15',
    area: 'Fonoaudiólogo',
    status: '',
    view: <Button type="primary">Visualizar</Button>,
    edit_button: <Button className="edit_button"><EditFilled className="edit_button-icon" /></Button>,
  },
  {
    key: 2,
    avaliadores: <Perfil nome="Nome do Avaliador" perfilImg={EvaluatorImg} />,
    email: 'avaliador@email.com',
    data_cad: '02/02/19',
    data_sol: '02/03/1900',
    master: <Perfil perfilImg={EvaluatorImg} />,
    avaliacoes: 35,
    tarefas: '10/15',
    area: 'Fonoaudiólogo',
    status: '',
    view: <Button type="primary">Visualizar</Button>,
    edit_button: <Button className="edit_button"><EditFilled className="edit_button-icon" /></Button>,
  },
];

export default dataMock;
