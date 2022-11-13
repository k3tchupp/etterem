let tipusok = document.getElementsByClassName("tipus");

for (let i = 0; i < tipusok.length; i++) {
  let tipus = tipusok[i];

  etelek = tipus.getElementsByClassName("etel");

  for(let j = 0; j < etelek.length; j++) {
    const etel = etelek[j];

    etel.addEventListener("click", function () {
      if(!tipus.classList.contains("tipus-kivalasztva")) {
        tipus.classList.toggle("tipus-kivalasztva");
      }

      etel.classList.toggle("etel-kivalasztva");

      etelek = tipus.getElementsByClassName("etel");

      var vankivalasztva = false;
      for (let k = 0; k < etelek.length; k++) {
        if (etelek[k].classList.contains("etel-kivalasztva")) {
          vankivalasztva = true;
        }
      }

      if(!vankivalasztva) {
        tipus.classList.toggle("tipus-kivalasztva");
      }
    })
  }

}