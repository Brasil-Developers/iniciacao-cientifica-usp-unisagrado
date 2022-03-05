/**
 * 1 = NOT FOUND;
 * 2 = PERMISSION;
 * 3 = FIELD EMPTY;
 * 4 = FIELD VALUE INVALID;
 * 5 = INVALID ACTION;
 */
 const CUSTOM_ERRORS = {
  1: (response) => {
    response.data.error = 'Não encontrado';
    return Promise.resolve(response.data);
  },
  2: (response) => {
    response.data.error = `Acesso não autorizado`;
  },
  3: (response) => {
    response.data.error = `Existem campos em branco`;
  },
  4: (response) => {
    response.data.error = 'Existem campos com dados inválidos';
  },
  5: (response) => {
    response.data.error = 'Ação inválida';
  },
  6: (response) => {
    response.data.error = 'Acesso não autorizado';

    return Promise.reject(JSON.stringify(response.data));
  },
};

export default CUSTOM_ERRORS;