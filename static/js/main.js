document.addEventListener("DOMContentLoaded", () => {
  init()
})

function init() {
  const menuList = ["logo", "Home", "Profile", "Project", "Skill"]

  menuList.forEach((menu) => {
    document.getElementById(menu).addEventListener("click", () => {
      backgrounds[menu]()
    })
  })
}
