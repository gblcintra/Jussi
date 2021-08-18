
import './index.scss';
import React from 'react';

export default function Contact() {

  return (
    <section className="contact">
      <div className="contact__content">
        <div className="contact__title">
          <h1>Essa Loja foi construída usando uma das nossas soluções da plataforma VTEX.
            Tenha a sua
          </h1>
        </div>
        <div className="contact__contact">
          <small>Entre em contato</small>
          <a href="mailto:comercial@jussi.com.br">
            comercial@jussi.com.br
          </a>
        </div>
      </div>
    </section>
  )
}