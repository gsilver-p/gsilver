const backgrounds = {
  logo: () => {
    window.location.reload()
  },
  home: () => {
    window.location.reload()
  },
  profile: () => {
    const sectionContainer = document.getElementById("sectionContainer");

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
    `;

  },
  project: () => {
    document.querySelector(".section_container").style.backgroundColor = "blue"
    //   style.backgroundColor = "rgb(249, 246, 243)"
  },
  about: () => {
    document.querySelector(".section_container").style.backgroundColor = "red"
  },
}
