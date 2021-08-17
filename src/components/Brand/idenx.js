
import './index.scss';

import { FiArrowRight } from "react-icons/fi";

import LogoBrastemp from '../../assets/logo-brastemp.svg'
import LogoCompraCerta from '../../assets/logo-copracerta.svg'
import LogoConsul from '../../assets/logo-consul.svg'
import LogoTheBar from '../../assets/logo-thebar.svg'

export default function Brand() {

    return (
        <section className="brand">
            <div className="brand__content">
                <div className="brand__title">
                    <h3>Nossas principais lojas VTEX</h3>
                </div>
                <div className="brand__icon--desktop">
                    <FiArrowRight />
                </div>
                <div className="brand__icon--mobile">
                    <FiArrowRight />
                </div>
                <div className="brand__logo">
                    <div className="brand__image"><img src={LogoBrastemp} alt="Brastemp" /></div>
                </div>
                <div className="brand__logo">
                    <div className="brand__image"><img src={LogoCompraCerta} alt="Compra Certa" /></div>
                </div>
                <div className="brand__logo">
                    <div className="brand__image"><img src={LogoConsul} alt="Consul" /></div>
                </div>
                <div className="brand__logo">
                    <div className="brand__image"><img src={LogoTheBar} alt="The Bar" /></div>
                </div>
            </div>
        </section>
    )
}

