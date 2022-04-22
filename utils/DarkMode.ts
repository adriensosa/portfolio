const isDarkMode = () => {
  // check if browser is in dark mode;
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  ToggleDarkMode(isDarkMode);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      ToggleDarkMode(e.matches);
    });
};

const ToggleDarkMode = (isDarkMode: boolean) => {
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
  }
};

export { isDarkMode };
