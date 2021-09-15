
import './index.scss';
import { useRef } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Newsletter() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSendNewsletter() {
    if(inputRef.current) {
      if(inputRef.current.value !== ''){
        let email:any = inputRef.current.value as string
        toast.success(`Email cadastrado: ${email}`);
      }
      else{
        toast.error('Preencha com um email valido')
      }
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