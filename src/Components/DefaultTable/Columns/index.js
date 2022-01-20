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

export { ModelCol1, ModelCol2 };
