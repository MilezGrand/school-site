import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';

function Menu({ mainRef, aboutRef, admissionRef, pricingRef, educationRef, contactRef, menuRef }) {
  const scrollPosition = useScrollPosition();
  const [main, setMain] = React.useState(null);
  const [about, setAbout] = React.useState(null);
  const [admission, setAdmission] = React.useState(null);
  const [pricing, setPricing] = React.useState(null);
  const [education, setEducation] = React.useState(null);
  const [contact, setContact] = React.useState(null);
  const [menu, setMenu] = React.useState(null);

  React.useEffect(() => {
    setMain(mainRef);
    setAbout(aboutRef);
    setAdmission(admissionRef);
    setPricing(pricingRef);
    setEducation(educationRef);
    setContact(contactRef);
    setMenu(menuRef)
  }, [mainRef, aboutRef, admissionRef, pricingRef, educationRef, contactRef,menuRef]);

  return (
    <div ref={menuRef} className={'menu menu-closed'}>
      <span>
      <svg
        role="presentation"
        class="t-popup__close-icon"
        width="23px"
        height="23px"
        viewBox="0 0 23 23"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => {
          menu.current.classList.add('menu-closed');
        }}
        id="close-menu"
      >
        <g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd">
          <rect
            transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
            x="10.3137085"
            y="-3.6862915"
            width="2"
            height="30"
          ></rect>
          <rect
            transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
            x="10.3137085"
            y="-3.6862915"
            width="2"
            height="30"
          ></rect>
        </g>
      </svg>
        
      </span>
      <ul>
        <li>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              menu.current.classList.add('menu-closed');
            }}
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              about.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            О школе
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              window.scrollTo(0, pricing.current.offsetTop - 150);
              menu.current.classList.add('menu-closed');
            }}
          >
            Стоимость
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              education.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Расписание
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              admission.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Поступление
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              contact.current.scrollIntoView();
              menu.current.classList.add('menu-closed');
            }}
          >
            Контакты
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
