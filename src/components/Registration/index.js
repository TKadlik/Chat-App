import React, { useState } from "react";
import "./Registration.style.css";
import Avatars from "../Avatars";

function Registration({ handleRegFormSubmit }) {
  const [avatar, setAvatar] = useState("");
  const [username, setUsername] = useState("");

  const selectAvatar = (e) => {
    setAvatar(e.target.src);
    Array.from(e.target.closest("ul").children).forEach(function (element) {
      element.className = "reg-form__avatar";
    });
    e.target.closest("li").className =
      "reg-form__avatar reg-form__avatar--clicked";
  };

  const getUsername = (e) => {
    setUsername(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (avatar === "") {
      const icon = document.getElementsByClassName("reg-form__avatar");
      Array.from(icon).map((element) =>
        (function () {
          element.className = "reg-form__avatar reg-form__avatar--not-selected";
          setTimeout(() => {
            element.className = "reg-form__avatar";
          }, 800);
        })()
      );
    } else handleRegFormSubmit(username, avatar);
  };

  return (
    <div className="form-container">
      <form className="reg-form" onSubmit={submitForm}>
        <input
          className="reg-form__txt-input"
          type="text"
          placeholder="Unesite vaše ime..."
          required
          onChange={getUsername}
        />
        <span>Izaberite Avatar:</span>
        {<Avatars selectAvatar={selectAvatar} />}
        <button className="reg-form__btn" type="submit">
          Pokreni chat
        </button>
      </form>
    </div>
  );
}

export default Registration;
