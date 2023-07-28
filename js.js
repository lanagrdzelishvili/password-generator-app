const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789'
const symbols = '!@#$%^&*()_+~`|}{[]\:;?><,./-='

const password_display = document.querySelector(".password-display")
const copy = document.querySelector(".copy")
const copy_img = document.querySelector("#copy-img")
const lngt = document.querySelector("#lngt")
const slider = document.querySelector(".slider")

const checkboxes = document.querySelectorAll(".checkbox");
const cols = document.querySelectorAll('.col');
const strongChange = document.querySelectorAll('.strong-change');
const colors = ['#F64A4A', '#FB7C58', '#F8CD65', '#A4FFAF']

function strength() {
  const checkedLength = document.querySelectorAll('.checkbox:checked').length;
  const chosenColor = colors[checkedLength - 1];
  
  cols.forEach(col => {
    col.style.backgroundColor = 'transparent'
    col.style.border = '1px solid #E6E5EA'
  });
  strongChange.forEach(st => st.style.display = 'none');


  for (let index = 0; index < checkedLength; index++) {
    const col = cols[index]
    col.style.backgroundColor = chosenColor
  }

  if (checkedLength > 0) strongChange[checkedLength - 1].style.display = 'block';
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', strength))

copy_img.addEventListener("click", () => {
    const suggestedPassword = password_display.textContent
    const textarea = document.createElement("textarea")
    textarea.value = suggestedPassword
    document.body.appendChild(textarea)

    textarea.select()
    document.execCommand("copy")

    document.body.removeChild(textarea)
    copy.style.display = "block"

    setTimeout(() => {
        copy.style.display = "none"
    }, 2000)
})

function updateSliderColor() {
  const percent = (slider.value - slider.min) / (slider.max - slider.min);
  const color = `linear-gradient(to right, #A4FFAF ${percent * 100}%, #fff ${percent * 100}%)`;
  slider.style.background = color;
  lngt.textContent = slider.value;
}

slider.addEventListener("input", () => {
    updateSliderColor();
});

