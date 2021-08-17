
// import { Link } from 'react-router-dom';
import { useEffect } from 'react'
// import Orders from '../Orders';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/MainBanner';
import Newsletter from '../../components/Newsletter';

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
        <Banner/>
        <Newsletter/>
        <Footer />
    </div>
  );
}