import React, { useState, useEffect } from "react";
import {
  doc,
  getFirestore,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import "./SaveHourButton.css";
import CustomModal from "../helper/CustomModal";
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const AuthedUserInfo = ({ selectedHaircut }: { selectedHaircut: string }) => {
  const today = new Date().toISOString();
  const [showModal, setShowModal] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<
    null | "success" | "error"
  >(null);
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState<number | "">("");
  const [inputDate, setInputDate] = useState("");
  const [inputHour, setInputHour] = useState("");
  useEffect(() => {
    const checkUsersCollection = async () => {
      const usersRef = collection(db, "users");
      const usersSnapshot = await getDocs(usersRef);
      if (usersSnapshot.empty) {
        await setDoc(doc(db, "users", "initialDocument"), { exists: true });
      }
    };
    checkUsersCollection();
  }, []);

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const onlyLetters = /^[A-Za-zа-яА-Я\s]*$/;
    if (onlyLetters.test(inputValue)) {
      setInputName(inputValue);
    }
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const regex = /^[0-9\s]*$/;
    if (regex.test(inputValue)) {
      setInputPhone(inputValue === "" ? "" : inputValue === "0" ? 0 : parseInt(inputValue));
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
      const userDetails = {
        Дата: " " + inputDate,
        Час: " " + inputHour,
        Услуга: " " + selectedHaircut,
        Телефон: " " + inputPhone,
      };

      setDoc(doc(db, "users", inputName), userDetails)
        .then(() => {
          setSubmissionResult("success");
          setShowModal(true);
        })
        .catch((_error) => {
          alert("Грешка! Неуспешно запазване на час.");
        });
    } else {
      setSubmissionResult("error");
      setShowModal(true);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <CustomModal
        submissionResult={submissionResult}
        isOpen={showModal}
        onClose={handleCloseModal}
        title={
          submissionResult === "success" ? "Успешно запазихте час!" : "Грешка!"
        }
      >
        <div>
          {submissionResult === "success"
            ? `
          ${inputName} oчакваме Ви на ${inputDate} в ${inputHour}!`
            : "Грешка! Не сте попълнили (име/тел/час/дата) или не сте избрали услуга."}
        </div>
      </CustomModal>
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
    </>
  );
};

export default AuthedUserInfo;
