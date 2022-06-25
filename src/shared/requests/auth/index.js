import api from '../../service/api';

class Auth {
  login(values) {
    const url = `/account/signin`;
    return api.post(url, values);
  }
  register(values) {
    const url = `/account/signup`;
    return api.post(url, values);
  }
}

export default new Auth();
