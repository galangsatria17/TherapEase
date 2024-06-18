import { createDetailConsultantTemplate } from '../templates/templates-creator';
import ConsultantSource from '../../../data/consultant-source';
import UrlParser from '../../routes/url-parser';

const DetailConsultantPage = {
  async render() {
    return `
      <div id="consultant-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const consultant = await ConsultantSource.detailConsultant(url.id);
    const ConsultantContainer = document.querySelector('#consultant-detail');

    ConsultantContainer.innerHTML = createDetailConsultantTemplate(consultant);
  },
};

export default DetailConsultantPage;
