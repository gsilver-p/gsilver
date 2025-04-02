document.addEventListener("DOMContentLoaded", () => {
  init()
})

function init() {
  const menuList = ["logo", "home", "profile", "project", "about"]

  menuList.forEach((menu) => {
    document.getElementById(menu).addEventListener("click", () => {
      backgrounds[menu]()
    })
  })
}
