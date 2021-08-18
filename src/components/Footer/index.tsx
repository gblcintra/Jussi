import './index.scss';
import React from 'react';

import Wpp_Company from '../../assets/wppcompany.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin.svg';
import { ItensLink } from '../../interfaces'

export default function Footer() {

  const socials: ItensLink[] = [
    {
      src: Facebook,
      alt: "Facebook",
      url: "https://www.facebook.com/agencia.jussi"
    }, {
      src: Instagram,
      alt: "Instagram",
      url: "https://www.instagram.com/jussi/"
    }, {
      src: Linkedin,
      alt: "Linkedin",
      url: "https://www.linkedin.com/company/agencia-jussi/"
    },
  ]

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <img src={Wpp_Company} alt="Wpp Company" />
        </div>
        <div className="footer__right">

          <ul className="footer__social-media">
            {socials.map((social, index)=>(
              <li key={index}>
                <a href={social.url}>
                  <img src={social.src} alt={social.alt} />
                </a>
              </li>

            ))}
            
          </ul>
        </div>
      </div>
    </footer>
  );
}