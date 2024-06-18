/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable indent */

const createCardConsultantsTemplate = (consultant) => `
    <div class="card-consultant">
                    <div class="content-card">
                        <div class="profile">
                            <img tabindex="0" class="card-item_poster lazyload" src="${consultant.avatar}" alt="${consultant.name}">
                        </div>
                        <div class="description">
                            <h5>${consultant.name}</h5>
                            <p>${consultant.specialist}</p>
                            <b class="practice">${consultant.practicePlace}</b>
                            <div class="rate-experience">
                                <div class="rates">
                                    <span>⭐</span>
                                    <b>${consultant.star}</b>
                                </div>
                                <div class="experience">
                                    <i class="fa-solid fa-business-time"></i>
                                    <b>${consultant.experience} tahun</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="action-card">
                        <h5>${consultant.price}</h5>
                        <div class="button">
                            <a href="/#/detail-consultant-page/${consultant.id}" class="detail">Detail</a>
                            <a href="/#/booking-page/${consultant.id}" class="schedule">Schedule</a>
                        </div>
                    </div>
                </div>
`;

const createDetailConsultantTemplate = (consultant) => `
    <section class="detail-consultant">
        <div class="main-title">
          <label for="category-consultant">Dokter Psikologi</label>
        </div>
        <div class="container detail-consultant">
          <div class="detail-main">
            <div class="detail-card cards">
              <div class="detail-profile">
                <img src="${consultant.avatar}">
                <div class="information-detail">
                  <h5>${consultant.name}</h5>
                  <p>${consultant.specialist}</p>
                  <span>${consultant.price}</span>
                </div>
              </div>
              <div class="notice">
                <div class="icon-notice">
                  <i class="fa-solid fa-circle-exclamation"></i>
                </div>
                <p>Dokter belum bisa melayani konsultasi. Silahkan pilih jadwal lain untuk chat dengan dokter</p>
              </div>
            </div>
            <div class="cards card-information">
              <h5>Tentang Konsultan</h5>
              <table>
                <tr>
                  <th>No STR.</th>
                  <td>${consultant.noSTR}</td>
                </tr>
                <tr>
                  <th>Alumni</th>
                  <td>${consultant.alumni}</td>
                </tr>
                <tr>
                  <th>Tempat Praktik</th>
                  <td>${consultant.practicePlace}</td>
                </tr>
                <tr>
                  <th>Spesialisasi</th>
                  <td>
                    <p>Dra. Elly Yuliandari, M.Si, Psikolog merupakan seorang psikolog. Beliau merupakan lulusan Universitas Gadjah Mada, 1988..</p>
                    <p>Dra. Elly Yuliandari, M.Si, Psikolog fokus menangani tumbuh kembang anak dan remaja. Beliau juga berpengalaman dalam dan mendampingi orangtua berkaitan dengan parenting skill.</p>
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div class="navigation-side">
            <div class="experience-rates cards">
              <div class="object">
                <i class="fa-solid fa-business-time"></i>
                <b>Pengalaman</b>
                <p>${consultant.experience} Tahun</p>
              </div>
              <div class="object">
                <i class="fa-solid fa-star"></i>
                <b>Rating <span>(Ulasan)</span></b>
                <p>${consultant.star}<span>(7)</span></p>
              </div>
            </div>
            <div class="schedule-side cards">
              <h5>Jadwal Terjadwal</h5>
              <div class="list-schedule">
              ${consultant.readySchedule
                .map(
                  (ready) => `
              <div class="schedule">
                  <p>${ready.date}</p>
                  <p>${ready.time}</p>
                </div>`
                )
                .join('')}
                <div class="schedule">
                  <p>Sabtu</p>
                  <p>09.00 - 09.30 A.M. WIB</p>
                </div>
              </div>
            </div>
            <a href="/#/booking-page/${
              consultant.id
            }" class="cards button-schedule">Buat Jadwal</a>
          </div>
        </div>
      </section>
`;

const createBookingConsultantTemplate = (consultant) => `
    <h1 class="lable-booking"></h1>
    <section class="booking-container">
      <div class="booking">
        <h2>Pilih Jadwal konsultasi</h2>
        <div class="schedule-container">
          ${consultant.readySchedule.map((ready) => `
          <button class="schedule-box" id="btn-schedule">
            <p>${ready.date}</p>
            <p>${ready.time}</p>
          </button> `).join('')}
        </div>
      </div>
      
      <div class="selected-profile">
        <div class="container-profile">
          <h1>Profile Konsultan</h1>
          <img src="${consultant.avatar}" alt="profile konselor" />
          <h1>${consultant.name}</h1>
          <h2>${consultant.specialist}</h2>
          <h2 class="practicePlace">${consultant.practicePlace}</h2>
          <div class="rating-star-experience">
            <div class="rates">
                <span>⭐</span>
                <b>${consultant.star}</b>
            </div>
            <div class="experience">
                <i class="fa-solid fa-business-time"></i>
                <b>${consultant.experience} tahun</b>
            </div>
          </div>
          <div class="price">${consultant.price}</div>
        </div>
        
        <div class="container-action button">
          <a href="/#/detail-consultant-page/${consultant.id}">Detail</a>
          <a href="/#/checkout-page/${consultant.id}">Lanjutkan</a>
        </div>
      </div>
    </section>
`;

