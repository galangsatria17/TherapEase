import { createBookingConsultantTemplate } from '../templates/templates-creator';
import ConsultantSource from '../../../data/consultant-source';
import UrlParser from '../../routes/url-parser';

const BookingPage = {
  async render() {
    return `
        <div id="consultant-booking"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const consultant = await ConsultantSource.detailConsultant(url.id);
    const ConsultantContainer = document.querySelector('#consultant-booking');

    ConsultantContainer.innerHTML = createBookingConsultantTemplate(consultant);
  },
};

export default BookingPage;
