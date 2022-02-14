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
              </div>
            </div>
          </div>
        </header>
        <nav class="nav-bottom">
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

    `;
  }
}

customElements.define("navbar-page", Navbar);
