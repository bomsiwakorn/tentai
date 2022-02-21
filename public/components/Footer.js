class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <a href="/" class="logo-mobile" style="text-decoration: none;">
            <div style="cursor:pointer">
              <img class="me-3" src="./assets/home/logo1-footer.png" alt="logo" />
              <img src="./assets/home/logo2-footer.png" alt="logo" />
            </div>
          </a>
          <div class="wrapper-footer">
            <div class="logo-theones">
              <a href="/"><img src="./assets/home/logo1-footer.png" alt="logo" /></a>
            </div>
            <ul class="services theones ps-0">
              <li data-lang="en"><a href="/projects.html"><div class="animated-line pos-26"></div><h5 class="mb-4"  onMouseOver="lineOnHover(26)" onMouseOut="lineOutHover(26)">PROJECTS</h5></li>
              <li data-lang="th"><a href="/projects.html"><div class="animated-line pos-24"></div><h5 class="mb-4"  onMouseOver="lineOnHover(24)" onMouseOut="lineOutHover(24)">โครงการ</h5></li>
              <li data-lang="ch"><a href="/projects.html"><div class="animated-line pos-25"></div><h5 class="mb-4"  onMouseOver="lineOnHover(25)" onMouseOut="lineOutHover(25)">项目介绍</h5></li>
              <li data-lang="en"><a href="/projects.html"><p class="mb-0">The One Estate Developer</p></a></li>
              <li data-lang="th"><a href="/projects.html"><p class="mb-0">เดอะ วัน เอสเตท ดีเวลลอปเม้นท์</p></a></li>
              <li data-lang="ch"><a href="/projects.html"><p class="mb-0">力萬房地产开发有限公司</p></a></li>
              <div class="services theones-menus">
                <li data-lang="en"><a href="/projects.html"><div class="animated-line pos-27" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(27)" onMouseOut="lineOutHover(27)">Latest Projects</p></a></li>
                <li data-lang="th"><a href="/projects.html"><div class="animated-line pos-28" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(28)" onMouseOut="lineOutHover(28)">โครงการล่าสุด</p></a></li>
                <li data-lang="ch"><a href="/projects.html"><div class="animated-line pos-29" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(29)" onMouseOut="lineOutHover(29)">最新项目</p></a></li>
                <li data-lang="en"><a href="/projects.html#past-project"><div class="animated-line pos-30" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(30)" onMouseOut="lineOutHover(30)">Past Project</p></a></li>
                <li data-lang="th"><a href="/projects.html#past-project"><div class="animated-line pos-31" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(31)" onMouseOut="lineOutHover(31)">โครงการที่ผ่านมา</p></a></li>
                <li data-lang="ch"><a href="/projects.html#past-project"><div class="animated-line pos-32" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(32)" onMouseOut="lineOutHover(32)">历史项目</p></a></li>
              </div>
                <a data-lang="en" href="/projects.html"><p class="mb-0">Tenthai Development</p></a>
                <a data-lang="th" href="/projects.html"><p class="mb-0">เท็นไทย ดีเวลลอปเม้นท์</p></a>
                <a data-lang="ch" href="/projects.html"><p class="mb-0">天泰发展有限公司</p></a>
              <div class="services theones-menus">
                <li data-lang="en"><a href="/projects.html"><div class="animated-line pos-33" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(33)" onMouseOut="lineOutHover(33)">Latest Projects</p></a></li>
                <li data-lang="th"><a href="/projects.html"><div class="animated-line pos-34" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(34)" onMouseOut="lineOutHover(34)">โครงการล่าสุด</p></a></li>
                <li data-lang="ch"><a href="/projects.html"><div class="animated-line pos-35" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(35)" onMouseOut="lineOutHover(35)">最新项目</p></a></li>
                <li data-lang="en"><a href="/projects.html#past-project"><div class="animated-line pos-36" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(36)" onMouseOut="lineOutHover(36)">Past Project</p></a></li>
                <li data-lang="th"><a href="/projects.html#past-project"><div class="animated-line pos-37" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(37)" onMouseOut="lineOutHover(37)">โครงการที่ผ่านมา</p></a></li>
                <li data-lang="ch"><a href="/projects.html#past-project"><div class="animated-line pos-38" style="bottom: -13px;"></div><p class="mb-0" onMouseOver="lineOnHover(38)" onMouseOut="lineOutHover(38)">历史项目</p></a></li>
              </div>
            </ul>
            <ul class="services abouts ps-0">
              <li data-lang="en" ><a href="/corporate.html"><div class="animated-line pos-39"></div><h5 class="mb-4" onMouseOver="lineOnHover(39)" onMouseOut="lineOutHover(39)">CORPORATE</h5></a></li>
              <li data-lang="th" ><a href="/corporate.html"><div class="animated-line pos-40"></div><h5 class="mb-4" onMouseOver="lineOnHover(40)" onMouseOut="lineOutHover(40)">เกี่ยวกับองค์กร</h5></a></li>
              <li data-lang="ch" ><a href="/corporate.html"><div class="animated-line pos-41"></div><h5 class="mb-4" onMouseOver="lineOnHover(41)" onMouseOut="lineOutHover(41)">关于力萬</h5></a></li>
              <li data-lang="en" onMouseOver="lineOnHover(42)" onMouseOut="lineOutHover(42)"><a href="/corporate.html#history-company"><div class="animated-line pos-42" style="bottom: -13px;"></div><p class="mb-0">Background</p></a></li>
              <li data-lang="th" onMouseOver="lineOnHover(43)" onMouseOut="lineOutHover(43)"><a href="/corporate.html#history-company"><div class="animated-line pos-43" style="bottom: -13px;"></div><p class="mb-0">ประวัติความเป็นมา</p></a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(44)" onMouseOut="lineOutHover(44)"><a href="/corporate.html#history-company"><div class="animated-line pos-44" style="bottom: -13px;"></div><p class="mb-0">背景</p></a></li>
              <li data-lang="en" onMouseOver="lineOnHover(45)" onMouseOut="lineOutHover(45)"><a href="/corporate.html#vision"><div class="animated-line pos-45" style="bottom: -13px;"></div><p class="mb-0">Vision & VDO</p></a></li>
              <li data-lang="th" onMouseOver="lineOnHover(46)" onMouseOut="lineOutHover(46)"><a href="/corporate.html#vision"><div class="animated-line pos-46" style="bottom: -13px;"></div><p class="mb-0">วิสัยทัศน์และวิดีโอ</p></a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(47)" onMouseOut="lineOutHover(47)"><a href="/corporate.html#vision"><div class="animated-line pos-47" style="bottom: -13px;"></div><p class="mb-0">愿景 & 视频</p></a></li>
            </ul>
            <ul class="services footer-services ps-0">
            <li data-lang="en">
                <a href="/after-sale.html">
                  <div class="animated-line pos-48"></div><h5 onMouseOver="lineOnHover(48)" onMouseOut="lineOutHover(48)">AFTER SALE SERVICE</h5>
                </a>
              </li>
              <li data-lang="th">
                <a href="/after-sale.html">
                  <div class="animated-line pos-49"></div><h5 onMouseOver="lineOnHover(49)" onMouseOut="lineOutHover(49)">บริการหลังการขาย</h5>
                </a>
              </li>
              <li data-lang="ch">
                <a href="/after-sale.html">
                  <div class="animated-line pos-50"></div><h5 onMouseOver="lineOnHover(50)" onMouseOut="lineOutHover(50)">关于力萬</h5>
                </a>
              </li>

              <li data-lang="en">
                <a href="/land-selling.html">
                  <div class="animated-line pos-53"></div><h5 onMouseOver="lineOnHover(53)" onMouseOut="lineOutHover(53)">LAND SELLING</h5>
                </a>
              </li>
              <li data-lang="th">
                <a href="/land-selling.html">
                  <div class="animated-line pos-52"></div><h5 onMouseOver="lineOnHover(52)" onMouseOut="lineOutHover(52)">ขายที่ดิน</h5>
                </a>
              </li>
              <li data-lang="ch">
                <a href="/land-selling.html">
                  <div class="animated-line pos-51"></div><h5 onMouseOver="lineOnHover(51)" onMouseOut="lineOutHover(51)">土地出售</h5>
                </a>
              </li>
              
              <li data-lang="en">
                <a href="/contact.html">
                  <div class="animated-line pos-54"></div><h5 onMouseOver="lineOnHover(54)" onMouseOut="lineOutHover(54)">CONTACT</h5>
                </a>
              </li>
              <li data-lang="th">
                <a href="/contact.html">
                  <div class="animated-line pos-55"></div><h5 onMouseOver="lineOnHover(55)" onMouseOut="lineOutHover(55)">ติดต่อเรา</h5>
                </a>
              </li>
              <li data-lang="ch">
                <a href="/contact.html">
                  <div class="animated-line pos-56"></div><h5 onMouseOver="lineOnHover(56)" onMouseOut="lineOutHover(56)">联系我们</h5>
                </a>
              </li>
            </ul>
            <ul class="services footer-news ps-0">
              <li data-lang="ch">
                <a href="/news.html">
                  <div class="animated-line pos-57"></div><h5 onMouseOver="lineOnHover(57)" onMouseOut="lineOutHover(57)">新闻资讯</h5>
                </a>
              </li>
              <li data-lang="th">
                <a href="/news.html">
                  <div class="animated-line pos-58"></div><h5 onMouseOver="lineOnHover(58)" onMouseOut="lineOutHover(58)">ข่าวสาร</h5>
                </a>
              </li>
              <li data-lang="en">
                <a href="/news.html">
                  <div class="animated-line pos-59"></div><h5 onMouseOver="lineOnHover(59)" onMouseOut="lineOutHover(59)">NEWS</h5>
                </a>
              </li>
              <li data-lang="ch">
                <a href="/career.html">
                  <div class="animated-line pos-60"></div><h5 onMouseOver="lineOnHover(60)" onMouseOut="lineOutHover(60)">市场合作</h5>
                </a>
              </li>
              <li data-lang="th">
                <a href="/career.html">
                  <div class="animated-line pos-61"></div><h5 onMouseOver="lineOnHover(61)" onMouseOut="lineOutHover(61)">ร่วมงานกับเรา</h5>
                </a>
              </li>
              <li data-lang="en">
                <a href="/career.html">
                  <div class="animated-line pos-62"></div><h5 onMouseOver="lineOnHover(62)" onMouseOut="lineOutHover(62)">CAREER</h5>
                </a>
              </li>
              <li data-lang="ch">
                <a href="/map.html">
                  <div class="animated-line pos-63"></div><h5 onMouseOver="lineOnHover(63)" onMouseOut="lineOutHover(63)">项目地图</h5>
                </a>
              </li>
              <li data-lang="th">
                <a href="/map.html">
                  <div class="animated-line pos-64"></div><h5 onMouseOver="lineOnHover(64)" onMouseOut="lineOutHover(64)">ทำเลโครงการ</h5>
                </a>
              </li>
              <li data-lang="en">
                <a href="/map.html">
                  <div class="animated-line pos-65"></div><h5 onMouseOver="lineOnHover(65)" onMouseOut="lineOutHover(65)">OUR LOCATION</h5>
                </a>
              </li>
            </ul>
            <div class="footer-horizontal-line"></div>
            <div class="logo-tenthai">
              <a href="/"><img src="./assets/home/logo2-footer.png" alt="logo" /></a>
              <a href="tel:+66 2538 8019">+66 2538 8019</a>
            </div>
          </div>
          <div class="wrapper-footer-moblie">
            <ul class="services services-1 ps-0">
              <li data-lang="ch" onMouseOver="lineOnHover(66)" onMouseOut="lineOutHover(66)"><a href="/projects.html"><div class="animated-line pos-66" style="bottom: -13px;"></div>项目介绍</a></li>
              <li data-lang="th" onMouseOver="lineOnHover(67)" onMouseOut="lineOutHover(67)"><a href="/projects.html"><div class="animated-line pos-67" style="bottom: -13px;"></div>โครงการ</a></li>
              <li data-lang="en" onMouseOver="lineOnHover(68)" onMouseOut="lineOutHover(68)"><a href="/projects.html"><div class="animated-line pos-68" style="bottom: -13px;"></div>PROJECTS</a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(69)" onMouseOut="lineOutHover(69)"><a href="/corporate.html"><div class="animated-line pos-69" style="bottom: -13px;"></div>关于力萬</a></li>
              <li data-lang="th" onMouseOver="lineOnHover(70)" onMouseOut="lineOutHover(70)"><a href="/corporate.html"><div class="animated-line pos-70" style="bottom: -13px;"></div>เกี่ยวกับองค์กร</a></li>
              <li data-lang="en" onMouseOver="lineOnHover(71)" onMouseOut="lineOutHover(71)"><a href="/corporate.html"><div class="animated-line pos-71" style="bottom: -13px;"></div>CORPORATE</a></li>
              <li data-lang="en" onMouseOver="lineOnHover(72)" onMouseOut="lineOutHover(72)"><a href="/after-sale.html"><div class="animated-line pos-72" style="bottom: -13px;"></div>AFTER SALE SERVICE</a></li>
              <li data-lang="th" onMouseOver="lineOnHover(73)" onMouseOut="lineOutHover(73)"><a href="/after-sale.html"><div class="animated-line pos-73" style="bottom: -13px;"></div>บริการหลังการขาย</a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(74)" onMouseOut="lineOutHover(74)"><a href="/after-sale.html"><div class="animated-line pos-74" style="bottom: -13px;"></div>售后服务</a></li>
              <li data-lang="en" onMouseOver="lineOnHover(75)" onMouseOut="lineOutHover(75)"><a href="/news.html"><div class="animated-line pos-75" style="bottom: -13px;"></div>NEWS</a></li>
              <li data-lang="th" onMouseOver="lineOnHover(76)" onMouseOut="lineOutHover(76)"><a href="/news.html"><div class="animated-line pos-76" style="bottom: -13px;"></div>ข่าวสาร</a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(77)" onMouseOut="lineOutHover(77)"><a href="/news.html"><div class="animated-line pos-77" style="bottom: -13px;"></div>新闻资讯</a></li>
            </ul>
            <ul class="services services-2 ps-0">
              <li data-lang="en" onMouseOver="lineOnHover(78)" onMouseOut="lineOutHover(78)"><a href="/land-selling.html"><div class="animated-line pos-78" style="bottom: -13px;"></div>LAND SELLING</a></li>
              <li data-lang="th" onMouseOver="lineOnHover(79)" onMouseOut="lineOutHover(79)"><a href="/land-selling.html"><div class="animated-line pos-79" style="bottom: -13px;"></div>ขายที่ดิน</a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(80)" onMouseOut="lineOutHover(80)"><a href="/land-selling.html"><div class="animated-line pos-80" style="bottom: -13px;"></div>土地出售</a></li>
              <li data-lang="en" onMouseOver="lineOnHover(81)" onMouseOut="lineOutHover(81)"><a href="/career.html"><div class="animated-line pos-81" style="bottom: -13px;"></div>CAREER</a></li>
              <li data-lang="th" onMouseOver="lineOnHover(82)" onMouseOut="lineOutHover(82)"><a href="/career.html"><div class="animated-line pos-82" style="bottom: -13px;"></div>ร่วมงานกับเรา</a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(83)" onMouseOut="lineOutHover(83)"><a href="/career.html"><div class="animated-line pos-83" style="bottom: -13px;"></div>市场合作</a></li>
              <li data-lang="en" onMouseOver="lineOnHover(84)" onMouseOut="lineOutHover(84)"><a href="/contact.html"><div class="animated-line pos-84" style="bottom: -13px;"></div>CONTACT</a></li>
              <li data-lang="th" onMouseOver="lineOnHover(85)" onMouseOut="lineOutHover(85)"><a href="/contact.html"><div class="animated-line pos-85" style="bottom: -13px;"></div>ติดต่อเรา</a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(86)" onMouseOut="lineOutHover(86)"><a href="/contact.html"><div class="animated-line pos-86" style="bottom: -13px;"></div>联系我们</a></li>
              <li data-lang="en" onMouseOver="lineOnHover(87)" onMouseOut="lineOutHover(87)"><a href="/map.html"><div class="animated-line pos-87" style="bottom: -13px;"></div>OUR LOCATION</a></li>
              <li data-lang="th" onMouseOver="lineOnHover(88)" onMouseOut="lineOutHover(88)"><a href="/map.html"><div class="animated-line pos-88" style="bottom: -13px;"></div>ทำเลโครงการ</a></li>
              <li data-lang="ch" onMouseOver="lineOnHover(89)" onMouseOut="lineOutHover(89)"><a href="/map.html"><div class="animated-line pos-89" style="bottom: -13px;"></div>项目地图</a></li>
            </ul>
          </div>
          <div class="tel-mobile"><a href="tel:+66 2538 8019">+66 2538 8019</a></div>
          <ul class="footer-socials ps-0">
            <a href="https://www.facebook.com/theoneestate.info" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com/theoneestate?utm_medium=copy_link" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://lin.ee/hlS0zzw" target="_blank"><img src="./assets/home/line-pink.svg" alt="line" /></a>
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
