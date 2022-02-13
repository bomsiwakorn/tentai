function showGalleryModal(index) {
  const iSlide = Number(index);
  const galleryModal = document.querySelector(".gallery-plean-modal");
  const bgModal = document.querySelector(".bg-gallery-modal");
  const html = document.querySelector("html");
  galleryModal.classList.toggle("gallery-plean-modal-show");
  bgModal.classList.toggle("bg-gallery-modal-show");
  html.classList.toggle("html-gallery-modal-show");

  const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    initialSlide: iSlide,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
