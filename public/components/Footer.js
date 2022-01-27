class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="wrapper-footer">
            <div class="logo-theones">
              <a href=""><img src="./assets/home/logo1-footer.png" alt="" /></a>
            </div>
            <ul class="theones ps-0">
              <h5 class="mb-4">โครงการ</h5>
              <li>
                <p class="mb-0">The One Estate Developer</p>
              </li>
              <div class="theones-menus">
                <li><a href="">โครงการล่าสุด</a></li>
                <li><a href="">โครงการที่ผ่านมา</a></li>
              </div>
              <p class="mb-0">Tenthai Development</p>
              <div class="theones-menus">
                <li><a href="">โครงการล่าสุด</a></li>
                <li><a href="">โครงการที่ผ่านมา</a></li>
              </div>
            </ul>
            <ul class="abouts ps-0">
              <h5 class="mb-4">เกี่ยวกับองค์กร</h5>
              <li><a href="">ประวัติความเป็นมา</a></li>
              <li><a href="">วิสัยทัศน์ และ ภารกิจ</a></li>
              <li><a href="">วิดีโอ</a></li>
            </ul>
            <ul class="services ps-0">
              <li>
                <a href="">
                  <h5>บริการหลังการขาย</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>ขายที่ดิน</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>ติดต่อ</h5>
                </a>
              </li>
            </ul>
            <ul class="works ps-0">
              <li>
                <a href="">
                  <h5>ข่าวสาร</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>ร่วมงานกับเรา</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <h5>ทำเลโครงการ</h5>
                </a>
              </li>
            </ul>
            <div class="footer-horizontal-line"></div>
            <div class="logo-tenthai">
              <img src="./assets/home/logo2-footer.png" alt="logo" />
              <a href="tel:+66 2538 8019">+66 2538 8019</a>
            </div>
          </div>
          <ul class="footer-socials ps-0">
            <a href=""><img src="./assets/home/facebook-pink.png" alt="" /></a>
            <a href=""><img src="./assets/home/instagram-pink.png" alt="" /></a>
            <a href=""><img src="./assets/home/line-pink.png" alt="" /></a>
          </ul>
        </div>
        <div class="footer-underline"></div>
        <p class="copyright mb-0">
          © COPYRIGHT 2022 TENTHAI DEVELOPMENT CO.,LTD ALL RIGHTS RESERVED. I
          Designed by Belong-To
        </p>
      </footer>
    `
  }
}

customElements.define('footer-page', Footer)
