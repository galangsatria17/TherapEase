import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}consultants`,
  DETAIL: (id) => `${CONFIG.BASE_URL}consultants/${id}`,

};

export default API_ENDPOINT;
