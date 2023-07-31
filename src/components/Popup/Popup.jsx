import React, { useMemo } from 'react';
import './style.css';
import InputMask from 'react-input-mask';

function Popup({ setPopupOpen }) {
  const [clientPhone, setClientPhone] = React.useState('');
  const [clientName, setClientName] = React.useState('');

  const [phoneError, setPhoneError] = React.useState('Введите номер телефона');
  const [nameError, setNameError] = React.useState('Введите имя');

  const [phoneDirty, setPhoneDirty] = React.useState(false);

  const [success, setSuccess] = React.useState(false);
  const [formValid, setFormValid] = React.useState(false);

  React.useEffect(() => {
    if (phoneError || nameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [phoneError, nameError]);

  const phoneHandler = (e) => {
    setClientPhone(e.target.value);

    if (e.target.value.includes('_') || e.target.value === '') {
      setPhoneError('Введите номер телефона');
    } else {
      setPhoneError('');
    }
  };

  const nameHandler = (e) => {
    setClientName(e.target.value);

    if (e.target.value === '') {
      setNameError('Введите имя');
    } else {
      setNameError('');
    }
  };

  const blurHandler = (e) => {
    setPhoneDirty(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const url =
      'https://script.google.com/macros/s/AKfycbzXIyAg-SxZS8mDNDxccL4f-oVlYEiMw7aWX9v4loJBNDqpJfUvNJm3id3lOjZHDQdQ/exec';
    let formData = new FormData();

    setFormValid(false);

    formData.append('Телефон', clientPhone);
    formData.append('Имя', clientName);

    const requestOptions = {
      method: 'POST',
      body: formData,
    };

    await fetch(url, requestOptions);

    setSuccess(true);
  };

  const onSuccess = (
    <div className='successForm'>
      <img src="success-icon.svg" alt="успех" />
      <h4>
        Мы с вами свяжемся!
      </h4>
    </div>
  );

  return (
    <div className="background-wrapper">
      <div className="modal">
        <h3>Заказать звонок</h3>
        <form onSubmit={onSubmit}>
          {!success ? (
            <>
              <div className="form-inputs">
                <InputMask
                  mask="+7 (999) 999-99-99"
                  maskChar="_"
                  value={clientPhone}
                  onBlur={(e) => blurHandler(e)}
                  onChange={(e) => phoneHandler(e)}
                >
                  {(inputProps) => (
                    <input type="tel" placeholder="+7 (___) ___-__-__" {...inputProps} />
                  )}
                </InputMask>
                {phoneDirty && phoneError && <span>{phoneError}</span>}
                <input
                  type="text"
                  placeholder="Введите ваше имя"
                  value={clientName}
                  onChange={(e) => nameHandler(e)}
                />
              </div>
              <button type="submit" disabled={!formValid}>
                Отправить
              </button>{' '}
            </>
          ) : (
            onSuccess
          )}
        </form>
        <img src="close.svg" onClick={() => setPopupOpen(false)} alt="Закрыть" className='closeForm'/>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </div>
  );
}

export default Popup;
