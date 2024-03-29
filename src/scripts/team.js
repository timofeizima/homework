(function(){ const openItem = item => {
    const container = item.closest(".team__item");
    const contentBlock = container.find(".team__content");
    const textBlock = contentBlock.find(".team__content-block");
    const reqHeight = textBlock.height();
  
    container.addClass("team__item--active");
    contentBlock.height(reqHeight);
  }
  
  
  const closeEveryItem = (container) => {
    const items = container.find('.team__content');
    const itemContainer = container.find(".team__item");
  
    itemContainer.removeClass("team__item--active");
    items.height(0);
  }
  
  $('.team__title').click(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest('.team');
    const elemContainer = $this.closest(".team__item");
  
    if(elemContainer.hasClass("team__item--active")) {
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
  
  
  
    if(elemStore.hasClass('team__item-active')){
      closeItem(itemStore);
      triangle.attr('xlink:href', './img/icons/sprite.svg#team-triangle')
    } else{
      closeItem(itemStore);
      openItem(chosenElem);
      triangleAll.attr('xlink:href', './img/icons/sprite.svg#team-triangle');
      triangle.attr('xlink:href', './img/icons/sprite.svg#triangle-up');
  
    }
  });

})()