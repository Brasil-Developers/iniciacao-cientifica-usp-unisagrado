const ModelCol1 = [
  {
    title: 'Avaliadores',
    dataIndex: 'avaliadores',
    width: '30%',
    sorter: (a, b) => a.avaliadores - b.avaliadores,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: true,
    width: '',
  },
  {
    title: 'Data Cad.',
    dataIndex: 'data_cad',
    sorter: (a, b) => a.data_cad - b.data_cad,
  },
  {
    title: 'Master',
    dataIndex: 'master',
    sorter: true,
  },
  {
    title: 'Avaliações',
    dataIndex: 'avaliacoes',
    sorter: (a, b) => a.avaliacoes - b.avaliacoes,
  },
  {
    title: 'Tarefas',
    dataIndex: 'tarefas',
    sorter: true,
  },
  {
    title: 'Área',
    dataIndex: 'area',
    sorter: true,
  },
  {
    title: '',
    dataIndex: 'edit_button',
    sorter: false,
  },
];

const ModelCol2 = [
  {
    title: 'Avaliadores',
    dataIndex: 'avaliadores',
    sorter: true,
    width: '50%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: true,
  },
  {
    title: 'Data Sol.',
    dataIndex: 'data_sol',
    sorter: true,
  },
  {
    title: 'Master',
    dataIndex: 'master',
    sorter: true,
  },
  {
    title: 'Área',
    dataIndex: 'area',
    sorter: true,
  },
  {
    title: '',
    dataIndex: 'view',
  },
];

const ModelCol3 = [
  {
    title: 'Tarefas',
    dataIndex: 'tarefa',
    width: '50%',
    sorter: (a, b) => a.tarefas - b.tarefas,
  },
  {
    title: 'Resp.',
    dataIndex: 'responsavel',
    sorter: (a, b) => a.responsavel - b.responsavel,
  },
  {
    title: 'Master',
    dataIndex: 'master',
    sorter: (a, b) => a.master - b.master,
  },
  {
    title: 'Data',
    dataIndex: 'data',
    sorter: (a, b) => a.data - b.data,
  },
  {
    title: 'Itens',
    dataIndex: 'itens',
    sorter: (a, b) => a.itens - b.itens,
  },
  {
    title: 'Entrega',
    dataIndex: 'entrega',
    sorter: (a, b) => a.entrega - b.entrega,
  },
  {
    title: '',
    dataIndex: 'edit_button',
    sorter: false,
  },
];

const ModelCol4 = [
  {
    title: 'No da Gravação',
    dataIndex: 'record_number',
    width: '60%',
    sorter: (a, b) => a.tarefas - b.tarefas,
  },
  {
    title: 'Data',
    dataIndex: 'record_date',
    width: '8%',
    sorter: (a, b) => a.tarefas - b.tarefas,
  },
  {
    title: 'Falante',
    dataIndex: 'speaker',
    width: '8%',
    sorter: (a, b) => a.tarefas - b.tarefas,
  },
  {
    title: 'Local',
    dataIndex: 'local',
    width: '8%',
    sorter: (a, b) => a.tarefas - b.tarefas,
  },
  {
    title: '',
    dataIndex: 'record_analyze',
    width: '',
    sorter: false,
  },
  {
    title: '',
    dataIndex: 'record_edit',
    width: '',
    sorter: false,
  },
];

export {
  ModelCol1,
  ModelCol2,
  ModelCol3,
  ModelCol4
};
