const toggleSwitch = document.querySelector(`input[type="checkbox"]`);
const nav = document.getElementById(`nav`);
const toggleIcon = document.getElementById(`toggle-icon`);
const image1 = document.getElementById(`image1`);
const image2 = document.getElementById(`image2`);
const image3 = document.getElementById(`image3`);
const textBox = document.getElementById(`text-box`);

const modeImage = function (mood) {
  image1.src = `img/undraw_proud_coder_${mood}.svg`;
  image2.src = `img/undraw_feeling_proud_${mood}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mood}.svg`;
};

const darkMode = function () {
  nav.style.backgroundColor = `rgba(0 0 0 /50%)`;
  textBox.style.backgroundColor = `rgba(255 255 255 /50%)`;
  toggleIcon.children[0].textContent = `Dark Mode`;
  toggleIcon.children[1].classList.replace(`fa-sun`, `fa-moon`);
  modeImage("dark");
};

const lightMode = function () {
  nav.style.backgroundColor = `rgba(255 255 255 /50%)`;
  textBox.style.backgroundColor = `rgba(0 0 0 /50%)`;
  toggleIcon.children[0].textContent = `Light Mode`;
  toggleIcon.children[1].classList.replace(`fa-moon`, `fa-sun`);
  modeImage("light");
};

const switchTheme = function (event) {
  if (event.target.checked) {
    document.documentElement.setAttribute(`data-theme`, `dark`);
    darkMode();
  } else {
    document.documentElement.setAttribute(`data-theme`, `light`);
    lightMode();
  }
};

toggleSwitch.addEventListener(`change`, switchTheme);
