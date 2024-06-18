/* eslint-disable operator-linebreak */
import { createCheckoutConsultantTemplate } from '../templates/templates-creator';
import ConsultantSource from '../../../data/consultant-source';
import UrlParser from '../../routes/url-parser';

const CheckoutPage = {
  async render() {
    return `
        <div id="consultant-checkout"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const consultant = await ConsultantSource.detailConsultant(url.id);
    const ConsultantContainer = document.querySelector('#consultant-checkout');

    ConsultantContainer.innerHTML =
      createCheckoutConsultantTemplate(consultant);

    const continueButton = document.querySelector('.continue-button button');
    const paymentSuccessPopup = document.getElementById('paymentSuccessPopup');

    continueButton.addEventListener('click', () => {
      paymentSuccessPopup.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });

    const backButton = paymentSuccessPopup.querySelector('button');
    backButton.addEventListener('click', () => {
      paymentSuccessPopup.style.display = 'none';
      document.body.style.overflow = 'auto';
      window.location.href = 'http://localhost:9000/#/home-page';
    });
  },
};

export default CheckoutPage;
