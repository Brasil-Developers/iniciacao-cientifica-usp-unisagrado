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
  resetPassword(email){
    const url = `/account/reset`;
    return api.post(url, {
      'login': email
    });
  }
}

export default new Auth();
