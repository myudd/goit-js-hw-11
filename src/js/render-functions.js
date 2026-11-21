import SimpleLightbox from "simplelightbox";

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export const createGallery = (images) => {
    //Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
    const markup = images.map(
    (img) => `
  <a class="gallery-link" href="${img.largeImageURL}"><li class="gallery-item">
    <img
      class="gallery-image"
      src="${img.webformatURL}"
      alt="${img.tags.split(",", 3)}"
    />
    <ul class="img-details">
        <li class="img-details-item">
            Likes
            <p>${img.likes}</p>
        </li>
        <li class="img-details-item">
            Views
            <p>${img.views}</p>
        </li>
        <li class="img-details-item">
            Comments
            <p>${img.comments}</p>
        </li>
        <li class="img-details-item">
            Downloads
            <p>${img.downloads}</p>
        </li>
    </ul>
    </li>
</a>
`,
  )
        .join("");
    gallery.insertAdjacentHTML("afterbegin", markup);
    const galleryBox = new SimpleLightbox('.gallery a', 
        {
            captions: true,
            captionsData: "alt",
            captionPosition: 'bottom',
            captionDelay: 250
        }
    );
    galleryBox.refresh(); 
}
export const clearGallery = () => {
    gallery.innerHTML = "";
}

export const showLoader = () => {
    loader.classList.add('load');    
}

export const hideLoader = () => {
    loader.classList.remove('load');  
}
