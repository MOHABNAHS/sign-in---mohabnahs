// بسم الله الرحمن الرحيم
submitBtn.onclick = function () {
  let labelEmail = document.getElementById("email").value;
  let labelPassword = document.getElementById("password").value;
  let h1 = document.getElementById("h1");
  infoEmail = "test@gmail.com";
  infoPassword = "test";

  if (labelEmail != infoEmail || labelPassword != infoPassword) {
    h1.textContent = "عملية تسجيل دخول غير ناجحة";
  } else {
    h1.textContent = "عملية تسجيل دخول ناجحة";
  }
};
