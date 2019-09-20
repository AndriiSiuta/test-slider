// control slides part
let activeIndex = 0;

showSlides(activeIndex);

function showSlides(index) {
  const slidesList = document.getElementsByClassName('slide');
  if (index > slidesList.length - 1) {
    activeIndex = 0;
  }

  if (index < 0) {
    activeIndex = slidesList.length - 1;
  }

  console.log('index', index);
  

  for (let i = 0; i < slidesList.length; i++) {
    slidesList[i].style.display = 'none';
  };

  slidesList[activeIndex].style.display = 'block';
}

// slider navigation

const rightButton = document.getElementsByClassName('right-arrow-container')[0];
const leftButton = document.getElementsByClassName('left-arrow-container')[0];

rightButton.addEventListener('click', () => {
  activeIndex++;

  showSlides(activeIndex)
})

leftButton.addEventListener('click', () => {
  activeIndex--;

  showSlides(activeIndex);
})