
import './index.scss';

export default function Newsletter() {

  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <div className="newsletter__title">
          <h1>Receba novidades da nossa área de produtos digitais.</h1>
        </div>
        <div className="newsletter__subscript">
          <input className="newsletter__input" placeholder="Digite seu e-mail" />
          <div className="newsletter__button">
            <button
              type="button">
              CADASTRAR
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}