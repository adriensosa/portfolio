const darkModeDetection = () => {
  // check if browser is in dark mode;
  const darkModeDetection = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  ToggleDarkMode(darkModeDetection);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      ToggleDarkMode(e.matches);
    });
};

const isDarkMode = () => {
  const darkModeDetection = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  return darkModeDetection;
};

const ToggleDarkMode = (darkModeDetection: boolean) => {
  if (darkModeDetection) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
};

export { darkModeDetection, isDarkMode };
