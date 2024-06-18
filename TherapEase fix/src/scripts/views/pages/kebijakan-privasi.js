const KebijakanPrivasi = {
  async render() {
    return `
        <section class="KebijakanPrivasi">
          <div class="container">
              <div class="PrivasiTeks">
                  <h1>Kebijakan Privasi</h1>
                  <p>Kebijakan privasi ini (“Kebijakan Privasi”) mendeskripsikan mengenai bagaimana YoungMinds mengumpulkan, menangani, dan mengamankan informasi pribadi yang Anda berikan melalui Layanan kami. Dengan menggunakan Layanan kami, Anda telah menyetujui untuk terikat dengan ketentuan-ketentuan dalam Kebijakan Privasi ini. Kebijakan Privasi ini merupakan bagian dari Syarat & Ketentuan kami. Istilah-istilah apapun yang didefinisikan dan digunakan dalam Syarat & Ketentuan kami diadaptasikan ke dalam Kebijakan Privasi ini.</p>
              </div>
              <div class="PrivasiIsi1">
                  <h2>1. Penyedia Layanan</h2>
                  <p>Kami dapat mengikutsertakan perusahaan-perusahaan dan individu-individu pihak ketiga untuk memfasilitasi Layanan kami (“Penyedia Layanan”), untuk menyediakan Layanan atas nama kami, untuk melakukan pelayanan-pelayanan yang berhubungan dengan Layanan atau untuk membantu kami dalam menganalisis bagaimana Layanan kami digunakan.</p>
                  <p>Berhubungan dengan perjanjian kami dengan Penyedia Layanan tersebut, platform kami mungkin memuat tautan-tautan ke situs-situs lain yang dioperasikan oleh pihak-pihak ketiga, termasuk, tetapi tidak terbatas pada, situs-situs pihak ketiga yang mungkin memperlihatkan merek dagang YoungMinds. Kami tidak memiliki kendali atas situs-situs web apapun yang dimiliki oleh pihak ketiga. Situs-situs web tersebut mungkin memasang cookie mereka sendiri atau arsip-arsip lain pada komputer Anda, mengumpulkan data atau mencari informasi pribadi yang dapat diidentifikasi dari Anda. Kami menganjurkan Anda untuk membaca kebijakan privasi dari situs-situs web lainnya yang Anda kunjungi melalui platform kami.</p>
              </div>
              <div class="PrivasiIsi2">
                  <h2>2. Perubahan pada Kebijakan</h2>
                  <p><Kami akan memberitahukan Anda melalui surel dan/atau pemberitahuan penting pada Layanan kami, sebelum penggantian mulai diberlakukan dan “tanggal berlaku” di bagian atas dari Kebijakan Privasi ini diperbaharui.
                  Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk melihat ada tidaknya perubahan-perubahan. Perubahan-perubahan pada Kebijakan Privasi ini mulai berlaku saat perubahan-perubahan tersebut dipasang di laman ini. Melanjutkan penggunaan dari Layanan kami akan dianggap sebagai persetujuan dan penerimaan Anda akan perubahan-perubahan tersebut./p>
              </div>
              <div class="PrivasiIsi3">
                  <h2>3. Kontak Kami</h2>
                  <p>Hukum-hukum privasi Indonesia memberikan setiap individu hak untuk mengakses, mengubah, atau menghapus informasi pribadi mereka. Jika Anda ingin mengganti atau menghapus informasi Anda yang kami simpan, harap hubungi kami seperti yang ditampilkan di bawah.
                  Kami akan memberitahukan pada Anda dalam tulisan jika terdapat kegagalan dalam menjaga kerahasiaan informasi pribadi Anda dalam sistem elektronik kami, seperti yang diwajibkan oleh hukum-hukum yang diterapkan.</p>
              </div>
          /div>
        </div>
      </section>
              `;
  },
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
export default KebijakanPrivasi;
