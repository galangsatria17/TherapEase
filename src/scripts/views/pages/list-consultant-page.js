/* eslint-disable operator-linebreak */
import ConsultantSource from '../../../data/consultant-source';
import { createCardConsultantsTemplate } from '../templates/templates-creator';

const ListConsultantPage = {
  async render() {
    return `
        <section class="consultants">
            <div class="main-title">
                <label for="category-consultant">Dokter Psikologi</label>
                <select name="category-consultant">
                    <option>Pilih Berdasarkan Kategori</option>
                    <option>Psikolog</option>
                    <option>Kesehatan</option>
                    <option>Mental</option>
                </select>
            </div>
            <div id="consultant-card" class="list-consultant"></div>
        </section>
      `;
  },

  async afterRender() {
    // After Render Here
    const consultants = await ConsultantSource.listConsultants();
    console.log(consultants);
    const consultantsContainer = document.querySelector('#consultant-card');
    consultants.forEach((consultant) => {
      consultantsContainer.innerHTML +=
        createCardConsultantsTemplate(consultant);
    });
  },
};

export default ListConsultantPage;
