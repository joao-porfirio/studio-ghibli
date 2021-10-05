import React from 'react'
import banner from '../../assets/image/ilustracao.png';
import playIcon from '../../assets/image/i-play.png';
import Button from '../Button/Button';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
const Main = () => {
  return (
    <main className="main">
      <section className="main__container">
        <article className="main__conteudo">
          <h5 className="main__pre-title">HAYAO MIYAZAKI</h5>
          <h1 className="main__title">A VIAGEM <br/>DE CHIHIRO</h1>
          <p className="main__info">
            Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.
          </p>
          <div className="main__buttons">
            {/* <button className="main__button-now">
            <i className="fa fa-home"></i>assistir agora</button> */}
            <Button icon={playIcon}/>
            <button className="main__button-trailer">assista o trailer</button>
          </div>
        </article>
        <article className="main__banner">
          <img className="main__banner-img" src={banner} alt="" />
        </article>
      </section>
    </main>
  )
}

export default Main
