
// import { Link } from 'react-router-dom';
import { useEffect } from 'react'
// import Orders from '../Orders';
import Header from '../../components/Header';
import Banner from '../../components/MainBanner';
import Products from '../../components/Products';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import Brand from '../../components/Brand/idenx';

export default function Dashboard() {
  document.title = 'Home'

  useEffect(() => {
    async function loadItens() {

    }
    loadItens();
  }, []);


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