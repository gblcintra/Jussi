import './index.scss'
import React, { useState, useRef, useEffect } from 'react';

import { FiSearch } from "react-icons/fi";

import api from '../../../services/api';

import { Response, Photo } from '../../../interfaces';

export default function Search() {
  //armazenar o array das imagens pesquisadas
  const [imagemPexels, setImagemPexels] = useState<Photo[]>([]);
  const [ inputText, setInputText ]= useState('');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  async function searchResult(query: string) {
    try {
      //api para pegar as infos com limite de 5 itens
      const { data } = await api.get<Response>(`?query=${query}&per_page=5`);
      setImagemPexels(data.photos);
      
    } catch (err) {
      //catch retorna se a api não estiver funcionando 
      //ou algo não foi encontrado
      console.error(err);
      
    } finally {
      //se tudo tiver certo, add essas clases para melhorar a experiencia na pesquisa
      document.body.classList.add('active')
      dropdownRef.current?.classList.add('active');
      resultsRef.current?.classList.add('active')
    }
  }

  //reset nos campos de busca 
  const removeSearch = () => {
    setInputText('');
    document.body.classList.remove('active');
    resultsRef.current?.classList.remove('active');
    dropdownRef.current?.classList.remove('active');
  }

  //passa o dado do input quando alterado
  //fazendo com que n'ao precise renderizar tudo novamente
  useEffect(() => {
    if (!inputText) {
      removeSearch();
    } else {
      searchResult(inputText);
    }

  }, [inputText]);

  return (
    <div className="search">
      {/*Search Input*/}
      <label className="search__label" htmlFor="search-input">
        <input
          type="text"
          className="search__input"
          value={inputText}
          onChange={({ target: { value }}) => setInputText(value)}
          placeholder="Buscar" />
        <FiSearch className="search__icon-header" />
      </label>

      {imagemPexels.length > 0 && (
        <>
          <div className="result" ref={resultsRef}>
            <div className="result__box">
              {imagemPexels.map((imagem) => (
                <a className="result__context" key={imagem.id} target="__blank" href={imagem.photographer_url}>
                  <div className="result__item">
                    <img className="result__item--image" src={imagem.src.small} alt={imagem.photographer} />
                  </div>
                  <h6 className="result__item--autor"><small>Fotografo:</small><br/> {imagem.photographer}</h6>
                </a>
              ))
              }
            </div>
          </div>
          <div id="dropdown" onClick={removeSearch} ref={dropdownRef}></div>
        </>
      )
      }
    </div>
  )
}