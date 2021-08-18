
import './index.scss';

import React from 'react';

import { FiArrowRight, FiArrowDown } from "react-icons/fi";

import LogoBrastemp from '../../assets/logo-brastemp.svg'
import LogoCompraCerta from '../../assets/logo-copracerta.svg'
import LogoConsul from '../../assets/logo-consul.svg'
import LogoTheBar from '../../assets/logo-thebar.svg'

import { ItensLink } from '../../interfaces';

export default function Brand() {

    const brands: ItensLink[] = [
        {
            src: LogoBrastemp,
            alt: "Brastemp",
            url: "https://www.brastemp.com.br/"
        },
        {
            src: LogoCompraCerta,
            alt: "Compra Certa",
            url: "https://www.compracerta.com.br/"
        },
        {
            src: LogoConsul,
            alt: "Consul",
            url: "https://www.consul.com.br/"
        },
        {
            src: LogoTheBar,
            alt: "The Bar",
            url: "https://br.thebar.com/"
        },
    ];

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
                    <FiArrowDown />
                </div>
                
                {brands.map((brand, index) => (
                    <a key={ index } className="brand__logo" href={ brand.url } target="__blank">
                        <div className="brand__image"><img src={ brand.src } alt={ brand.alt } /></div>
                    </a>
                ))}
                
            </div>
        </section>
    )
}

