const AboutPage = {
  async render() {
    return `
      <section class="aboutPage">
          <div class="banner">
            <img src="https://img.freepik.com/free-photo/serious-asia-male-doctor-white-medical-uniform-using-clipboard-is-delivering-great-news-talk-discuss-results_7861-3121.jpg?t=st=1718632265~exp=1718635865~hmac=5b6cd828362a4bff9133ae494248fda12c0e4508843f258e63947b469516b079&w=1060" alt="About Banner">
            <div class="banner-title">
              <h2>Tentang Kami</h2>
            </div>
          </div>

          <div class="about-logo">
            <div class="about-text">
              <h2>TherapEase hadir untuk memberikan solusi untuk kalian para remaja</h2>
              <p> TherapEase adalah sebuah platform website yang didedikasikan untuk menyediakan layanan konsultasi kesehatan mental khusus untuk remaja. Platform ini dirancang untuk memberikan akses yang mudah, cepat, dan anonim kepada remaja yang membutuhkan dukungan psikologis. Melalui TherapEase, remaja dapat berkomunikasi dengan para profesional kesehatan mental, mengikuti sesi konseling, mengakses artikel edukatif, dan berpartisipasi dalam forum diskusi yang aman dan suportif.</p>
              <p> Proyek ini bertujuan untuk mengatasi stigma terhadap kesehatan mental, meningkatkan kesadaran, dan menyediakan dukungan yang esensial bagi kesejahteraan mental remaja.</p>
              <p> TherapEase hadir sebagai respons terhadap peningkatan kasus kesehatan mental di kalangan remaja yang seringkali tidak terdeteksi atau tidak ditangani dengan baik. Banyak remaja yang merasa ragu atau takut untuk mencari bantuan karena stigma atau ketidakpahaman mengenai pentingnya kesehatan mental.</p>
              <p> Kami memahami bahwa kesehatan mental sama pentingnya dengan kesehatan fisik, dan remaja memerlukan dukungan yang sesuai untuk mengatasi berbagai tekanan dan tantangan yang mereka hadapi di masa pertumbuhan.</p>
            </div>
            <img src="./images/home-page/about/about-logo.png">
          </div>

          <div class="misi-container">
            <h2>Misi Kami</h2>
            <div class="misi">
                <div class="card">
                  <div class="card-body">
                    <h3 class="main-point">Menyediakan Aksesibilitas</h3>
                    <p>Menyediakan layanan konsultasi kesehatan mental yang mudah diakses dan anonim bagi semua remaja tanpa memandang latar belakang sosial ekonomi.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h3 class="main-point">Edukasi dan Kesadaran</h3>
                    <p>Meningkatkan kesadaran tentang pentingnya kesehatan mental melalui artikel, seminar online, dan materi edukatif yang disesuaikan untuk remaja.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h3 class="main-point">Dukungan Profesional</h3>
                    <p>Memberikan dukungan langsung dari profesional kesehatan mental berlisensi untuk membantu remaja mengatasi masalah mereka dengan cara yang efektif dan aman.</p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h3 class="main-point">Komunitas dan Keterlibatan</h3>
                    <p>Membangun komunitas yang suportif di mana remaja dapat berbagi pengalaman, bertukar informasi, dan mendapatkan dukungan dari teman sebaya dalam lingkungan yang aman dan positif.</p>
                  </div>
                </div>
            </div>

            <section class="ProfilTeam">
              <div class="container">
                <h1>Meet The Team</h1>
                <div class="team-profile">
                  <div class="team-member">
                      <img src="./images/home-page/team/HaqqulAmal.jpg" alt="Member 1">
                      <div class="identity">
                        <a href="">Haqqul Amal Jiddan</a>
                        <p>Full Stack Developer</p>
                      </div>
                  </div>
                  <div class="team-member">
                      <img src="./images/home-page/team/GalangSatria.jpg" alt="Member 2">
                      <div class="identity">
                        <a href="">Galang Satria Pratama</a>
                        <p>Full Stack Developer</p>
                      </div>
                  </div>
                  <div class="team-member">
                      <img src="./images/home-page/team/ChairalOctavyanz.jpg" alt="Member 3">
                      <div class="identity">
                        <a href="https://www.linkedin.com/in/chairal-octavyanz-224bb6280/">Chairal Octavyanz</a>
                        <p>Full Stack Developer</p>
                      </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          

          <section class="supportby">
            <h1 class="title">Supported By:</h1>
            <div class="image">
                <img src="./images/home-page/partner/mbkm.png" alt="Gambar 1" class="kampus-merdeka-img">
                <img src="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1973487/1973487-1563248797755-7e69686001d3e.jpg" alt="Dicoding" class="dicoding-img">
            </div>
          </section>
          
      </section>
        `;
  },

  async afterRender() {
    // After Render Here
  },
};

export default AboutPage;
