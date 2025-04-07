// 프로젝트 이미지
const projectImages = {
  kakao: [
    "./img/kakao-info.jpg",
    "./img/kakao1.png",
    "./img/kakao2.png",
    "./img/kakao3.png",
    "./img/kakao4.png",
  ],
  interior: [
    "./img/interior-info.jpg",
    "./img/interior1.png",
    "./img/interior2.png",
    "./img/interior3.png",
    "./img/interior4.png",
    "./img/interior5.png",
  ],
}

// 깃 링크
const githubLinks = {
  kakao: Array(5).fill(null),
  interior: Array(6).fill("https://github.com/SouthSea0613/sheep/")
};

// 스킬 이미지
const skillImages = [
  "./img/skill1.png",
  "./img/skill2.png",
  "./img/skill3.png",
  "./img/skill4.png"
];

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

document
  .getElementById("sectionContainer")
  .addEventListener("click", (event) => {
    const item = event.target.closest(".project-item")
    if (!item) {
      return
    }

    const project = item.getAttribute("data-project").toLowerCase()

    if (projectImages[project]) {
      openSlider(projectImages[project],project)
    }
  })

const backgrounds = {
  logo: () => {
    window.location.reload()
  },

  Home: () => {
    window.location.reload()
  },

  Profile: () => {
    const sectionContainer = document.getElementById("sectionContainer")

    sectionContainer.innerHTML = `
              <div class="menu-name">Profile</div>
              <div>
              <img src="./img/jieun.jpg" class="jieun" alt="jieun">
              </div>
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

  Project: () => {
    document.getElementById("sectionContainer").innerHTML = `
            <div class="menu-name">Project</div>
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

  Skill: () => {
    document.getElementById("sectionContainer").innerHTML = `
      <div class="menu-name">Skill</div>
      <div class="skill-slider">
        <img id="skillImage" src="${skillImages[0]}" class="skill-img">
          <button id="skillPrev" class="skill-btn">&lt;</button>
          <button id="skillNext" class="skill-btn">&gt;</button>
      </div>
    `;
  
    let currentSkillIndex = 0;
    const skillImage = document.getElementById("skillImage");
  
    document.getElementById("skillPrev").addEventListener("click", () => {
      currentSkillIndex = (currentSkillIndex - 1 + skillImages.length) % skillImages.length;
      skillImage.src = skillImages[currentSkillIndex];
    });
  
    document.getElementById("skillNext").addEventListener("click", () => {
      currentSkillIndex = (currentSkillIndex + 1) % skillImages.length;
      skillImage.src = skillImages[currentSkillIndex];
    });
  },

  about: () => {

  }
}

// 프로젝트 슬라이드 팝업 열기
function openSlider(images, projectKey) {
    if (!images || images.length === 0) {
      return;
    }
  
    let currentIndex = 0;
  
    // 기존 팝업이 있다면 삭제 후 다시 생성
    const existingPopup = document.querySelector(".popup");
    if (existingPopup) {
      existingPopup.remove();
    }

    // 깃 주소 넣기
  function updateGithubLink(index) {
  const container = document.getElementById("github-link-container");
  container.innerHTML = ""; // 초기화

  const links = githubLinks[projectKey];
  const link = links?.[index];
  if (link) {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.target = "_blank";
    anchor.className = "github-link";
    anchor.textContent = "GitHub 바로가기";
    container.appendChild(anchor);
  }
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
            <div id="github-link-container"></div>
            <button class="prev">&lt;</button>
            <button class="next">&gt;</button>
        </div>
    `;
    document.body.appendChild(popup);
    updateGithubLink(currentIndex);
    

    const imageTrack = popup.querySelector(".image-track");
    const prevBtn = popup.querySelector(".prev");
    const nextBtn = popup.querySelector(".next");
    const closeBtn = popup.querySelector(".close");

    function updateSlide() {
        imageTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateGithubLink(currentIndex);
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
  