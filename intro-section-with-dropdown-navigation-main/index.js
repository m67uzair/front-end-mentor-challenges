var features = document.querySelector("#features");
document.querySelector("#features-ul").style.display = "none";

var company = document.querySelector("#company");
document.querySelector("#company-ul").style.display = "none";

var openIcon = document.querySelector("#menu-icon");
var closeIcon = document.querySelector("#close");
document.querySelector(".blur").style.display = "none";

features.addEventListener("click", function () {
  if (document.querySelector("#features-ul").style.display == "none") {
    document.querySelector("#features-ul").style.display = "block";
    document.querySelector("#features img").src = "images/icon-arrow-up.svg";
  } else {
    document.querySelector("#features-ul").style.display = "none";
    document.querySelector("#features img").src = "images/icon-arrow-down.svg";
  }
});

company.addEventListener("click", function () {
  if (document.querySelector("#company-ul").style.display == "none") {
    document.querySelector("#company-ul").style.display = "block";
    document.querySelector("#company img").src = "images/icon-arrow-up.svg";
  } else {
    document.querySelector("#company-ul").style.display = "none";
    document.querySelector("#company img").src = "images/icon-arrow-down.svg";
  }
});

openIcon.addEventListener("click", function () {

  if (document.querySelector(".blur").style.display == "none") {
    document.querySelector(".blur").style.display = "block";
  }

});

closeIcon.addEventListener("click", function () {

    if (document.querySelector(".blur").style.display == "block") {
      document.querySelector(".blur").style.display = "none";
    }
    
  });
