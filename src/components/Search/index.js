
import './index.scss'
import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import api from '../../services/api';

export default function Search() {
  const [imagemPexels, setImagemPexels] = useState([]);


  async function searchResult(query) {
    try {
      const response = await api.get(`?query=${query}&per_page=5`);
      setImagemPexels(response.data.photos);
    } catch (err) {
      // console.error(err);
      // alert('Imagem não encontrado')
    } finally {
      document.body.classList.add('active')
      document.getElementById('dropdown').classList.add('active');
      document.getElementById('result')?.classList.add('active')
    }
  }

  const handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      document.body.classList.remove('active')
      document.getElementById('result').classList.remove('active')
      document.getElementById('dropdown').classList.remove('active')
    } else {
      searchResult(query);
    }
  }

  const removeSearch = () => {
    document.getElementById('search__input').value = '';
    document.body.classList.remove('active')
    document.getElementById('result').classList.remove('active')
    document.getElementById('dropdown').classList.remove('active')
  }

  return (
    <div className="search">
      {/*Search Input*/}
      <label className="search__label" htmlFor="search-input">
        <input
          type="text"
          className="search__input"
          id="search__input"
          onChange={handleOnInputChange}
          placeholder="Buscar" />
        <FiSearch className="search__icon-header" />
      </label>

      {imagemPexels.length > 0 && (
        <>
          <div className="result" id="result">
            {imagemPexels.map((imagem) => (
              <a className="result__context" key={imagem.id} target="__blank" href={imagem.photographer_url}>
                <div className="result__item">
                  <img className="result__item--image" src={imagem.src.small} alt={imagem.photographer} />
                </div>
                <h6 className="result__item--autor">{imagem.photographer}</h6>
              </a>
            ))
            }
          </div>
          <div id="dropdown" onClick={removeSearch}></div>
        </>
      )
      }
    </div>
  )
}