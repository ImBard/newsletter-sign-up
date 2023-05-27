const send = document.getElementById("send");
const regex = /@\w+\.com$/;
const span = document.createElement("span");
span.innerHTML = "Valid email required";
span.style.color = "hsl(4, 100%, 67%)";
const txtEmail = document.getElementById("txtEmail");
const form = document.getElementById("form");
const success = document.getElementById("success");
const closeMsg = document.getElementById("closeMsg");

closeMsg.addEventListener("click", () => {
  form.style.display = "flex";
  success.style.display = "none";
})

send.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("email");
  verifyEmail(email);
});

function verifyEmail(email) {

  if (regex.test(email.value)) {
    if (email.classList.contains("invalidEmail")) {
      email.classList.remove("invalidEmail");
      txtEmail.removeChild(span);
    }
    form.style.display = "none";
    success.style.display = "grid";
    email.value = "";
  }
  else {
    email.classList.add("invalidEmail");
    txtEmail.appendChild(span);
  }
}





