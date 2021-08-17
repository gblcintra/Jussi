
import './index.scss'

export default function Title({ title, bodyClass, notHasH1 }) {
  document.title = title;
  if (document.body.classList[0]) {
    let classe = document.body.classList[0];
    document.body.classList.remove(classe.toString())
  }
  document.body.classList.add(`${bodyClass}`);

  if(notHasH1)return(<noscript>This page not have H1</noscript>);
  
  return (
      <h1 className="title has-text-centered">
        {title}
      </h1>
  );
}