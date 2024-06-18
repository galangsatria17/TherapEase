import API_ENDPOINT from '../scripts/globals/api-endpoint';

class ConsultantSource {
  static async listConsultants() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailConsultant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async listArticles() {
    const response = await fetch(API_ENDPOINT.ARTICLES);
    const responseJson = await response.json();
    return responseJson;
  }
}

export default ConsultantSource;
