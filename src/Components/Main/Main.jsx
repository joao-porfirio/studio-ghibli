import React from 'react'
import banner from '../../assets/image/ilustracao.png';
const Main = () => {
  return (
    <main className="main">
      <section className="main__container">
        <article className="main__conteudo">
          <h5>HAYAO MIYAZAKI</h5>
          <h1>A VIAGEM <br/>DE CHIHIRO</h1>
          <p>
            Chihiro chega a um mundo mágico dominado por <br/>uma bruxa. Aqueles que a desobedecem são<br/> transformados em animais.
          </p>

          <button>Assistir agora</button>
          <button>assista o trailer</button>
        </article>
        <article className="main__banner">
          <img src={banner} alt="" />
        </article>
      </section>
    </main>
  )
}

export default Main
