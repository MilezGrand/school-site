import React from 'react';
import './style.css';
import InputMask from 'react-input-mask';

function Popup({setPopupOpen}) {
  const [userPhone, setUserPhone] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [phoneDirty, setPhoneDirty] = React.useState(false);

  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [phoneError]);

  const phoneHandler = (e) => {
    setUserPhone(e.target.value);

    if (e.target.value.includes('_') || e.target.value === '') {
      setPhoneError('Неккоректный номер телефона');
    } else {
      setPhoneError('');
    }
  };

  const blurHandler = (e) => {
    setPhoneDirty(true);
  };

  // Отправка формы
  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();

    formData.append("phone", userPhone);

    fetch("send.php", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  return (
    <div className="modal">
      <h3>Заказать звонок</h3>
      <form onSubmit={onSubmit}>
        <InputMask
          mask="+7 (999) 999-99-99"
          maskChar="_"
          value={userPhone}
          onBlur={(e) => blurHandler(e)}
          name="phone"
          onChange={(e) => phoneHandler(e)}
        >
          {(inputProps) => <input type="tel" placeholder="+7 (___) ___-__-__" {...inputProps} />}
        </InputMask>
        {phoneDirty && phoneError && <span>{phoneError}</span>}
        <button disabled={!formValid} type="submit">
          Отправить
        </button>
      </form>
      <img src="close.svg" onClick={() => setPopupOpen(false)} alt='Закрыть'/>
    </div>
  );
}

export default Popup;
