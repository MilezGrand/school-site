import React from "react";
import "./style.css";

function Main({ sectionRef, setPopupOpen }) {
  const onContactClick = () => {
    setPopupOpen(true);
  };

  return (
    <section className="main" ref={sectionRef}>
      <div className="container show" id="container__main">
        <div className="main__block">
          <div className="main__block_left">
            <h1>
              ОБЩЕОБРАЗОВАТЕЛЬНАЯ Частная <strong>англо-китайская</strong> школа
              в Екатеринбурге
            </h1>
            <p>
              Начальная школа 1-4 классы, с последующим обучением по 11 класс.
              Общеобразовательное учреждение с углубленным изучением математики,
              китайского и английского языка.
            </p>
            <div>
              <button onClick={onContactClick}>Заказать звонок</button>
              <span>
                Мы готовы проконсультировть
                <br />
                Вас прямо сейчас!
              </span>
            </div>
          </div>
          <div className="main__block_right">
            <img src="photo_1.png" alt="ученица" width="100%" height="100%" />
            <img src="deco2.svg" alt="узор" id="deco__main" />
          </div>
        </div>
        <div className="main__block">
          <div className="main__block__title">
            School for a happy life
            <div className="br" />
            Школа для счастливой жизни
            <div className="br" />
            學校是為了幸福的生活
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
