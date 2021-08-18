
import { useRef } from 'react';
import './index.scss';

export default function Newsletter() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSendNewsletter() {
    if(inputRef.current) {
      console.log('valor do input', inputRef.current.value);
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <div className="newsletter__title">
          <h1>Receba novidades da nossa área de produtos digitais.</h1>
        </div>
        <div className="newsletter__subscript">
          <input className="newsletter__input" placeholder="Digite seu e-mail" ref={inputRef}/>
          <div className="newsletter__button">
            <button
              onClick={handleSendNewsletter}
              type="button">
              CADASTRAR
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}