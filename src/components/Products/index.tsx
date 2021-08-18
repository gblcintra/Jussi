import { Product } from '../../interfaces'
import './index.scss'

export default function Products() {

  //array de produtos para automatizar na construção dos campos
  const products: Product[] = [
    {
      name: "Nome do Produto #1",
      descriptions: [
        { name: "Feature 1" },
        { name: "Feature 2" },
        { name: "Feature 3" }
      ],
      image: "P1"
    },
    {
      name: "Nome do Produto #2",
      descriptions: [
        { name: "Feature 1" },
        { name: "Feature 2" },
        { name: "Feature 3" }
      ],
      image: "P2"
    },
    {
      name: "Nome do Produto #3",
      descriptions: [
        { name: "Feature 1" },
        { name: "Feature 2" },
        { name: "Feature 3" }
      ],
      image: "P3"
    },
    {
      name: "Nome do Produto #4",
      descriptions: [
        { name: "Feature 1" },
        { name: "Feature 2" },
        { name: "Feature 3" }
      ],
      image: "P4"
    }
  ];

  return (
    <section className="products">
      <div className="products__title">
        <h1>Nossas soluções</h1>
      </div>
      <div className="products__context" >
        {products.map((product, index) => (
          <div className="item" key={index}>
            <div className="item__image">
              <p><span>{product.image}</span></p>
            </div>
            <h3 className="item__name">{product.name}</h3>
            <div className="item__description">
              <p className="item__description--title">Descrição do produto #{index}</p>
              <ul className="item__description--list">
                {product.descriptions.map((description, index) => (
                  <li className="item__description--text" key={index}>• {description.name}</li>
                ))}
              </ul>
            </div>
            <div className="item__button">
              <button>Ver solução</button>
            </div>
          </div>
        ))
        }
      </div>
    </section>
  )
}