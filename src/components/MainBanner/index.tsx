
import './index.scss';
import { BannerItem } from '../../interfaces'
import React from 'react';
import Whisky from '../../assets/Rectangle 1.png';
import Geladeira from '../../assets/Rectangle 2.png';
import Batedeira from '../../assets/Rectangle 3.png';

export default function Banner() {
  const banners: BannerItem[] = [
    {
      buttonText: 'Comprar em 12x',
      image: {
        alt: 'Batedeira',
        src: Batedeira
      }
    },
    {
      buttonText: 'Mais Detalhes',
      image: {
        alt: 'Geladeira',
        src: Geladeira
      }
    },
    {
      buttonText: 'Adicionar à sacola',
      image: {
        alt: 'Whisky',
        src: Whisky
      }
    }
  ];

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
            {
              banners.map((banner, index) => (
                <div className={`item__item-${index + 1}`} key={String(index)}>
                  <div className="item__content">
                    <img src={banner.image.src} alt={banner.image.alt} />
                    <button >{banner.buttonText}</button>
                  </div>
                </div>
              ))
            }
            {/* <div className="item__item-2">
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
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}