import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Components_Style/aboutUs/Faq.module.scss";
import { useState } from "react";
import { IQuestion } from "@/pages/aboutUs";

interface Props {
  questionData: IQuestion[];
}

const Faq: React.FC<Props> = ({ questionData }) => {
  const [selected, setSelected] = useState(null);
  const toggle = (i: any) => {
    setSelected((prevSelected) => (prevSelected === i ? null : i));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        <h1 aria-label={"frequently asked question"}>Најчесто поставувани прашања</h1>
        {questionData?.map((item, i) => (
          <div
            onClick={() => toggle(i)}
            className={`${styles.item} ${selected === i ? styles.show : ""}`}
          >
            <div className={styles.title}>
              <h2>
                {`0${i + 1}`} {item.question}
              </h2>
              <FontAwesomeIcon
                className={selected === i ? styles.iconMinus : styles.iconPlus}
                icon={selected === i ? faMinus : faPlus}
              />
            </div>
            <div className={`${styles.content} ${selected === i ? styles.show : ""}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
