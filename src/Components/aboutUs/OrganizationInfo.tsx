import useContrastClasses from "@/hooks/useContrastClasses";
import styles from "../../styles/Components_Style/aboutUs/OrganizationInfo.module.scss";
import Image from "next/image";

const OrganizationInfo = () => {
  const { getTextM, getBodyL } = useContrastClasses();

  const textM = getTextM();
  const bodyL = getBodyL();
  return (
    <div className={styles.organizationContainer}>
      <div className={styles.organizationImageContainer}>
        <Image src="/KrikZaNas.png" alt={"KrikZaNas"} width={689} height={568}></Image>
      </div>
      <div className={styles.organizationTextContainer}>
        <h1 aria-label={"krik info"} className={textM}>
          Центарот За Младинскиот Активизам Крик Е Невладина, Непрофитна Организација Основана Од
          Страна На Млади Луѓе, Предводена Од Млади Луѓе И Работи За И Со Младите Луѓе.{" "}
        </h1>
        <p aria-label={"krik targets"} className={bodyL}>
          Целната група со која КРИК работи се сите луѓе (но главно млади) кои сакаат да придонесат
          и направат промени во полето на екологија, критичко размислување и комуникациски вештини,
          како и рабење за благостојба на социјално исклучените групи од општеството и
          маргинализираните групи. Крик се стреми кон поттикнување на поголема партиципација на
          младите, младински активизам, да ги охрабри младите луѓе да бидат повеќе вклучени во
          процесот на креирање политики на локално и на национално ниво.
        </p>
      </div>
    </div>
  );
};

export default OrganizationInfo;
