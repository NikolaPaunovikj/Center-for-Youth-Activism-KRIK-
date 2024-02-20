import { ReactNode, createContext, useEffect, useState } from "react";

type Theme = true | false;
type Widget = true | false;
type Saturation = true | false;
type Cursor = true | false;
type ReadingMask = true | false;
type Animation = true | false;
type ScreenReader = true | false;
interface ContextData {
  theme: Theme;
  widget: Widget;
  saturation: Saturation;
  cursor: Cursor;
  readingMask: ReadingMask;
  screenReader: ScreenReader;
  animation: Animation;
  activeService: number;

  updateTheme: () => void;
  updateWidget: () => void;
  updateSaturation: () => void;
  updateCursor: () => void;
  updateReadingMask: () => void;
  updateAnimation: () => void;
  updateScreenReader: () => void;
  handleServicesClick: (index: number) => void;
}

interface Props {
  children: ReactNode;
}

export const ThemeContext = createContext<ContextData | undefined>(undefined);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<Theme>(false);
  const [widget, setWidget] = useState<Widget>(false);
  const [saturation, setSaturation] = useState<Saturation>(false);
  const [cursor, setCursor] = useState<Cursor>(false);
  const [readingMask, setReadingMask] = useState<ReadingMask>(false);
  const [animation, setAnimation] = useState<Animation>(false);
  const [screenReader, setScreenReader] = useState<ScreenReader>(false);

  const updateTheme = () => {
    setTheme(!theme);
  };

  const updateWidget = () => {
    setWidget(!widget);
  };

  const updateSaturation = () => {
    setSaturation(!saturation);
  };

  const updateCursor = () => {
    setCursor(!cursor);
  };

  const updateReadingMask = () => {
    setReadingMask(!readingMask);
  };

  const updateScreenReader = () => {
    setScreenReader(!screenReader);
  };

  const updateAnimation = () => {
    setAnimation(!animation);
    console.log(animation);
  };

  useEffect(() => {
    document.body.classList.toggle("increasedSaturation", saturation);
    return () => {
      document.body.classList.remove("increasedSaturation");
    };
  }, [saturation]);

  useEffect(() => {
    document.body.classList.toggle("large-cursor", cursor);
    return () => {
      document.body.classList.remove("large-cursor");
    };
  }, [cursor]);

  const [activeService, setActiveService] = useState<number>(0);
  const handleServicesClick = (index: number) => {
    setActiveService(index);
  };

  useEffect(() => {
    console.log(activeService);
  }, [activeService]);

  const contextValue: ContextData = {
    theme,
    updateTheme,
    widget,
    updateWidget,
    saturation,
    updateSaturation,
    cursor,
    updateCursor,
    readingMask,
    updateReadingMask,
    animation,
    updateAnimation,
    screenReader,
    updateScreenReader,
    activeService,
    handleServicesClick,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
