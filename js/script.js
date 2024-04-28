const images = document.querySelectorAll('#carousel > img');
let imageIndex = 0;

for(let i = 1; i < images.length; i++){
    images[i].style.display = 'none';
}

const nextButton = document.querySelector('#nextButton');
const previousButton = document.querySelector('#previousButton');

nextButton.addEventListener('click', () => {
    images[imageIndex].style.display = 'none';
    imageIndex++;    
    if(imageIndex == images.length){
        imageIndex = 0;
    }
    images[imageIndex].style.display = 'inline-block';
});

previousButton.addEventListener('click', () => {
    images[imageIndex].style.display = 'none';
    imageIndex--;    
    if(imageIndex < 0){
        imageIndex = images.length - 1;
    }
    images[imageIndex].style.display = 'inline-block';
});