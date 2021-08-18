
import './index.scss' 

import Header from '../../components/Header';
import Footer from '../../components/Footer';
export default function Error() {
  //pagina não encontrada
  return (
    <>
      <Header />
      <div className="teste"><h1>Hum, parece que essa pagina nao existe!</h1></div>
      <Footer />
    </>
  );
}