
import './index.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import { FiShoppingCart } from "react-icons/fi";
import Search from '../Search';



export default function Header() {

  return (
    <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <a className="nav__logo" href="/">
            <img src={logo} alt="Logo" />
          </a>
          <div className="nav__hamburguer">
            <button type="button" role="button" className="navbar-burger menu-mobile-header" aria-label="menu" aria-expanded="false" data-target="navMenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>

          <div id="navMenu" className="nav__menu">
            <div className="nav__links">
              <div>
                <Link className="nav__links--link" to="/" >Nossas soluções</Link>
                <Link className="nav__links--link" to="/" >Conheça a Jüssi</Link>
              </div>
            </div>
            <div className="nav__search">
              <Search />
            </div>
            <div className="nav__cart">
              <Link className="nav__links--link" to="/">Login</Link>
              <Link className="nav__cart--button" to="/"><FiShoppingCart className="icon-header" /></Link>
            </div>
          </div>
        </nav>
    </header>
  )
}