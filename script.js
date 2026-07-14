const spanishButton = document.getElementById("btn-es");
const englishButton = document.getElementById("btn-en");
const cvButton = document.getElementById("cv-button");

const translatableElements = document.querySelectorAll("[data-es][data-en]");

function changeLanguage(language) {
  translatableElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  if (language === "es") {
    document.documentElement.lang = "es";

    spanishButton.classList.add("active");
    englishButton.classList.remove("active");

    cvButton.href = "files/Paola_Romero_Data_Analyst_CV_ES.pdf";

    document.title = "Paola Romero | Portafolio de Data Analyst";
  } else {
    document.documentElement.lang = "en";

    englishButton.classList.add("active");
    spanishButton.classList.remove("active");

    cvButton.href = "files/Paola_Romero_Data_Analyst_CV_EN.pdf";

    document.title = "Paola Romero | Data Analyst Portfolio";
  }

  localStorage.setItem("preferredLanguage", language);
}

spanishButton.addEventListener("click", () => {
  changeLanguage("es");
});

englishButton.addEventListener("click", () => {
  changeLanguage("en");
});

const savedLanguage = localStorage.getItem("preferredLanguage") || "es";

changeLanguage(savedLanguage);
