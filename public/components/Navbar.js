class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <header class="nav-top">
    <div class="container">
      <div class="wrapper-nav-top">
          <a href="/" class="logo">
            <div class="logo-items">
              <img src="./assets/home/logo1-nav.png" alt="logo" />
            </div>
            <div class="logo-items ms-4">
              <img src="./assets/home/logo2-nav.png" alt="logo" />
            </div>
          </a>
        <div class="home">
          <ul class="mainpage mb-0">
            <li data-lang="en"><a href="/">HOME</a></li>
            <li data-lang="th"><a href="/">หน้าหลัก</a></li>
            <li data-lang="ch"><a href="/">HOME</a></li>
          </ul>
  
          <select class="dropdown-language" id="change-language">
            <option value="en">EN</option>
            <option value="th">ไทย</option>
            <option value="ch">中文</option>
          </select>
          <div class="hamberger-menu" onClick="hambergerMenuOpen()">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
        </div>
      </div>
    </div>
  </header>
  <nav class="nav-bottom">
    <div class="container">
      <ul class="menu mb-0 ps-0">
        <li data-lang="en"><a href="/projects.html">PROJECTS</a></li>
        <li data-lang="th"><a href="/projects.html">โครงการ</a></li>
        <li data-lang="ch"><a href="/projects.html">项目介绍</a></li>
        <li data-lang="en"><a href="/corporate.html">CORPORATE</a></li>
        <li data-lang="th"><a href="/corporate.html">เกี่ยวกับองค์กร</a></li>
        <li data-lang="ch"><a href="/corporate.html">关于力萬</a></li>
        <li data-lang="en"><a href="/after-sale.html">AFTER SALE SERVICE</a></li>
        <li data-lang="th"><a href="/after-sale.html">บริการหลังการขาย</a></li>
        <li data-lang="ch"><a href="/after-sale.html">售后服务</a></li>
        <li data-lang="en"><a href="/news.html">NEWS</a></li>
        <li data-lang="th"><a href="/news.html">ข่าวสาร</a></li>
        <li data-lang="ch"><a href="/news.html">新闻资讯</a></li>
        <li data-lang="en"><a href="/land-selling.html">LAND SELLING</a></li>
        <li data-lang="th"><a href="/land-selling.html">ขายที่ดิน</a></li>
        <li data-lang="ch"><a href="/land-selling.html">土地出售</a></li>
        <li data-lang="en"><a href="/career.html">CAREER</a></li>
        <li data-lang="th"><a href="/career.html">ร่วมงานกับเรา</a></li>
        <li data-lang="ch"><a href="/career.html">市场合作</a></li>
        <li data-lang="en"><a href="/contact.html">CONTACT</a></li>
        <li data-lang="th"><a href="/contact.html">ติดต่อเรา</a></li>
        <li data-lang="ch"><a href="/contact.html">联系我们</a></li>
        <li data-lang="en">
          <a href="/map.html" target="_blank">PROJECTS LOCATION</a>
        </li>
        <li data-lang="th">
          <a href="/map.html" target="_blank">ทำเลโครงการ</a>
        </li>
        <li data-lang="ch"><a href="/map.html" target="_blank">项目地图</a></li>
      </ul>
    </div>
  </nav>
  <nav class="nav-moblie">
    <ul class="menu-moblie mb-0 ps-0">
      <div class="close-mark" onclick="hambergerMenuClose()">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <li data-lang="en" id="project-toggle" onclick="projectToggle(1)">
        <span style="cursor: pointer"
          >PROJECTS<i class="fas fa-caret-down"></i
        ></span>
      </li>
      <li data-lang="th" id="project-toggle" onclick="projectToggle(1)">
        <span style="cursor: pointer"
          >โครงการ<i class="fas fa-caret-down"></i
        ></span>
      </li>
      <li data-lang="ch" id="project-toggle" onclick="projectToggle(1)">
        <span style="cursor: pointer"
          >项目介绍<i class="fas fa-caret-down"></i
        ></span>
      </li>
      <div class="projects-box" id="projects-box">
        <a data-lang="en" href="/projects.html"
          ><p class="mb-0">The One Estate Developer</p></a
        >
        <a data-lang="th" href="/projects.html"
          ><p class="mb-0">เดอะ วัน เอสเตท ดีเวลลอปเม้นท์</p></a
        >
        <a data-lang="ch" href="/projects.html"
          ><p class="mb-0">The One Estate Developer</p></a
        >
        <div class="theones-menus-moblie ms-4">
          <div data-lang="en"><a href="/projects.html">Latest Projects</a></div>
          <div data-lang="th"><a href="/projects.html">โครงการล่าสุด</a></div>
          <div data-lang="ch"><a href="/projects.html">Latest Projects</a></div>
          <div data-lang="en">
            <a href="/projects.html#past-project">Past Project</a>
          </div>
          <div data-lang="th">
            <a href="/projects.html#past-project">โครงการที่ผ่านมา</a>
          </div>
          <div data-lang="ch">
            <a href="/projects.html#past-project">Past Project</a>
          </div>
        </div>
        <a href="/projects.html"
          ><p data-lang="en" class="mb-0">Tenthai Development</p></a
        >
        <a href="/projects.html"
          ><p data-lang="th" class="mb-0">เท็นไทย ดีเวลลอปเม้นท์</p></a
        >
        <a href="/projects.html"
          ><p data-lang="ch" class="mb-0">Tenthai Development</p></a
        >
        <div class="theones-menus-moblie ms-4">
          <div data-lang="en"><a href="/projects.html">Latest Projects</a></div>
          <div data-lang="th"><a href="/projects.html">โครงการล่าสุด</a></div>
          <div data-lang="ch"><a href="/projects.html">Latest Projects</a></div>
          <div data-lang="en">
            <a href="/projects.html#past-project">Past Project</a>
          </div>
          <div data-lang="th">
            <a href="/projects.html#past-project">โครงการที่ผ่านมา</a>
          </div>
          <div data-lang="ch">
            <a href="/projects.html#past-project">Past Project</a>
          </div>
        </div>
      </div>
      <li data-lang="th"><a href="/corporate.html">เกี่ยวกับองค์กร</a></li>
      <li data-lang="ch"><a href="/corporate.html">关于力萬</a></li>
      <li data-lang="en"><a href="/after-sale.html">AFTER SALE SERVICE</a></li>
      <li data-lang="th"><a href="/after-sale.html">บริการหลังการขาย</a></li>
      <li data-lang="ch"><a href="/after-sale.html">售后服务</a></li>
      <li data-lang="en"><a href="/news.html">NEWS</a></li>
      <li data-lang="th"><a href="/news.html">ข่าวสาร</a></li>
      <li data-lang="ch"><a href="/news.html">新闻资讯</a></li>
      <li data-lang="en"><a href="/land-selling.html">LAND SELLING</a></li>
      <li data-lang="th"><a href="/land-selling.html">ขายที่ดิน</a></li>
      <li data-lang="ch"><a href="/land-selling.html">土地出售</a></li>
      <li data-lang="en"><a href="/career.html">CAREER</a></li>
      <li data-lang="th"><a href="/career.html">ร่วมงานกับเรา</a></li>
      <li data-lang="ch"><a href="/career.html">市场合作</a></li>
      <li data-lang="en"><a href="/contact.html">CONTACT</a></li>
      <li data-lang="th"><a href="/contact.html">ติดต่อเรา</a></li>
      <li data-lang="ch"><a href="/contact.html">联系我们</a></li>
      <li data-lang="en">
        <a href="/map.html" target="_blank">PROJECTS LOCATION</a>
      </li>
      <li data-lang="th">
        <a href="/map.html" target="_blank">ทำเลโครงการ</a>
      </li>
      <li data-lang="ch"><a href="/map.html" target="_blank">项目地图</a></li>
    </ul>
  </nav>
  

    `;
  }
}

customElements.define("navbar-page", Navbar);
