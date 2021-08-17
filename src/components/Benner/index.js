
import './index.scss';
import React from 'react';
import Batedeira from '../../assets/batedeira.png';
import Geladeira from '../../assets/geladeira.png';
import Bebida from '../../assets/bebida.png';



export default function Banner() {

  return (
    <div className="banner">
      <div className="banner__context">
        <div className="banner__box">
          <div className="banner__text">
            <div className="content">
              <h1 className="banner__text">Criamos lojas que vendem mais.</h1>
              <h2>A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
                Precisa criar sua loja ou migrar de plataforma?
              </h2>
              <button className="banner__button">Veja nossas soluções</button>
            </div>
          </div>
        </div>
        <div className="banner__cards">
          <div className="cards__item-1">
            <div className="cards__item--content">
              <img src={Batedeira} alt="Batedeira" />
              <button variant="outline-danger">Comprar em 12x</button>
            </div>
          </div>
          <div className="cards__item-2">
            <div className="cards__item--content">
              <img src={Geladeira} alt="Geladeira" />
              <button variant="outline-danger">Mais Detalhes</button>
            </div>
          </div>
          <div className="cards__item-3">
            <div className="cards__item--content">
              <img src={Bebida} alt="Bebida" />
              <button variant="outline-danger">Adicionar à sacola</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}