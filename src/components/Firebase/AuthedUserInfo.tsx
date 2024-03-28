import React, { useState } from "react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AuthedUserInfo = ({ selectedHaircut }: { selectedHaircut: string }) => {
  const today = new Date().toISOString();

  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState<number | "">("");
  const [inputDate, setInputDate] = useState("");
  const [inputHour, setInputHour] = useState("");

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const onlyLetters = /^[A-Za-zа-яА-Я]*$/;
    if (onlyLetters.test(inputValue)) {
      setInputName(inputValue);
    }
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const regex = /^[0-9]*$/;
    if (regex.test(inputValue)) {
      setInputPhone(inputValue === "" ? "" : parseInt(inputValue));
    }
  };
  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
  };

  const handleInputChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputHour(event.target.value);
  };

  const handleSubmit = () => {
    if (
      selectedHaircut !== "" &&
      inputName !== "" &&
      inputPhone !== "" &&
      inputDate !== "" &&
      inputHour !== ""
    ) {
      const userDocRef = doc(db, "users");

      const userDetails = {
        Дата: " " + inputDate,
        Час: " " + inputHour,
        Услуга: " " + selectedHaircut,
      };

      setDoc(userDocRef, userDetails)
        .then(() => {
          alert("Успешно запазихте час!");
        })
        .catch((error) => {
          alert("Грешка! Неуспешно запазване на час.");
        });
    } else {
      alert("Грешка! Не сте попълнили (име/тел/час/дата/услуга).");
    }
  };

  return (
    <div className="pickDateContainer">
      <div className="dateTimeContainer">
        <h2 className="dateHeading">Име</h2>
        <input
          className="nameAndNumber"
          maxLength={25}
          value={inputName}
          onChange={handleInputChange1}
          placeholder="Иван Иванов"
          type="name"
          name="name"
        />
        <h2 className="dateHeading">Телефон за връзка</h2>
        <input
          className="nameAndNumber"
          value={inputPhone}
          maxLength={10}
          onChange={handleInputChange2}
          placeholder="0887654321"
          type="tel"
          name="number"
        />

        <h2 className="dateHeading">Избери дата</h2>
        <input
          value={inputDate}
          onChange={handleInputChange3}
          placeholder="Избери дата"
          className="dateTime"
          type="date"
          name="date"
          min={today}
        />
        <h2 className="dateHeading">Избери час</h2>
        <input
          value={inputHour}
          onChange={handleInputChange4}
          placeholder="Избери час"
          className="dateTime"
          type="time"
          name="time"
          min="08:00"
          max="21:00"
        />
        <div>
          <button className="saveHourButton" onClick={handleSubmit}>
            Запази
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthedUserInfo;
