import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

createGalleryMarup(galleryItems);

const markUpGallery = createGalleryMarup(galleryItems);
let gallery = document.querySelector(".gallery");

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

let item = new SimpleLightbox(".gallery a", {
  captionsData: "title",
});

function onGalleryImageClick(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  item.on("show.simplelightbox");
}

console.log(item);

// console.log(captionsData);
