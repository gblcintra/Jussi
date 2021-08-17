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
          <img src={Wpp_Company} alt="Wpp Company" />
        </div>
        <div className="footer__right">

          <ul className="footer__social-media">
            <li>
              <a href="https://facebook.com">
                <img src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com">
                <img src={Instagram} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com">
                <img src={Linkedin} alt="Linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}