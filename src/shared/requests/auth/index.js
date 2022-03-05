import RequestsApi_ from '../../service/api';

class Auth {
  login() {
    const url = `/test`;
    return RequestsApi_.get(url, true);
  }
}

export default new Auth();