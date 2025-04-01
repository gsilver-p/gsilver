document.addEventListener ("DOMContentLoaded", () => {
    const btn = document.getElementById("logo");
    const homeBtn = document.getElementById("home");
    
    if (btn) {
      btn.addEventListener ("click", () => {
        window.location.href="index.html";
      })
    }

    if (homeBtn) {
      homeBtn.addEventListener ("click", () => {
        window.location.href="index.html";
      })
    }
  })

  document.addEventListener ("DOMContentLoaded", () => {
    init()
  })

  function init() {
    const menuList = ["profile","project","about"];
    const menuBar = document.querySelectorAll(".side_bar");
    const container = document.querySelector(".section_container");

    const backgrounds = {
        home : () => { window.location.href="index.html" },
        profile : () => {} ,
        project : () => { style.backgroundColor="rgb(249, 246, 243)"},
        about : () => {}
    }

    if( key === "home") {
        backgrounds.home()
    } else {
        document.querySelector(".section_container").style.backgroundImage = backgrounds[key];
    }
  }
