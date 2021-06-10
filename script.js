function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
  } else { 
    x.className = x.className.replace(" show", "");
  }
}

function navFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function cartFunction() {
  var x = document.getElementById("MyCheckoutContainer");
  if (x.className === "checkout-container cluster center") {
    x.className += " responsive";
  } else {
    x.className = "checkout-container cluster center";
  }
}

