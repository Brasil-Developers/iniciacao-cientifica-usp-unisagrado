import RequestsApi_ from '../../service/api';

class Auth {
  login() {
    const url = `/account/signin`;
    return RequestsApi_.get(url, true);
  }
}

export default new Auth();