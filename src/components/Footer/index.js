import './index.scss';

import Wpp_Company from '../../assets/wppcompany.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Linkedin from '../../assets/linkedin.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <img src={ Wpp_Company } alt="Wpp Company" />
        </div>
        <div className="footer__right">

          <ul className="footer__social-media">
            <li>
              <a href="https://www.facebook.com/agencia.jussi">
                <img src={ Facebook } alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jussi/">
                <img src={ Instagram } alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/agencia-jussi/">
                <img src={ Linkedin } alt="Linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}