import React from "react";
import "./style.css";

function Pricing({ sectionRef }) {
  return (
    <section className="pricing" ref={sectionRef}>
      <div className="container reveal" id="container__pricing">
        <h2>
          Стоимость <span className="colored-span">обучения</span>
        </h2>
        <div className="container__pricing_items">
          <div className="container__pricing_item">
            <div>
              <span className="colored-span">Система «Все включено» </span>
              45 000 рублей в месяц
              <br />
              (Учебный год 405 000 рублей)
            </div>
          </div>
          <div className="container__pricing_item">
            <div>
              <span className="colored-span">Организационный сбор:</span>
              30 000 рублей один раз в год
            </div>
          </div>
          <div className="container__pricing_item">
            <div>
              <span className="colored-span">Аттестационный сбор:</span>7 000
              рублей один раз в год
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
