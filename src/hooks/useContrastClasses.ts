import { useContext } from "react";
import { ThemeContext } from "@/Context/ThemeContext";

const useContrastClasses = () => {
  const { theme } = useContext<any>(ThemeContext);
  const { widget } = useContext<any>(ThemeContext);
  const { animation } = useContext<any>(ThemeContext);
  // const { cursor } = useContext<any>(ThemeContext);

  const getContrastClasses = (defaultClass: string, increasedClass: string) => {
    return theme ? increasedClass : defaultClass;
  };

  const getWidgetClasses = (defaultClass: string, increasedClass: string) => {
    return widget ? increasedClass : defaultClass;
  };

  const getAnimationClasses = (defaultClass: string, increasedClass: string) => {
    return animation ? increasedClass : defaultClass;
  };

  return {
    getOrangeContrastClasses: () =>
      getContrastClasses("defaultOrangeContrast", "increasedOrangeContrast"),
    getYellowContrastClasses: () =>
      getContrastClasses("defaultYellowContrast", "increasedYellowContrast"),
    getVioletContrastClasses: () =>
      getContrastClasses("defaultVioletContrast", "increasedVioletContrast"),
    getOrangeTextContrastClasses: () =>
      getContrastClasses("defaultOrangeColor", "increasedOrangeColor"),
    getAnimationClasses: () => getAnimationClasses("defaultAnimation", "disabledAnimation"),

    getHeadlineXl: () => getWidgetClasses("defaultXlSize", "increasedXlSize"),
    getHeadlineL: () => getWidgetClasses("defaultLSize", "increasedLSize"),
    getTextM: () => getWidgetClasses("defaultTextMSize", "increasetTextMSize"),
    getTextMUpcoming: () => getWidgetClasses("defaultTextMSize", "increasedTextMSizeUpcoming"),
    getBodyL: () => getWidgetClasses("defaultBodyLSize", "increasedBodyLSize"),
    getButtonL: () => getWidgetClasses("defaultButtonLSize", "increasedButtonLSize"),
    getTextS: () => getWidgetClasses("defaultTextS", "increasedTextS"),
    getTextXs: () => getWidgetClasses("defaultTextXs", "increasedTextXs"),
    getNumbersL: () => getWidgetClasses("defaultNumbersSize", "increasedNumbersSize"),
    getNumbersTextL: () => getWidgetClasses("defaultNumbersText", "increasedNumbersText"),
    getBoldText: () => getWidgetClasses("defaultBoldStyle", "increasedBoldStyle"),

    getDonateClass: () => getContrastClasses("defaultDonateClass", "increasedDonateClass"),
  };
};

export default useContrastClasses;
