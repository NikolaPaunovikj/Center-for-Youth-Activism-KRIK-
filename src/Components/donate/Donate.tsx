import { useState } from "react";
import styles from "../../styles/Components_Style/donate/Donate.module.scss";
import InputMask from "react-input-mask";
import useContrastClasses from "@/hooks/useContrastClasses";

const Donate = () => {
  const {
    getOrangeContrastClasses,
    getBodyL,
    getHeadlineL,
    getTextS,
    getYellowContrastClasses,
  } = useContrastClasses();
  const orangeContrast = getOrangeContrastClasses();
  const bodyL = getBodyL();
  const headlineS = getTextS();
  const [active, setActive] = useState<number>(0);
  const [clicked, setClicked] = useState(false);
  const [valutes, setValutes] = useState("Ден");
  const [initialValues, setInitialValues] = useState([1000, 3000, 6000]);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const [selectedButton, setSelectedButton] = useState<Number | null>(null);

  const handleButtonClick = (index: number) => {
    if (selectedButton === index) {
      setSelectedButton(null);
    } else {
      setSelectedButton(index);
    }
  };

  const handleItemClick = (index: number) => {
    setActive(index);
  };
  const handleDropdown = () => {
    setClicked(!clicked);
  };

  const handleChangeValute = (e: any) => {
    if (e.target.textContent === "Eur") {
      setValutes("Eur");
      setInitialValues([20, 50, 100]);
    } else if (e.target.textContent === "Dollars") {
      setValutes("Dollars");
      setInitialValues([20, 50, 100]);
    } else {
      setValutes("Ден");
      setInitialValues([1000, 3000, 6000]);
    }
  };

  const [formData, setFormData] = useState<any>({
    name: "",
    phoneNumber: "",
    email: "",
    expirationDate: "",
    cvv: "",
    cardHolder: "",
    ammount: "",
    cardNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: React.ChangeEvent<HTMLInputElement>) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "email") {
      const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      setIsEmailValid(emailRegex.test(value));
    }
  };

  const handleSubmit = () => {
    const requiredFields = [
      "name",
      "phoneNumber",
      "email",
      "expirationDate",
      "cvv",
      "cardHolder",
      "ammount",
      "cardNumber",
    ];
    const isFormValid = requiredFields.every((field) => formData[field] !== "");
    if (isFormValid && isEmailValid) {
      console.log("Form submitted:", formData);
    } else {
      if (!isFormValid) {
        alert("Please fill out all required fields correctly.");
      }
      if (!isEmailValid) {
        alert("Please enter a valid email address.");
      }
    }
  };

  return (
    <div className={styles.donatePageContainer}>
      <div className={styles.donateHeading}>
        <h1 aria-label={"donate"}>Донирај!</h1>
      </div>
      <div className={styles.navigationBar}>
        <div onClick={() => handleItemClick(0)}>
          <h5 aria-label={"individual"}>Индивидуа</h5>
          <div className={active === 0 ? ` ${styles.bar} ${orangeContrast}` : ""}></div>
        </div>
        <div onClick={() => handleItemClick(1)}>
          <h5 aria-label={"organization"}>Организација/Претпријатие</h5>
          <div className={active === 1 ? ` ${styles.bar} ${orangeContrast}` : ""}></div>
        </div>
      </div>
      <div className={styles.donatePricesContainer}>
        <h5 className={headlineS}>Lorem ipsum dolor sit amet consectetur. </h5>
        <div className={styles.buttonContainer}>
          {initialValues.map((value, index) => (
            <button
              className={`${selectedButton === index && styles.active}`}
              onClick={() => handleButtonClick(index)}
            >
              {value}
              {valutes}
            </button>
          ))}
          <button className={styles.changeValute} onClick={handleDropdown}>
            Промени Валута
            <ul className={`${clicked && styles.active} ${styles.dropdownMenu}`}>
              <li onClick={handleChangeValute}>Ден</li>
              <li onClick={handleChangeValute}>Eur</li>
              <li onClick={handleChangeValute}>Dollars</li>
            </ul>
            <span>
              <img src="/Vector.svg" alt="" />
            </span>
          </button>
        </div>
        <p className={bodyL}>
          Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a cras feugiat mattis velit
          venenatis. Adipiscing viverra praesent tristique non. Nunc blandit turpis tellus natoque
          mi odio viverra fermentum.
        </p>
        <div>
          <label htmlFor="ammount" className={styles.inputAmmount}>
            Друг Износ:
          </label>
          <input id="ammount" type="number" placeholder="Input" />
        </div>
        <div className={styles.paymentOptions}>
          <button aria-label={"donate with card"}>Донирај со 💳</button>
          <button aria-label={"donate with paypal"}>PayPal</button>
        </div>
      </div>
      <div className={styles.donateDetailsContainer}>
        <div className={styles.firstRow}>
          <div>
            <label aria-label={"name"} htmlFor="name">
              Име на Донатор*
            </label>
            <input
              id="name"
              onChange={handleChange}
              name="name"
              type="text"
              placeholder="Example Namington"
            />
          </div>
          <div>
            <label aria-label={"card number"} htmlFor="cardNumber">
              Број на картичка*
            </label>
            <InputMask
              id="cardNumber"
              name="cardNumber"
              onChange={handleChange}
              mask="9999 9999 9999 9999"
              placeholder="**** **** **** ****"
              type="text"
            ></InputMask>
          </div>
        </div>
        <div className={styles.secondRow}>
          <div>
            <label aria-label={"email"} htmlFor="email">
              Email*
            </label>
            <input
              id="email"
              onChange={handleChange}
              name="email"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div>
            <div aria-label={"expiration date and cvv"} className={styles.cardMonthCvv}>
              <InputMask
                className={styles.cardExpiration}
                name="expirationDate"
                onChange={handleChange}
                mask="99/99"
                placeholder="MM/YY"
                type="text"
              ></InputMask>
              <InputMask
                className={styles.cardCvv}
                name="cvv"
                onChange={handleChange}
                mask="999"
                placeholder="CVV"
                type="text"
              ></InputMask>
            </div>
          </div>
        </div>
        <div className={styles.thirdRow}>
          <div>
            <label aria-label={"phone number"} htmlFor="phoneNumber">
              Телефонски број*
            </label>
            <InputMask
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              mask="(+389) 99999999"
              placeholder="+38900000000"
              type="text"
            ></InputMask>
          </div>
          <div>
            <label aria-label={"cardholder name"} htmlFor="cardholderName">
              Име на сопственик*
            </label>
            <input
              id="cardholderName"
              onChange={handleChange}
              name="cardHolder"
              type="text"
              placeholder="Example Namington"
            />
          </div>
        </div>
        <div className={styles.fourthRow}>
          <div>
            <label aria-label={"donation sum"} htmlFor="donationSum">
              Сума за донирање*
            </label>
            <input
              id="donationSum"
              onChange={handleChange}
              name="ammount"
              type="number"
              placeholder="Example Namington"
            />
          </div>
          <div className={styles.donateButtonContainer}>
            <button className={orangeContrast} onClick={handleSubmit}>
              Донирај
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
