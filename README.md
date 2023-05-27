# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop](./assets/images/desktop.png)
![Mobile](./assets/images/mobile.png)

### Links

- Solution URL: [See the results here](https://imbard.github.io/newsletter-sign-up/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned how to create a email validation with regex in Javascript

To see how you can add code snippets, see below:

**Regex para verificar se o email contém "@" e ".com"**
```js
const regex = /@\w+\.com$/;
```
**Função que verifica se o email passado esta no formato correto**
```js
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
```
### Continued development

I want to improve my abilities in css with semantic code and my design

### Useful resources

## Author

## Author

- Github - [ImBard](https://www.github.com/imbard)
- Frontend Mentor - [@ImBard](https://www.frontendmentor.io/profile/ImBard)
- Twitter - [@imbard0](https://www.twitter.com/imbard0)
- Linkedin - [Talison Brendon](https://www.linkedin.com/in/talison-brendon/)
