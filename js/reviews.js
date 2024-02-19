/*const reviewsBar = document.querySelector('.reviews__switcher');
const reviewsItems = document.querySelectorAll('.reviews__switcher-item');
const reviewWrapp = document.querySelectorAll('.reviews__item');

reviewsBar.addEventListener('click' , e=>{
   e.preventDefault();

  // console.log(Array.from(reviewsBar.children))

  if(e.target.classList.contains('reviews__switcher-link')){
    const currentPeopleLink = e.target;
    const currentPeopleItem = currentPeopleLink.closest('.reviews__switcher-item')
    const currentPeopleId = currentPeopleItem.id;
    
    for (const iterator of reviewsItems) {
      if(iterator !== currentPeopleItem){
        iterator.classList.remove("reviews__switcher-item--active");
      }
    }
    
    if(!currentPeopleItem.classList.contains("reviews__switcher-item--active")){
      currentPeopleItem.classList.add("reviews__switcher-item--active");
    }
    
    reviewWrapp.forEach(function(wrapp){
      if(currentPeopleId == wrapp.id){
        wrapp.classList.add('reviews__item--active');
      }else{
        wrapp.classList.remove('reviews__item--active');
      }
    })
  }
});
*/













const findBlockByAlias = (alias) => {
  return $(".reviews__item").filter((ndx, item) => {
    return $(item).attr("data-selected") === alias; 
  });
};

$(".reviews__switcher-link").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-select");
  const itemShow = findBlockByAlias(target);
  const curItem = $this.closest(".reviews__switcher-item");

  itemShow.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
  curItem.addClass("reviews__switcher-item--active").siblings().removeClass("reviews__switcher-item--active");
});

