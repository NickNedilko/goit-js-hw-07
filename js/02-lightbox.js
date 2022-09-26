import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);


const markUpGallery = createGalleryMarup(galleryItems);
const gallery = document.querySelector(".gallery");
gallery.insertAdjacentHTML("beforeend", markUpGallery);

function createGalleryMarup(galleryItems) {
  return galleryItems
    .map(({ description, preview, original }) => {
      return `<di class="gallery__item">
  <a  href="${original}" data-caption="${description}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</di>`;
    })
    .join(" ");
}

gallery.addEventListener("click", onGalleryImageClick);

function onGalleryImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  item.on("show.simplelightbox");
}

let item = new SimpleLightbox(".gallery a", {
  captionsData: "alt", captionDelay:'250'
});






