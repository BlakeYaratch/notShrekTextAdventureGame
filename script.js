//Code the makes buttons work
//document.getElementById("option1/option2").onclick = function randomFuntionName() {}

//#region Global Vars

var t = 1;
var o = document.getElementById("option1").value;
var p = document.getElementById("option2").value;
var donkeyPara = document.getElementById("donkey").value;

//#endregion

//#region Drop Down Menus
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function charSelect() {
  //Used for dropdown menu
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}
//#endregion

//#region If else for shrek
if (t === 2) {
  shrek3();
} else if (t === 3) {
  shrek4();
} else if (t === 4) {
  shrek5();
} else if (t === 5) {
  shrek6();
}

//#endregion

//#region Shrek Code
function shrek1() {
  document.getElementById("shrek1").innerHTML =
    "The is where the first Shrek tile begins.";
  document.getElementById("option1").onclick = function myShrek2() {
    shrek3();
  };
  document.getElementById("option2").onclick = function myShrek3() {
    shrek4();
    addT();
    addT();
  };
}
function shrek2() {
  document.getElementById("shrek1").innerHTML =
    "This is the second slide in the shrek game";
  addT();
  hideBtns();
  document.getElementById("option1").onclick = function myShrek3() {
    document.getElementById("shrek1").innerHTML =
      "This is where the left button takes you second";
  };
}
//This works
function shrek3() {
  document.getElementById("shrek1").innerHTML = "This is the left option.";
  // hideBtns();
  addT();
  // hideBtns();
  document.getElementById("option1").onclick = function myShrek2() {
    document.getElementById("shrek1").innerHTML = "Hello";
  };
}
function shrek4() {
  document.getElementById("shrek1").innerHTML = "This is the right option";
  hideBtns();
}
function shrek5() {
  document.getElementById("shrek1").innerHTML = "This is the right option";
  hideBtns();
}
//#endregion

//#region if else for Donkey
if (t === 105) {
  donkeyL1();
}
//#endregion

//#region donkey code
function donkey1() {
  document.getElementById("donkey").innerHTML = "You see an outhouse.";
  //Code that makes button work
  document.getElementById("option1").onclick = function myDonkeyL1() {
    donkeyL1();
  };
  document.getElementById("option2").onclick = function mydonkeyR1() {
    donkeyR1();
  };
  t = 100;
}
function donkeyL1() {
  document.getElementById("donkey").innerHTML =
    "An ogre come out as you near it.";
  o = "Make a joke";
  document.getElementById("option1").innerHTML = o;
  p = "Make fun of him";
  document.getElementById("option2").innerHTML = p;
  document.getElementById("option1").onclick = function myDonkeyL2() {
    donkeyL2();
  };
  document.getElementById("option2").onclick = function myDonkeyR1a() {
    donkeyR1a();
  };
}

function donkeyR1() {
  document.getElementById("donkey").innerHTML = "This is the Right option";
  document.getElementById("option2").onclick = function myDonkeyR2() {
    donkeyR2();
  };
}
//PERFECT EXAMPLE?
function donkeyL2() {
  document.getElementById("response").innerHTML =
    "He laughs and then procudes to roast you.";
  document.getElementById("donkey").innerHTML =
    "He ask what all the noise is about";
  o =
    "The short king with funny hair kicked all the fairy tales out of the castle";
  document.getElementById("option1").innerHTML = o;
  p = "Nothing dont wory about it";
  document.getElementById("option2").innerHTML = p;
  document.getElementById("option1").onclick = function randomFuntionName() {
    donkeyL1a();
    document.getElementById("option2").onclick = function randomFuntionName() {
      donkeyR1b();
    };
  };
}
function donkeyR2() {
  document.getElementById("donkey").innerHTML =
    "This is the Second Right option";
}
function donkeyR1a() {
  document.getElementById("donkey").innerHTML =
    "He laughs as he thought it was quite cleaver";
}
function donkeyL1a() {
  alert("hello");
}
function donkeyR1b() {
  alert("p3nis");
}

//#endregion

//#region extras
charSelect();

function hideBtns(x, y) {
  x = document.getElementById("option1");
  y = document.getElementById("option2");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "block";
  } else {
    x.style.display = "none";
    y.style.display = "none";
  }
}

function addT() {
  t++;
}

function resetT() {
  t = 1;
}

//#endregion
