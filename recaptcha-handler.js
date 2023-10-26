const secretKey = "6Lf7jsgoAAAAAGY2ZNVFJdn2kCMX0QkhvzS4jBrO";

document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();

  const recaptchaResponse = grecaptcha.getResponse();

  if (!recaptchaResponse) {
    alert("Please complete the reCAPTCHA verification.");
  } else {
    submitFormToServer(recaptchaResponse);
  }
});

function submitFormToServer(recaptchaResponse) {

}
