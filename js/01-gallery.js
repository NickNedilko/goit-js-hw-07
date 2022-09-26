import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
createGalleryMarup(galleryItems);
const markUpGallery = createGalleryMarup(galleryItems);
const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", markUpGallery);

function createGalleryMarup(galleryItems) {
  return galleryItems
    .map(({ description, preview, original }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(" ");
}

gallery.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  openBigImages(evt);
}

function openBigImages(evt) {
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
  instance.show();
  document.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
    return;
  });
}
