import React from "react";
import "./style.css";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const Contact = ({ sectionRef}) => {

  return (
    <section className="contact" ref={sectionRef}>
      <div className="contact_info">
        <div className="contact_info_socials">
          <img
            src="logo-mini.svg"
            alt=""
            width={100}
            height={100}
            id={"contact_logo"}
          />
          <div>
            <h4>Контактная информация:</h4>

            <span>
              <img src="location-icon.svg" alt="Местоположение" width={25} />
              г. Екатеринбург, ул. Циолковского, 29 (Е)
            </span>

            <span>
              <img src="phone-icon.svg" alt="Телефон" width={25} />
              +7 (919) 368-26-27 WhatsApp | Telegram
            </span>

            <span>
              <img src="web-icon.svg" alt="Сайт" width={25} />
              <a href="#">tduschool.ru</a>
            </span>
          </div>
        </div>

        <YMaps>
          <Map
            defaultState={{ center: [56.804362, 60.60511], zoom: 15 }}
            className="map"
          >
            <Placemark defaultGeometry={[56.804362, 60.60511]} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
};

export default Contact;
