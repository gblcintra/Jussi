
import Header from '../../components/Header';
import Banner from '../../components/MainBanner';
import Products from '../../components/Products';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import Brand from '../../components/Brand';

export default function Dashboard() {
  document.title = 'Home'
//Importaçãoo de componentes
  return (
    <div>
      <Header />
      <Banner />
      <Brand />
      <Products />
      <About />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}