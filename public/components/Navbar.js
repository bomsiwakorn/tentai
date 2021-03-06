class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <header class="nav-top">
    <div class="container">
      <div class="wrapper-nav-top">
          <a href="/" class="logo">
            <div class="logo-items">
              <img src="./assets/home/logo-group.jpg" alt="logo" />
            </div>
          </a>
        <div class="home">
          <ul class="mainpage mb-0">
            <li data-lang="en"><a href="/">HOME</a></li>
            <li data-lang="th"><a href="/">หน้าหลัก</a></li>
            <li data-lang="ch"><a href="/">首页</a></li>
          </ul>

          <select class="dropdown-language" id="change-language">
            <option value="en" selected="selected">EN</option>
            <option value="th">TH</option>
            <option value="ch">CN</option>
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
        <li data-lang="en"><a href="/projects.html" class="menuItem-projects">PROJECTS</a></li>
        <li data-lang="th"><a href="/projects.html" class="menuItem-projects">โครงการ</a></li>
        <li data-lang="ch"><a href="/projects.html" class="menuItem-projects">项目介绍</a></li>
        <li data-lang="en"><a href="/corporate.html" class="menuItem-corporate">CORPORATE</a></li>
        <li data-lang="th"><a href="/corporate.html" class="menuItem-corporate">เกี่ยวกับองค์กร</a></li>
        <li data-lang="ch"><a href="/corporate.html" class="menuItem-corporate">关于力萬</a></li>
        <li data-lang="en"><a href="/after-sale.html" class="menuItem-after-sale">AFTER SALES SERVICE</a></li>
        <li data-lang="th"><a href="/after-sale.html" class="menuItem-after-sale">บริการหลังการขาย</a></li>
        <li data-lang="ch"><a href="/after-sale.html" class="menuItem-after-sale">售后服务</a></li>
        <li data-lang="en"><a href="/news.html" class="menuItem-news">NEWS</a></li>
        <li data-lang="th"><a href="/news.html" class="menuItem-news">ข่าวสาร</a></li>
        <li data-lang="ch"><a href="/news.html" class="menuItem-news">新闻资讯</a></li>
        <li data-lang="en"><a href="/land-selling.html" class="menuItem-land-selling">LAND SELLING</a></li>
        <li data-lang="th"><a href="/land-selling.html" class="menuItem-land-selling">ขายที่ดิน</a></li>
        <li data-lang="ch"><a href="/land-selling.html" class="menuItem-land-selling">土地出售</a></li>
        <li data-lang="en"><a href="/career.html" class="menuItem-career">CAREER</a></li>
        <li data-lang="th"><a href="/career.html" class="menuItem-career">ร่วมงานกับเรา</a></li>
        <li data-lang="ch"><a href="/career.html" class="menuItem-career">市场合作</a></li>
        <li data-lang="en"><a href="/contact.html" class="menuItem-contact">CONTACT</a></li>
        <li data-lang="th"><a href="/contact.html" class="menuItem-contact">ติดต่อเรา</a></li>
        <li data-lang="ch"><a href="/contact.html" class="menuItem-contact">联系我们</a></li>
        <li data-lang="en">
          <a href="/map.html" class="menuItem-map" target="_blank">PROJECTS LOCATION</a>
        </li>
        <li data-lang="th">
          <a href="/map.html" class="menuItem-map" target="_blank">ทำเลโครงการ</a>
        </li>
        <li data-lang="ch"><a href="/map.html" class="menuItem-map" target="_blank">项目地图</a></li>
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
          ><p class="mb-0">The One Estate Development</p></a
        >
        <a data-lang="th" href="/projects.html"
          ><p class="mb-0">เดอะ วัน เอสเตท ดีเวลลอปเม้นท์</p></a
        >
        <a data-lang="ch" href="/projects.html"
          ><p class="mb-0">力萬房地产开发有限公司</p></a
        >
        <div class="theones-menus-moblie ms-4">
          <div data-lang="en"><a href="/projects.html">Latest Projects</a></div>
          <div data-lang="th"><a href="/projects.html">โครงการล่าสุด</a></div>
          <div data-lang="ch"><a href="/projects.html">最新项目</a></div>
          <div data-lang="en">
            <a href="/projects.html#past-project">Past Project</a>
          </div>
          <div data-lang="th">
            <a href="/projects.html#past-project">โครงการที่ผ่านมา</a>
          </div>
          <div data-lang="ch">
            <a href="/projects.html#past-project">历史项目</a>
          </div>
        </div>
        <a href="/projects.html"
          ><p data-lang="en" class="mb-0">Tenthai Development</p></a
        >
        <a href="/projects.html"
          ><p data-lang="th" class="mb-0">เท็นไทย ดีเวลลอปเม้นท์</p></a
        >
        <a href="/projects.html"
          ><p data-lang="ch" class="mb-0">天泰发展有限公司</p></a
        >
        <div class="theones-menus-moblie ms-4">
          <div data-lang="en"><a href="/projects.html">Latest Projects</a></div>
          <div data-lang="th"><a href="/projects.html">โครงการล่าสุด</a></div>
          <div data-lang="ch"><a href="/projects.html">最新项目</a></div>
          <div data-lang="en">
            <a href="/projects.html#past-project">Past Project</a>
          </div>
          <div data-lang="th">
            <a href="/projects.html#past-project">โครงการที่ผ่านมา</a>
          </div>
          <div data-lang="ch">
            <a href="/projects.html#past-project">历史项目</a>
          </div>
        </div>
      </div>
      <li data-lang="th"><a href="/corporate.html">เกี่ยวกับองค์กร</a></li>
      <li data-lang="ch"><a href="/corporate.html">关于力萬</a></li>
      <li data-lang="en"><a href="/after-sale.html">AFTER SALES SERVICE</a></li>
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
  

    `
  }
}

customElements.define('navbar-page', Navbar)
