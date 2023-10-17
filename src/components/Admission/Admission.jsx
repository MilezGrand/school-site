import React from "react";
import "./style.css";

const Admission = ({ sectionRef }) => {
  return (
    <section className="admission" ref={sectionRef}>
      <div className="container reveal" id="container__admission">
        <h2>
          Как <span className="colored-span">поступить</span> в школу?
        </h2>

        <div className="admission-steps">
          <div className="step__round">1</div>
          <h4>Заявка на обучение</h4>
          <p>
            Позвоните нам по телефону или оставьте заявку на сайте. Менеджер
            свяжется с вами в удобное для вас время.
          </p>
          <svg
            width="4"
            height="88"
            viewBox="0 0 4 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="8.74228e-08"
              x2="2"
              y2="88"
              stroke="#E72485"
              stroke-width="4"
            />
          </svg>
          <div className="step__round">2</div>
          <img src="deco5.svg" id="deco__admission_left" alt="стрелка"/>
          <h4>Знакомство со школой</h4>
          <p>
            Для новых учеников мы проводим дни открытых дверей. Вы можете не
            только увидеть школу, но и познакомиться с одноклассниками.
          </p>
          <svg
            width="4"
            height="88"
            viewBox="0 0 4 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="2"
              y1="8.74228e-08"
              x2="2"
              y2="88"
              stroke="#E72485"
              stroke-width="4"
            />
          </svg>
          <div className="step__round">3</div>
          <img src="deco5.svg" id="deco__admission_right" alt="стрелка"/>
          <h4>Зачисление</h4>
          <p>
            Зачисление в школу и начало обучения. Наши преподователи помогут
            адаптироваться в новом классе.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Admission;
