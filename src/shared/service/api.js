// import axios from 'axios';
// import { BASE_URL_API } from '../config/path-config-shared';

// // Mocks 
// import mock from '../../mocks';

// import CUSTOM_ERRORS from '../../constants/shared/erros';
// import { createServer } from 'miragejs';

// const api = axios.create({
//   baseURL: BASE_URL_API.toString(), // IP do servidor
//   // Temporário até
//   validateStatus: (status) => {
//     return status >= 200 && status < 300; // default
//   },
// });

// Alter defaults after instance has been created
// api.interceptors.response.use((response) => {
//     // Capturo o Erro para ser trabalhado
//     if (response.data.error) {
//       const err = CUSTOM_ERRORS[response.data.error](response);
//       return err || Promise.reject(JSON.stringify(response.data));
//     }
//     return response.data;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// class RequestsApi_ {
//   get(url, forceMock = false){
//     if (!forceMock) {
//       try {
//         return api.get(url);
//       }catch(err) {
//         createServer().get(`${BASE_URL_API}${url}`, { users: [{ id: 2, name: "Bob" }] });
//       }
//     }else {
//       createServer().get(`${BASE_URL_API}${url}`, mock[url]);
//       return api.get(url);
//     }
//   }
// }


// export default new RequestsApi_();
// export default api;

import axios from 'axios';
import { BASE_URL_API } from '../config/path-config-shared';
import CUSTOM_ERRORS from '../../constants/shared/erros';

const api = axios.create({
  baseURL: BASE_URL_API.toString(), // IP do servidor
  // Temporário até
  validateStatus: (status) => {
    return status >= 200 && status < 300; // default
  },
});

// Alter defaults after instance has been created
api.interceptors.response.use((response) => {
    // Capturo o Erro para ser trabalhado
    if (response.data.error) {
      const err = CUSTOM_ERRORS[response.data.error](response);
      return err || Promise.reject(JSON.stringify(response.data));
    }
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;