document.addEventListener ("DOMContentLoaded", function () {
    const btn = document.getElementById("logo");
    const homeBtn = document.getElementById("home");
    if (btn) {
      btn.addEventListener ("click", function () {
        window.location.href="/index.html";
      })
    }

    if (homeBtn) {
      homeBtn.addEventListener ("click", function () {
        window.location.href="/index.html";
      })
    }
  })

  document.addEventListener ("DOMContentLoaded", function () {
    init()
  })

  function init() {
    const menuList = ["profile","project","about"];
    
    menuList.forEach((id)=>{
      document.getElementById(id).addEventListener("click", function () {
        document.getElementById("sectionContainer").innerHTML = "<div>"+id+"</div>"
      })
    })
  }