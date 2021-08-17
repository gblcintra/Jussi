
import './index.scss';

import React from 'react';
import Whisky from '../../assets/Rectangle 1.png';
import Geladeira from '../../assets/Rectangle 2.png';
import Batedeira from '../../assets/Rectangle 3.png';

export default function Banner() {

  return (
    <div className="banner">
      <div className="banner__box">
        <div className="banner__context">
          <div className="box__text">
            <div className="box__content">
              <h1 className="box__content--text">Criamos lojas que vendem mais.</h1>
              <h2 className="box__content--subtext">A Jüssi é especialista na criação de lojas usando a plataforma VTEX.
                Precisa criar sua loja ou migrar de plataforma?
              </h2>
              <button className="box__content--button">Veja nossas soluções</button>
            </div>
          </div>
          <div className="banner__itens">
            <div className="item__item-1">
              <div className="item__content">
                <img src={Batedeira} alt="Batedeira" />
                <button >Comprar em 12x</button>
              </div>
            </div>
            <div className="item__item-2">
              <div className="item__content">
                <img src={Geladeira} alt="Geladeira" />
                <button >Mais Detalhes</button>
              </div>
            </div>
            <div className="item__item-3">
              <div className="item__content">
                <img src={Whisky} alt="Whisky" />
                <button>Adicionar à sacola</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}