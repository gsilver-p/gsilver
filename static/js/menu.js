const projectImages = {
  kakao: [
    "./img/kakao1.png",
    "./img/kakao2.png",
    "./img/kakao3.png",
    "./img/kakao4.png",
  ],
  interior: [
    "./img/interior1.png",
    "./img/interior2.png",
    "./img/interior3.png",
    "./img/interior4.png",
    "./img/interior5.png",
  ],
}

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

document
  .getElementById("sectionContainer")
  .addEventListener("click", (event) => {
    const item = event.target.closest(".project-item")
    if (!item) {
      return
    }

    const project = item.getAttribute("data-project").toLowerCase()

    if (projectImages[project]) {
      openSlider(projectImages[project])
    }
  })

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
            <div class="project-item" data-project="kakao">
              <img src="./img/kakao.png" alt="miniProject">
              <div class="view-detail">View Detail</div>
            </div>
            <div class="project-item" data-project="interior">
              <img src="./img/interior6.png" alt="Interior">
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

    document.querySelectorAll(".project-item").forEach((item) => {
      item.addEventListener("click", () => {
        const project = item.getAttribute("data-project").toLowerCase()
        if (projectImages[project]) {
          openSlider(projectImages[project])
        }
      })
    })
  },

  about: () => {
    document.querySelector(".section_container").style.backgroundColor = "black"
  },
}

// 슬라이드 팝업 열기
function openSlider(images) {
    if (!images || images.length === 0) {
      console.log("❌ 이미지가 없음!", images);
      return;
    }
  
    let currentIndex = 0;
  
    // 기존 팝업이 있다면 삭제 후 다시 생성
    const existingPopup = document.querySelector(".popup");
    if (existingPopup) {
      existingPopup.remove();
    }
  
    // 팝업 HTML 생성
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
        <div class="popup-content">
            <span class="close">&times;</span>
            <div class="slider-container">
                <div class="image-track">
                    ${images.map(img => `<img src="${img}" class="popup-image">`).join("")}
                </div>
            </div>
            <button class="prev">&lt;</button>
            <button class="next">&gt;</button>
        </div>
    `;
    document.body.appendChild(popup);

    const imageTrack = popup.querySelector(".image-track");
    const prevBtn = popup.querySelector(".prev");
    const nextBtn = popup.querySelector(".next");
    const closeBtn = popup.querySelector(".close");

    function updateSlide() {
        imageTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    });

    closeBtn.addEventListener("click", () => popup.remove());
}
  