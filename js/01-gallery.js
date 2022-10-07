import { galleryItems } from './gallery-items.js';


const refs ={
    galleryRef: document.querySelector(".gallery"),
}

const gallyryMarkUp = createGalleryMarkUp(galleryItems)
refs.galleryRef.insertAdjacentHTML("afterbegin",gallyryMarkUp)
    function createGalleryMarkUp(galleryItems) {
    return galleryItems.map(({preview,original,description})=>{
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
})    
.join('');
}
// ----------------------------------------1111-------------------------------
refs.galleryRef.addEventListener('click',checkBtn)
function checkBtn(evt) {
    evt.preventDefault()
if (evt.target.nodeName !== 'IMG') {
    return
} 
document.addEventListener('keydown',test)
function test(evt) {
    if (evt.key === "Escape") {
        // document.removeEventListener()
        box.close()
        document.removeEventListener('keydown',test);
        return
        
    }

    console.log(evt)
    
}

const box = basicLightbox.create(`
	<img width="800" height="600" src="${evt.target.dataset.source}">
`)
box.show()
}




// const btn = document.querySelector('button')
// console.log(btn)
// btn.addEventListener('click',lightBox)
// function lightBox(evt) {
//     basicLightbox.create(`
//     <img width="1400" height="900" src="https://placehold.it/1400x900">
// `).show()   
// }
// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()

// }