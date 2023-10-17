import React, { useMemo } from "react";
import "./style.css";
import InputMask from "react-input-mask";

function Popup({ setPopupOpen }) {
  const [clientPhone, setClientPhone] = React.useState("");
  const [clientName, setClientName] = React.useState("");

  const [phoneError, setPhoneError] = React.useState("Введите номер телефона");
  const [nameError, setNameError] = React.useState("Введите имя");

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

    if (e.target.value.includes("_") || e.target.value === "") {
      setPhoneError("Введите номер телефона");
    } else {
      setPhoneError("");
    }
  };

  const nameHandler = (e) => {
    setClientName(e.target.value);

    if (e.target.value === "") {
      setNameError("Введите имя");
    } else {
      setNameError("");
    }
  };

  const blurHandler = (e) => {
    setPhoneDirty(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    setFormValid(false);

    setSuccess(true);
  };

  const onSuccess = (
    <div className="successForm">
      <img src="success-icon.svg" alt="успех" />
      <h4>Мы с вами свяжемся!</h4>
    </div>
  );

  return (
    <div className="background-wrapper" onClick={() => setPopupOpen(false)}>
      <svg
        role="presentation"
        class="t-popup__close-icon"
        width="23px"
        height="23px"
        viewBox="0 0 23 23"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setPopupOpen(false)}
        id="close--desktop"
        className="closeForm"
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
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={onSubmit}>
          <h2>
            Обратный <span className="colored-span">звонок</span>
          </h2>
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
                    <input
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      {...inputProps}
                    />
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
              </button>
              <p>
                Нажимая на кнопку, вы соглашаетесь с политикой
                конфиденциальности
              </p>
            </>
          ) : (
            onSuccess
          )}
        </form>
        <svg
          role="presentation"
          class="t-popup__close-icon"
          width="23px"
          height="23px"
          viewBox="0 0 23 23"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          id="close--mobile"
          className="closeForm"
        >
          <g stroke="none" stroke-width="1" fill="#fff" fill-rule="evenodd">
            <rect
              transform="translate(11.313708, 11.313708) rotate(-45.000000) translate(-11.313708, -11.313708) "
              x="10.3137085"
              y="-3.6862915"
              width="2"
              height="30"
              fill="#000000"
            ></rect>
            <rect
              transform="translate(11.313708, 11.313708) rotate(-315.000000) translate(-11.313708, -11.313708) "
              x="10.3137085"
              y="-3.6862915"
              width="2"
              height="30"
              fill="#000000"
            ></rect>
          </g>
        </svg>
      </div>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    </div>
  );
}

export default Popup;
