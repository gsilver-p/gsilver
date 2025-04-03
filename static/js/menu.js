const backgrounds = {
  logo: () => {
    window.location.reload()
  },
  home: () => {
    window.location.reload()
  },
  profile: () => {
    const sectionContainer = document.getElementById("sectionContainer")

    sectionContainer.innerHTML = `
      <div class="profile">
        <p class="label">이름: </p>
        <p class="key">박지은</p><br>
        <p class="label">나이: </p>
        <p class="key">34세 (1992년)</p><br>
        <p class="label">이메일: </p>
        <p class="key">wldmsdl6276@naver.com</p><br>
        <p class="label">연락처: </p>
        <p class="key">010-5608-6274</p><br>
        <p class="label">github: </p>
        <a class="key" href="https://github.com/gsilver-p">https://github.com/gsilver-p</a><br>
        <p class="label">교육과정: </p>
        <p class="key"><strong>인천일보 아카데미 </strong>2024.09.27 ~ 2025.03.20</p>
      </div>
    `
  },
  project: () => {
    document.getElementById("sectionContainer").innerHTML = `
    <div class="project-container">
      <div class="project-item" onclick="openSlider(0)">
        <img src="img/project1.jpg" alt="Project 1">
        <div class="view-detail">View Detail</div>
      </div>
      <div class="project-item" onclick="openSlider(1)">
        <img src="img/project2.jpg" alt="Project 2">
        <div class="view-detail">View Detail</div>
      </div>
    </div>

    <div id="sliderModal" class="slider-modal" style="display: none;">
      <span class="close" onclick="closeSlider()">&times;</span>
      <div class="slider-content">
        <img id="sliderImage" src="" alt="Project Image">
        <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
        <button class="next" onclick="changeSlide(1)">&#10095;</button>
      </div>
    </div>
  `
  },
  about: () => {
    document.querySelector(".section_container").style.backgroundColor = "red"
  },
}

let currentSlide = 0
const projectImages = ["img/project1.jpg", "img/project2.jpg"]

function openSlider(index) {
  currentSlide = index
  document.getElementById("sliderImage").src = projectImages[currentSlide]
  document.getElementById("sliderModal").style.display = "block"
}

function closeSlider() {
  document.getElementById("sliderModal").style.display = "none"
}

function changeSlide(direction) {
  currentSlide += direction
  if (currentSlide < 0) currentSlide = projectImages.length - 1
  if (currentSlide >= projectImages.length) currentSlide = 0
  document.getElementById("sliderImage").src = projectImages[currentSlide]
}
