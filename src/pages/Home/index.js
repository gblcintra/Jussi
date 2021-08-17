
// import { Link } from 'react-router-dom';
import { useEffect } from 'react'
// import Orders from '../Orders';

import Title from '../../components/Title';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Benner';

export default function Dashboard() {


  useEffect(() => {
    async function loadItens() {

    }
    loadItens();
  }, []);


  return (
    <div>
        <Header />
        <Title bodyClass="home" />
        <Banner/>

        <Footer />
    </div>
  );
}