class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <div class="logo-mobile">
            <div style="cursor:pointer">
            <a href=""><img src="./assets/home/logo1-footer.png" alt="logo" /></a>
            <a href=""><img src="./assets/home/logo2-footer.png" alt="logo" /></a>
            </div>
          </div>
          <div class="wrapper-footer">
            <div class="logo-theones">
              <a href=""><img src="./assets/home/logo1-footer.png" alt="" /></a>
            </div>
            <ul class="theones ps-0">
              <h5 class="mb-4">โครงการ</h5>
              <li>
                <p class="mb-0">The One Estate Developer</p>
              </li>
              <div class="services theones-menus">
                <li><a href=""><div class="animated-line pos-10" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(10)" onMouseOut="lineOutHover(10)">โครงการล่าสุด</p></a></li>
                <li><a href=""><div class="animated-line pos-11" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(11)" onMouseOut="lineOutHover(11)">โครงการที่ผ่านมา</p></a></li>
              </div>
              <p class="mb-0">Tenthai Development</p>
              <div class="services theones-menus">
                <li><a href=""><div class="animated-line pos-12" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(12)" onMouseOut="lineOutHover(12)">โครงการล่าสุด</p></a></li>
                <li><a href=""><div class="animated-line pos-13" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(13)" onMouseOut="lineOutHover(13)">โครงการที่ผ่านมา</p></a></li>
              </div>
            </ul>
            <ul class="services abouts ps-0">
              <h5 class="mb-4"><div></div>เกี่ยวกับองค์กร</h5>
              <li onMouseOver="lineOnHover(7)" onMouseOut="lineOutHover(7)"><a href=""><div class="animated-line pos-7" style="bottom: -13px;"></div><p class="mb-0">ประวัติความเป็นมา</p></a></li>
              <li onMouseOver="lineOnHover(8)" onMouseOut="lineOutHover(8)"><a href=""><div class="animated-line pos-8" style="bottom: -13px;"></div><p class="mb-0">วิสัยทัศน์ และ ภารกิจ</p></a></li>
              <li onMouseOver="lineOnHover(9)" onMouseOut="lineOutHover(9)"><a href=""><div class="animated-line pos-9" style="bottom: -13px;"></div><p class="mb-0">วิดีโอ</p></a></li>
            </ul>
            <ul class="services footer-services ps-0">
              <li>
                <a href="">
                  <div class="animated-line pos-1"></div><h5 onMouseOver="lineOnHover(1)" onMouseOut="lineOutHover(1)">บริการหลังการขาย</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <div class="animated-line pos-2"></div><h5 onMouseOver="lineOnHover(2)" onMouseOut="lineOutHover(2)">ขายที่ดิน</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <div class="animated-line pos-3"></div><h5 onMouseOver="lineOnHover(3)" onMouseOut="lineOutHover(3)">ติดต่อ</h5>
                </a>
              </li>
            </ul>
            <ul class="services footer-news ps-0">
              <li>
                <a href="">
                <div class="animated-line pos-4"></div><h5 onMouseOver="lineOnHover(4)" onMouseOut="lineOutHover(4)">ข่าวสาร</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <div class="animated-line pos-5"></div><h5 onMouseOver="lineOnHover(5)" onMouseOut="lineOutHover(5)">ร่วมงานกับเรา</h5>
                </a>
              </li>
              <li>
                <a href="">
                  <div class="animated-line pos-6"></div><h5 onMouseOver="lineOnHover(6)" onMouseOut="lineOutHover(6)">ทำเลโครงการ</h5>
                </a>
              </li>
            </ul>
            <div class="footer-horizontal-line"></div>
            <div class="logo-tenthai">
              <a href=""><img src="./assets/home/logo2-footer.png" alt="logo" /></a>
              <a href="tel:+66 2538 8019">+66 2538 8019</a>
            </div>
          </div>
          <div class="tel-mobile"><a href="tel:+66 2538 8019">+66 2538 8019</a></div>
          <ul class="footer-socials ps-0">
            <a href=""><img src="./assets/home/facebook-pink.png" alt="" /></a>
            <a href=""><img src="./assets/home/instagram-pink.png" alt="" /></a>
            <a href=""><img src="./assets/home/line-pink.png" alt="" /></a>
          </ul>
        </div>
        <div class="footer-underline"></div>
        <p class="copyright mb-0">
          © COPYRIGHT 2022 TENTHAI DEVELOPMENT CO.,LTD ALL RIGHTS RESERVED. I
          Designed by <a href="http://belongto.com" target="_blank">Belong-To</a>
        </p>
      </footer>
    `;
  }
}

customElements.define("footer-page", Footer);
