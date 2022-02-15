class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

        <header class="nav-top">
          <div class="container">
            <div class="wrapper-nav-top">
              <div class="logo">
                <div class="logo-items">
                  <a href="/"><img src="./assets/home/logo1-nav.png" alt="logo" /></a>
                </div>
                <div class="logo-items ms-4">
                  <a href="/"><img src="./assets/home/logo2-nav.png" alt="logo" /></a>
                </div>
              </div>
              <div class="home">
                <ul class="mainpage mb-0">
                  <li><a href="/">หน้าหลัก</a></li>
                </ul>

                <select class="dropdown-language" id="change-language">
                  <option value="en">EN</option>
                  <option value="th">ไทย</option>
                  <option value="ch">中文</option>
                </select>
                <div class="hamberger-menu" onClick="hambergerMenu()"><i class="fa-solid fa-ellipsis-vertical"></i></div>
              </div>
            </div>
          </div>
        </header>
        <nav class="nav-bottom"Í>
          <div class="container">
            <ul class="menu mb-0 ps-0">
              <li><a href="/projects.html">โครงการ</a></li>
              <li><a href="/corporate.html">เกี่ยวกับองค์กร</a></li>
              <li><a href="/after-sale.html">บริการหลังการขาย</a></li>
              <li><a href="/news.html">ข่าวสาร</a></li>
              <li><a href="/land-selling.html">ขายที่ดิน</a></li>
              <li><a href="/career.html">ร่วมงานกับเรา</a></li>
              <li><a href="/contact.html">ติดต่อเรา</a></li>
              <li><a href="/map.html" target="_blank">แผนที่โครงการ</a></li>
            </ul>
          </div>
        </nav>
        <nav class="nav-moblie">
        <ul class="menu-moblie mb-0 ps-0">
          <li id="project-toggle" onclick="projectToggle(1)">โครงการ<i class="fas fa-caret-down"></i></li>
          <div class="projects-box" id="projects-box">
            <a href="/projects.html"><p class="mb-0">The One Estate Developer</p></a>
            <div class="theones-menus-moblie ms-4">
              <div><a href="/projects.html"> โครงการล่าสุด</a></div>
              <div><a href="/projects.html#past-project"> โครงการที่ผ่านมา</a></div>
            </div>
            <a href="/projects.html"><p class="mb-0">Tenthai Development</p></a>
            <div class="theones-menus-moblie ms-4">
              <div><a href="/projects.html"> โครงการล่าสุด</a></div>
              <div><a href="/projects.html#past-project"> โครงการที่ผ่านมา</a></div>
            </div>
          </div>
          <li><a href="/corporate.html">เกี่ยวกับองค์กร</a></li>
          <li><a href="/after-sale.html">บริการหลังการขาย</a></li>
          <li><a href="/news.html">ข่าวสาร</a></li>
          <li><a href="/land-selling.html">ขายที่ดิน</a></li>
          <li><a href="/career.html">ร่วมงานกับเรา</a></li>
          <li><a href="/contact.html">ติดต่อเรา</a></li>
          <li><a href="/map.html" target="_blank">แผนที่โครงการ</a></li>
        </ul>
      </nav>

    `
  }
}

customElements.define('navbar-page', Navbar)