const createCheckoutConsultantTemplate = (consultant) => `
<div class="grid-container">
            <div class="countdown-container">
                <span>
                    Batas waktu pembayaran! 00:01:59
                </span>
            </div>

            <div class="checkout-label">
                <h1></h1>
            </div>

            <div class="transaction-container">
                <div class="detail-container">
                    <img src="${consultant.avatar}" alt="${consultant.name}" />    
                    <h1>${consultant.name}</h1>
                    <p class="specialist">${consultant.specialist}</p>
                    <div class="rating">
                      <div class="rates">
                          <span>⭐</span>
                          <b>${consultant.star}</b>
                      </div>
                      <div class="experience">
                          <i class="fa-solid fa-business-time"></i>
                          <b>${consultant.experience} tahun</b>
                      </div>
                    </div>
                    <p class="price">${consultant.price}</p>
                    <div class="white button">
                        <a href="/#/detail-consultant-page/${consultant.id}"><button>Detail</button></a>
                    </div>
                </div>

                <div class="payment-label">
                    <h1>Pilihan Pembayaran</h1>
                </div>

                <div class="payment-container">
                    <div class="e-wallet">
                        <form action="">
                            <p class="label payment">E-Wallet</p>
                            <input type="radio" id="gopay" name="fav_language" value="Gopay">
                            <label for="html">Gopay</label>
                            <img src="/images/checkout-page/icon/GOPAYicon.png" alt="gopay" />
                            
                            <div class="line-solid-1"></div>
                            <input type="radio" id="linkaja" name="fav_language" value="LinkAja">
                            <label for="css">LinkAja</label>
                            <img src="/images/checkout-page/icon/LINKAJAicon.png" alt="linkaja" />
                            
                            <div class="line-solid-1"></div>
                            <input type="radio" id="ovo" name="fav_language" value="Ovo">
                            <label for="javascript">Ovo</label>
                            <img src="/images/checkout-page/icon/OVOicon.png" alt="ovo" />
                            
                            <div class="line-solid-1"></div>
                            <input type="radio" id="dana" name="fav_language" value="Dana">
                            <label for="javascript">Dana</label>
                            <img src="/images/checkout-page/icon/DANAicon.png" alt="dana" />
                        </form>
                    </div>

                    <div class="virtual-account">
                        <form action="">
                            <p class="label payment">Virtual Account Transfer</p>
                            <input type="radio" id="bri" name="fav_language" value="BRI">
                            <label for="html">BRI</label>
                            <img src="/images/checkout-page/icon/BRIicon.png" alt="bri" />
                            
                            <div class="line-solid-1"></div>
                            <input type="radio" id="bca" name="fav_language" value="BCA">
                            <label for="css">BCA</label>
                            <img src="/images/checkout-page/icon/BCAicon.png" alt="bca" />
                            
                            <div class="line-solid-1"></div>
                            <input type="radio" id="bni" name="fav_language" value="BNI">
                            <label for="javascript">BNI</label>
                            <img src="/images/checkout-page/icon/BNIicon.png" alt="bni" />
                            
                            <div class="line-solid-1"></div>
                            <input type="radio" id="cimb" name="fav_language" value="CIMB">
                            <label for="javascript">CIMB</label>
                            <img src="/images/checkout-page/icon/CIMBicon.png" alt="cimb" />
                        </form>
                    </div>

                    <div class="credit-card">
                        <form action="">
                            <p class="label payment">Kartu Kredit</p>
                            <input type="radio" id="kreditcard" name="fav_language" value="KreditCard">
                            <label for="javascript">KreditCard</label>
                            <img src="/images/checkout-page/icon/CREDITCARDicon.png" alt="creditcard" />
                        </form>
                    </div>

                    
                </div>
                <div class="reciept-container">
                    <form>
                        <input type="text" id="discount" name="discount" placeholder="Masukan Kode">
                    </form>
                    <div class="line-solid-2"></div>    
                    <h1>Ringkasan</h1>
                    <div class="line-solid-1"></div>
                    <div class="price-count-reciept">
                      <div class="price-count-column">
                        <p class="left">Total Harga Produk</p>
                        <p class="left">Diskon</p>
                        
                      </div>
                      <div class="price-count-column">
                        <p class="right">${consultant.price}</p>
                        <p class="right">-Rp10.000</p>
                      </div>  
                        
                    </div>
                    <div class="line dash"></div>
                    <div class="price-sum">
                        <p>Total Tagihan</p>
                        <p>${consultant.price}</p>
                    </div>
                    <div class="terms-conditions">
                        <p>Dengan melanjutkan transaksi ini, maka saya 
                        telah menyetujui <span>Syarat & Ketentuan YoungMinds</span></p>
                    </div>
                    <div class="continue-button">
                        <button>Lanjutkan</button>
                    </div>
                    
                    <div id="paymentSuccessPopup" class="popup">
                    <div class="popup-content">
                      <h3>Pembayaran Berhasil!</h3>
                      <p>Terima kasih atas pembayaran Anda.</p>
                      <div class="price-details">
                        <div class="price-count">
                          <p class="left">Total Harga Produk</p>
                          <p class="right">${consultant.price}</p>
                          <p class="left">Diskon</p>
                          <p class="right">-Rp10.000</p>
                        </div>
                      </div>
                      <button class="close-button">Kembali ke Halaman Utama</button>
                    </div>
                  </div>
                  
                </div>
            </div>
        </div>
`;

export {
  createCardConsultantsTemplate,
  createDetailConsultantTemplate,
  createBookingConsultantTemplate,
  createCheckoutConsultantTemplate,
};
