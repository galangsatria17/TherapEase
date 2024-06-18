const HomePage = {
  async render() {
    return `
    <!-- ======= Hero Section ======= -->
    <section class="hero">
        <div class="content">
            <div class="information">
                <h1 id="hero-text1">Temukan Ketenangan dengan Dukungan Profesional</h1>
                <h1 id="hero-text2">Kami Mendengarkan, Kami Peduli, Kami Membantu</h1>
            </div>
        </div>
        <div class="hero-banner" id="hero">
            <img
                src="https://img.freepik.com/free-photo/young-asia-female-professional-physician-doctor-using-digital-tablet-sharing-good-health-test-news-with-happy-male-patient-sit-couch-house_7861-2765.jpg?t=st=1717546540~exp=1717550140~hmac=75830282cae569ccec3bc97b90ba09b00fcf827f6c27f8b47ba5c2f3c5b3fc16&w=1060"
                        alt="Hero 1"
                        class="active"
                    />
            <img
                src="https://img.freepik.com/free-photo/woman-therapist-taking-notes-man-therapy-office-with-mask_23-2148759138.jpg?t=st=1717546697~exp=1717550297~hmac=e6d500de7e580fa032c1721e3f7a31fcaf3381a1bb6060f5dea9799c52afe72e&w=996"
                alt="Hero 2"
            />
            <img
                src="https://img.freepik.com/free-photo/people-working-elegant-cozy-office-space_23-2149548689.jpg?t=st=1717546797~exp=1717550397~hmac=11ca74f134f44a33ce0e90ed079e8a63163f529887df3804a36a40b11f93e0cc&w=996"
                alt="Hero 3"
            />
        </div>
    </section>


    <!-- ======= Hero Section ======= -->
    <section id="why-us" class="why-us">
        <div class="container">
            <div class="row">
                <div class="col-l-8 d-flex align-items-stretch">
                    <div class="icon-boxes flex flex-column justify-content-center">
                        <div class="row">
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="fa fa-comments" aria-hidden="true"></i>
                                    <h4>Akses ke Para Ahli Terpercaya</h4>
                                    <p>Website kami memberikan Anda akses mudah ke psikolog dan terapis profesional yang berpengalaman dan terpercaya.</p>
                                </div>
                            </div>
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="fa fa-clock" aria-hidden="true"></i>
                                    <h4>Kenyamanan dan Fleksibilitas</h4>
                                    <p>Konsultasi kesehatan mental bisa dilakukan kapan saja dan di mana saja. Anda tidak perlu lagi khawatir dengan jadwal yang padat atau lokasi yang jauh.</p>
                                </div>
                            </div>
                            <div class="col-xl-4 d-flex align-items-stretch">
                                <div class="icon-box mt-4 mt-xl-0">
                                    <i class="fa fa-lock" aria-hidden="true"></i>
                                    <h4>Privasi dan Keamanan Terjamin</h4>
                                    <p>Data dan informasi pribadi Anda dilindungi dengan teknologi keamanan terkini, sehingga Anda bisa merasa aman dan tenang dalam berbagi cerita dan mendapatkan bantuan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End .content-->
                </div>
            </div>
        </div>
    </section>
    <!-- End Why Us Section -->

    <!-- ======= About Section ======= -->
    <section id="about" class="about">
        <div class="container-fluid">
            <div class="main-text">
                <h3>Hai! Salam kenal dari kami, TherapEase!<br/>Tempat terbaik untuk berbagi cerita dengan aman dan nyaman.</h3>
                <p>TherapEase adalah platform konsultasi kesehatan mental online yang hadir untuk memberikanmu 
                    pengalaman konsultasi yang aman dan nyaman. Dengan visi untuk meningkatkan kualitas layanan 
                    kesehatan mental di Indonesia, kami berkomitmen pada profesionalisme, standar etika tertinggi, 
                    dan kenyamananmu di setiap sesi konsultasi.</p>
            <div/>
            <div class="row">
                <div
                    class="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                    <img src="./images/home-page/about/group.png" alt="Group Image">
                </div>
                <div
                    class="content col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fa fa-video-camera" aria-hidden="true"></i>
                        </div>
                        <h4 class="title">
                            <a href="">Dapat dilakukan melalui video call</a>
                        </h4>
                        <p class="description">Bangun koneksi terbaikmu bersama para konsultan supaya
                            mereka dapat membantumu menjadi lebih tenang!</p>
                    </div>
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        <h4 class="title">
                            <a href="">Atur jadwal</a>
                        </h4>
                        <p class="description">Buatlah jadwalmu dan sesuaikan dengan konsultan</p>
                    </div>
                    <div class="icon-box">
                        <div class="icon">
                            <i class="fa fa-wifi" aria-hidden="true"></i>
                        </div>
                        <h4 class="title">
                            <a href="">Pastikan koneksi bagus</a>
                        </h4>
                        <p class="description">Selagi sesi konsultasi online berlangsung pastikan koneksimu bagus</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End About Section -->

    <!-- ======= Services Section ======= -->
    <section id="services" class="services">
        <div class="container">
            <div class="section-title">
                <h1>Services</h1>
                <p>Apa masalah kamu?</p>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="icon-box">
                            <div class="icon">
                                <i class="fas fa-dizzy"></i>
                            </div>
                            <h4>
                                <a href="">Kecemasan dan Stres</a>
                            </h4>
                            <p>Mengatasi kecemasan berlebih dan manajemen stres untuk kehidupan yang lebih tenang</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="icon-box">
                            <div class="icon">
                                <i class="fas fa-heart-broken"></i>
                            </div>
                            <h4>
                                <a href=""> Depresi</a>
                            </h4>
                            <p>Mendapatkan dukungan dan strategi untuk mengatasi gejala depresi</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="icon-box">
                            <div class="icon">
                                <i class="fas fa-heart-broken"></i>
                            </div>
                            <h4>
                                <a href="">Masalah Hubungan</a>
                            </h4>
                            <p>Memperbaiki komunikasi dan mengatasi konflik dalam hubungan</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="icon-box">
                            <div class="icon">
                                <i class="fas fa-brain"></i>
                            </div>
                            <h4>
                                <a href="">Trauma dan PTSD</a>
                            </h4>
                            <p>Mengatasi efek trauma masa lalu dan gangguan stres pasca-trauma</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="icon-box">
                            <div class="icon">
                                <i class="fas fa-dizzy"></i>
                            </div>
                            <h4>
                                <a href="">Gangguan Tidur</a>
                            </h4>
                            <p>Meningkatkan kualitas tidur melalui teknik dan terapi khusus</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="icon-box">
                            <div class="icon">
                                <i class="fas fa-believe"></i>
                            </div>
                            <h4>
                                <a href="">Pengembangan Diri dan Kepercayaan Diri</a>
                            </h4>
                            <p>Meningkatkan rasa percaya diri dan mencapai potensi penuh</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </section>

    <section class="container-flow">
        <div class="section-flow">
            <h1>Alur Konsultasi</h1>
            <p>Bagaimana cara melakukan konsultasi ?</p>
        </div>
        <div class="box">
            <div class="box-item">
                <img src="./images/home-page/flow/layanan.png" alt="Image 4">
                <h2>Cari Layanan</h2>
            </div>
            <span>></span>
            <div class="box-item">
                <img src="./images/home-page/flow/konsultan.png" alt="Image 5">
                <h2>Pilih Konsultan</h2>
            </div>
            <span>></span>
            <div class="box-item">
                <img src="./images/home-page/flow/chat.png" alt="Image 7">
                <h2>Buat Jadwal</h2>
            </div>
            <span>></span>
            <div class="box-item">
                <img src="./images/home-page/flow/jadwal.png" alt="Image 6">
                <h2>Konsultasi</h2>
            </div>
        </div>
    </section>

    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    function animateBanner() {
      const bannerImages = document.querySelectorAll('#hero img');
      let currentIndex = 0;

      setInterval(() => {
        bannerImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % bannerImages.length;
        bannerImages[currentIndex].classList.add('active');
      }, 5000);
    }

    animateBanner();
  },
};

export default HomePage;
