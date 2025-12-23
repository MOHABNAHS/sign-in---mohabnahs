// بسم الله الرحمن الرحيم
submitBtn.onclick = function () {
  let labelEmail = document.getElementById("email").value;
  let labelPassword = document.getElementById("password").value;
  infoEmail = "test@gmail.com";
  infoPassword = "test";

  if (labelEmail != infoEmail || labelPassword != infoPassword) {
    console.log("sign in is false");
  } else {
    console.log("sign in is true");
  }
};
