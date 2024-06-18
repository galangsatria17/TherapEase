import HomePage from '../views/pages/home-page';
import ListConsultantPage from '../views/pages/list-consultant-page';
import DetailConsultantPage from '../views/pages/detail-consultant-page';
import BookingPage from '../views/pages/booking-page';
import CheckoutPage from '../views/pages/checkout-page';
import ArticlePage from '../views/pages/arcticle-page';
import AboutPage from '../views/pages/about-page';

const routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/list-consultant-page': ListConsultantPage,
  '/detail-consultant-page/:id': DetailConsultantPage,
  '/booking-page/:id': BookingPage,
  '/checkout-page/:id': CheckoutPage,
  '/article-page': ArticlePage,
  '/about-page': AboutPage,
};

export default routes;
