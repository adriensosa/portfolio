import { isDarkMode } from "../utils/DarkMode";

const ChangeBgColor = (gradient?: boolean) => {
  const gradientColor =
    "linear-gradient(104.27deg, #6C8BDA 0.46%, #64AFDE 15.15%, #74C6D3 28.83%, #A3D9B6 43.02%, #BDD4B5 56.7%, #C9C8B4 71.39%, #D9B2B7 85.07%, #DF9CB9 97.73%)";

  const lightBg = [
    "#6C8CDA",
    "#76C8D1",
    "#9CD8B9",
    "#D4BFB6",
    "#DF9CB9",
    gradientColor,
  ];
  const darkBg = ["#180540", "#142110", gradientColor];
  const $main = document.querySelector("main");
  if (!$main) {
    return;
  }
  if (isDarkMode()) {
    const randomDarkBg = darkBg[Math.floor(Math.random() * darkBg.length)];
    if (gradient) {
      $main.style.background = gradientColor;
    } else {
      $main.style.background = randomDarkBg;
    }
  } else {
    const randomLightBg = lightBg[Math.floor(Math.random() * lightBg.length)];
    if (gradient) {
      $main.style.background = gradientColor;
    } else {
      $main.style.background = randomLightBg;
    }
  }
};

const ResetBgColor = () => {
  const $main = document.querySelector("main");
  if (!$main) {
    return;
  }
  $main.style.background = "";
};

export { ChangeBgColor, ResetBgColor };
