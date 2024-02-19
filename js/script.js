// простой способ
let burger  = document.querySelector('.burger');
let overlay = document.querySelector('.overlay');
let body = document.querySelector('body');

let links = document.querySelectorAll('.overlay .menu__link'); [1,2,3,4,5,6,7]

links.forEach(function(element){
  element.addEventListener('click' , toggleMenu);
})

function toggleMenu(){
  burger.classList.toggle('burger--active');
  overlay.classList.toggle('overlay--active');
  body.classList.toggle('body--active-menu');
}

burger.addEventListener('click' , toggleMenu);











//team 

/*function accordionTeam() {
  const workers = document.querySelectorAll(".team__item");
  const teamAccord = document.querySelector(".team");

  teamAccord.addEventListener("click", function (event) {
    event.preventDefault(); 
    const target = event.target; 
   
    if (target.classList.contains("team__title")) {
      const worker = target.parentNode; 
      const content = target.nextElementSibling; 
      const contentHeight = content.firstElementChild.clientHeight; 

      for (const iterator of workers) {
        if (iterator !== worker) {
          iterator.classList.remove("team__item-active");
          iterator.lastElementChild.style.height = 0;
        }
      }

      if (worker.classList.contains("team__item-active")) {
        worker.classList.remove("team__item-active");
        content.style.height = 0;
      } else {
        worker.classList.add("team__item-active");
        content.style.height = contentHeight + "px";
      }
    }
  });
}

accordionTeam();

*/

const openItem = item => {
  const container = item.closest(".team__item");
  const contentBlock = container.find(".team__content");
  const textBlock = contentBlock.find(".team__content-block");
  const reqHeight = textBlock.height();

  container.addClass("team__item-active");
  contentBlock.height(reqHeight);
}


const closeEveryItem = (container) => {
  const items = container.find('.team__content');
  const itemContainer = container.find(".team__item");

  itemContainer.removeClass("team__item-active");
  items.height(0);
}

$('.team__title').click(e => {
  const $this = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemContainer = $this.closest(".team__item");

  if(elemContainer.hasClass("team__item-active")) {
    closeEveryItem(container);
  }
  else {
    closeEveryItem(container);
    openItem($this);
  }
});




// const trianglePosition ()
    
    
$('.team__title').on('click', e =>{
    
  const chosenElem = $(e.currentTarget);
  const itemStore = chosenElem.closest('.team');
  const elemStore = chosenElem.closest('.team__item');
  const triangle = chosenElem.find('.team__title-svg-path');
  const triangleAll = itemStore.find('.team__title-svg-path');



  if(elemStore.hasClass('active')){
    closeItem(itemStore);
    triangle.attr('xlink:href', './img/icons/sprite.svg#team-triangle')
  } else{
    closeItem(itemStore);
    openItem(chosenElem);
    triangleAll.attr('xlink:href', './img/icons/sprite.svg#team-triangle');
    triangle.attr('xlink:href', './img/icons/sprite.svg#triangle-up');

  }
});







