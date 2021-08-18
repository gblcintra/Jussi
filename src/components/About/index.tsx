
import './index.scss'
import React from 'react';

import Escritorio from '../../assets/escritorio-jussi.png';

export default function Products() {

  return (
    <section className="about">
      <div className="about__content">
        <div className="about__description">
          <div className="description__title">
            <h2>Olá, somos a Jüssi</h2>
          </div>
          <div className="description__text">
            <p>A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.</p>
          </div>
          <div className="description__button">
            <button>Conheça a Jüssi</button>
          </div>
        </div>
      </div>
      <div className="about__image" >
        <img src={ Escritorio } alt="Escritório" />
      </div>
    </section>
  )
}