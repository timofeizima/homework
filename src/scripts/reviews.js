
(function(){

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


})()