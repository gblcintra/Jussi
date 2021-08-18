
import './index.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/logoJussiVectorGreen.svg';

import { FiShoppingCart, FiMenu } from "react-icons/fi";
import Search from './Search';



export default function Header() {

  return (
    <header className="header">
      <nav className="nav" role="navigation" aria-label="main navigation">
        <div className="nav__hamburguer">
          <button type="button" className="navbar-burger menu-mobile-header" data-target="navMenu">
            <FiMenu />
          </button>
        </div>

        <a className="nav__logo" href="/">
          <img src={logo} alt="Logo" />
        </a>


        <div id="navMenu" className="nav__menu">
          <div className="nav__links">
            <div>
              <Link className="nav__links--link" to="/" >Nossas soluções</Link>
              <Link className="nav__links--link" to="/" >Conheça a Jüssi</Link>
            </div>
          </div>
          <div className="nav__search nav__search--desktop">
            <Search />
          </div>
          <div className="nav__cart">
            <Link className="nav__links--link" to="/">Login</Link>
            <Link className="nav__cart--button" to="/"><FiShoppingCart className="icon-header" /></Link>
          </div>
        </div>
      </nav>
      <div className="nav__search--mobile">
        <Search />
      </div>
    </header>
  )
}