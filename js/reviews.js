/*const reviewsBar = document.querySelector('.reviews__switcher');
const reviewsItems = document.querySelectorAll('.reviews__switcher-item');
const reviewWrapp = document.querySelectorAll('.reviews__item');

reviewsBar.addEventListener('click' , e=>{
   e.preventDefault();

  
  if(e.target.classList.contains('interactive-avatar__link')){
    const currentPeopleLink = e.target;
    const currentPeopleItem = currentPeopleLink.closest('.reviews__switcher-item')
    const currentPeopleId = currentPeopleItem.id;
    
    for (const iterator of reviewsItems) {
      if(iterator !== currentPeopleItem){
        iterator.classList.remove("interactive-avatar--active");
      }
    }
    
    if(!currentPeopleItem.classList.contains("interactive-avatar--active")){
      currentPeopleItem.classList.add("interactive-avatar--active");
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

$(".interactive-avatar__link").click((e) => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-select");
  const itemShow = findBlockByAlias(target);
  const curItem = $this.closest(".interactive-avatar");

  itemShow.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
  curItem.addClass("interactive-avatar--active").siblings().removeClass("interactive-avatar--active");
});
