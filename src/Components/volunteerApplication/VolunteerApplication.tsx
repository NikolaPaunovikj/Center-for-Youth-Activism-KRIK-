import Slider from "@mui/material/Slider";
import styles from "../../styles/Components_Style/volunteerApplication/volunteerApplication.module.scss";
import sliderStyles from "../../styles/Components_Style/volunteerApplication/sliderStyles.module.scss"; // Correct path and file extension
// import InputMask from 'react-input-mask';
import InputMask from "react-input-mask";
import { useEffect, useState } from "react";
import useContrastClasses from "@/hooks/useContrastClasses";
// import MaterialInput from '@material-ui/core/Input';

const VolunteerApplication = () => {
  const { getHeadlineXl, getOrangeContrastClasses } = useContrastClasses();
  const headlineXl = getHeadlineXl();
  const orangeClass = getOrangeContrastClasses();
  const marks = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 6, label: "6" },
    { value: 7, label: "7" },
    { value: 8, label: "8" },
    { value: 9, label: "9" },
    { value: 10, label: "10" },
  ];
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [activeAgeGroup, setActiveAgeGroup] = useState("");
  const [activeInterests, setActiveInterests] = useState([]);

  const [formData, setFormData] = useState<any>({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    ageGroup: "",
    experience: 1,
    interests: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "email") {
      const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      setIsEmailValid(emailRegex.test(value));
    }
  };

  const handleAgeGroupClick = (ageGroup: string) => {
    setFormData((prevData: any) => ({
      ...prevData,
      ageGroup,
    }));

    setActiveAgeGroup((prevActiveAgeGroup) => (prevActiveAgeGroup === ageGroup ? "" : ageGroup));
  };

  const handleInterestClick = (interest: any) => {
    const updatedInterests = [...formData.interests];
    const interestIndex = updatedInterests.indexOf(interest);

    if (interestIndex === -1) {
      updatedInterests.push(interest);
    } else {
      updatedInterests.splice(interestIndex, 1);
    }

    setFormData((prevData: any) => ({
      ...prevData,
      interests: updatedInterests,
    }));
  };
  const handleSubmit = () => {
    const requiredFields = ["name", "address", "phoneNumber", "email", "ageGroup"];
    const isFormValid = requiredFields.every((field) => formData[field] !== "");

    const isButtonActivated = formData.ageGroup !== "" && isEmailValid;
    const isInterestsValid = formData.interests.length > 0;

    if (isFormValid && isButtonActivated && isInterestsValid) {
      console.log("Form submitted:", formData);
    } else {
      if (!isFormValid) {
        alert("Please fill out all required fields correctly.");
      } else if (!isButtonActivated) {
        alert("Please activate one button (select an age group and provide a valid email).");
      } else if (!isInterestsValid) {
        alert("Please select at least one interest.");
      }
    }
  };

  return (
    <div>
      <h1 className={`${headlineXl} ${styles.volunteerApplicationHeading}`}>Волонтирај Сега!</h1>
      <div className={styles.volunteerApplicationContainer}>
        <div className={styles.volunteerApplicationWrapper}>
          <div className={styles.left}>
            <div>
              <label aria-label={"volunteer name"} htmlFor="volunteerName">
                Име на Волонтер*
              </label>
              <input
                id="volunteerName"
                name="name"
                onChange={handleChange}
                type="text"
                placeholder="Example Namington"
              />
            </div>
            <div>
              <label aria-label={"address"} htmlFor="volunteerAddress">
                Адреса*
              </label>
              <input
                id="volunteerAddress"
                name="address"
                onChange={handleChange}
                type="text"
                placeholder="Example street 24"
              />
            </div>
            <div>
              <label aria-label={"phone number"} htmlFor="volunteerPhone">
                Телефонски број*
              </label>
              <InputMask
                id="volunteerPhone"
                name="phoneNumber"
                onChange={handleChange}
                mask="(+389) 99999999"
                placeholder="+38900000000"
                type="text"
              ></InputMask>
            </div>
            <div>
              <label aria-label={"email"} htmlFor="volunteerEmail">
                Email*
              </label>
              <input
                id="volunteerEmail"
                name="email"
                onChange={handleChange}
                type="text"
                placeholder="example@email.com"
              />
            </div>
          </div>
          <div className={styles.right}>
            <div>
              <label htmlFor="volunteerAge">Возраст*</label>
              <div className={styles.buttonContainer}>
                <button
                  aria-label={"under 18 years"}
                  className={`${
                    activeAgeGroup === "Под 18 Години" ? styles.active : styles.disabled
                  }`}
                  onClick={() => handleAgeGroupClick("Под 18 Години")}
                >
                  Под 18 Години
                </button>
                <button
                  aria-label={"above 18 years"}
                  className={activeAgeGroup === "Над 18 Години" ? styles.active : styles.disabled}
                  onClick={() => handleAgeGroupClick("Над 18 Години")}
                >
                  Над 18 Години
                </button>
              </div>
            </div>
            <div className={styles.rangeContainer}>
              <label aria-label={"experience"} htmlFor="volunteerExpeirence">
                Искуство со волнтирање*
              </label>
              <Slider
                id="volunteerExpeirence"
                onChange={handleChange}
                className={sliderStyles.Slider}
                aria-label="Custom marks"
                defaultValue={1}
                min={1}
                max={10}
                size="small"
                valueLabelDisplay="auto"
                marks={marks}
                name="experience"
              />
            </div>
            <div className={styles.volunteerInterests}>
              <label aria-label={"interests"} htmlFor="">
                Волонтерски интереси*
              </label>
              <div>
                <button
                  onClick={() => handleInterestClick("Lorem Ipsum 1")}
                  className={
                    formData.interests.includes("Lorem Ipsum 1") ? styles.active : styles.disabled
                  }
                >
                  Lorem Ipsum 1
                </button>
                <button
                  onClick={() => handleInterestClick("Lorem Ipsum 2")}
                  className={
                    formData.interests.includes("Lorem Ipsum 2") ? styles.active : styles.disabled
                  }
                >
                  Lorem Ipsum 2
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleInterestClick("Lorem Ipsum 3")}
                  className={
                    formData.interests.includes("Lorem Ipsum 3") ? styles.active : styles.disabled
                  }
                >
                  Lorem Ipsum 3
                </button>
                <button
                  onClick={() => handleInterestClick("Lorem Ipsum 4")}
                  className={
                    formData.interests.includes("Lorem Ipsum 4") ? styles.active : styles.disabled
                  }
                >
                  Lorem Ipsum 4
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.submitButtonContainer}>
          <button aria-label={"apply"} className={orangeClass} onClick={handleSubmit}>
            Пријави Се
          </button>
        </div>
      </div>
    </div>
  );
};

export default VolunteerApplication;
