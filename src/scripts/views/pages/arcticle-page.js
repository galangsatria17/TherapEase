/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable indent */

const createCardArticleTemplate = (article) => `
    <div class="list-articles">
        <div class="information">
            <h3>${article.title}</h3>
            <p class="description">${article.description}</p>
            <div class="writer">
                <p>${article.createdAt}</p> |
                <p>${article.writer}</p>
            </div>
        </div>
    </div>
`;

const ArticlePage = {
  async render() {
    return `
        <section class="articles">
          <div id="article-card" class="container article-cards">
          
          </div>
        </section>
      `;
  },

  async afterRender() {
    // Replace the data fetching with a static list of articles
    const articles = [
      {
        id: 1,
        title: 'Pentingnya Menjaga Kesehatan Mental Remaja',
        description: 'Description for static article 1pentingnya kesehatan mental remaja. Gangguan mental pada remaja dapat memicu berbagai masalah serius seperti depresi dan bunuh diri. Kesehatan mental yang baik membantu remaja bangkit dari kekecewaan, merasa bahagia, memiliki pencapaian, serta aktif dalam kegiatan sosial. Orangtua berperan penting dengan memberikan cinta, dukungan, dan menghargai pendapat anak. Selain itu, menjaga kesehatan fisik melalui olahraga, pola makan sehat, dan tidur cukup juga berkontribusi terhadap kesehatan mental..',
        createdAt: '2024-06-02',
        writer: 'Haqqul Amal Jiddan',
      },
      {
        id: 2,
        title: 'Kesehatan mental remaja menekankan empat bentuk dukungan yang bisa diberikan orang tua',
        description: 'Dorong remaja untuk mengungkapkan perasaan: Ajak bicara tentang hari mereka dan dengarkan dengan empati. Luangkan waktu untuk hadir bagi anak: Buat rutinitas bersama dan beri mereka ruang pribadi.Selesaikan konflik dengan tenang: Dengarkan pandangan remaja dan jangan membahas masalah saat marah.Jaga kesehatan diri sendiri: Orang tua harus merawat kesehatan mental mereka sendiri agar bisa menjadi contoh bagi anak.',
        createdAt: '2024-06-03',
        writer: 'Chairal Octavyanz',
      },
      {
        id: 3,
        title: 'Mengenal Pentingnya Kesehatan Mental pada Remaja',
        description: 'Kesehatan RI menjelaskan bahwa kesehatan mental yang baik membantu remaja menyadari potensinya, mengatasi tekanan hidup, dan berkontribusi pada komunitas. Gejala gangguan mental pada remaja meliputi perubahan perilaku, perubahan mood, kesulitan berkonsentrasi, penurunan berat badan, menyakiti diri sendiri, dan masalah kesehatan fisik. Orang tua dapat mendukung dengan menunjukkan cinta, perhatian, dan membantu remaja berbicara tentang perasaan mereka serta mendapatkan bantuan profesional jika diperlukan.Description for static article 3.',
        createdAt: '2024-06-04',
        writer: 'Galang Satria Pratama Putra',
      },
      // Add more articles as needed
    ];

    const articlesContainer = document.querySelector('#article-card');
    articles.forEach((article) => {
      articlesContainer.innerHTML += createCardArticleTemplate(article);
    });
  },
};

export default ArticlePage;
