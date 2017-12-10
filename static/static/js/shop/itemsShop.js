$(function () {
  //------------------------MAIN-NAV------------------------------
  var $navMain = $('.main-nav');
  var $navToggle = $('.main-nav__toggle');

  //--------------------------ARROW-------------------------------
  var $filterHeader = $('.filter__header');
  var $filterFieldset = $('.filter__fieldset');
  var $filterArrow = $('.filter__arrow');
  var deg = 180;
  //---------------------------AJAX-------------------------------
  var $filterForm = $('#filter');
  var $searchForm = $('#search');
  var $searchInput = $('.search__result');

  searchAjax();

  $($filterForm).submit(function (e) {
    e.preventDefault();
    if (!$filterFieldset.hasClass('hidden')) {
      $filterHeader.click();
    }
    filterAjax();
  });

  $($searchForm).submit(function (e) {
    e.preventDefault();
    searchAjax();
    $searchInput.val('');
  });


  //------------------------MAIN-NAV------------------------------
  $navToggle.click(function () {
    if ($navMain.hasClass('main-nav--closed')) {
      $navMain.removeClass('main-nav--closed');
      $navMain.addClass('main-nav--opened');
    }
    else {
      $navMain.removeClass('main-nav--opened');
      $navMain.addClass('main-nav--closed');
    }
  });


  //--------------------------ARROW-------------------------------
  $filterHeader.click(function () {
    $filterFieldset.toggleClass('hidden');
    $filterArrow.css('transform', 'rotate(' + deg + 'deg)');
    deg += 180;
  });
});



function success(data) {
  var items = data.items;
  var $container = $('.result-container');
  $container.empty();
  if (data.number === 0) {
    $container.append('<p class="result-container__alert">Товаров не найдено</p>');
  } else {
    items.forEach(function (item) {
      var product = '<a href="' + item.slug + '" class="product">';
      product += '<h2 class="product__title">' + item.name + '</h2>';
      product += '<div class="product__info"><div class="product__img"></div><div class="product__wrapper">';
      if (item.power) {
        product += '<span class="product__power">' + 'Мощность: ' + item.power + ' кВт' + '</span>';
      }
      if (item.afterAmount && item.beforeAmount) {
        product += '<span class="product__amount">' + 'Объем: ' + item.beforeAmount + 'м<sup>3</sup> - ' + item.afterAmount + 'м<sup>3</sup>' + '</span>';
      }
      if (item.price) {
        product += '<span class="product__price">' + 'Цена: ' + item.price + '</span>';
      }
      product += '<button type="button" class="product__add-cart btn">добавить в корзину</button></div></div></a>';

      $container.append(product);
    });
  }
}

function filterAjax() {
  var data = $('#filter').serializeArray();

  for (var i = 0; i < data.length; i++) {
    if (data[i].value === '') {
      data.splice(i, 1);
      i--;
    }
  }

  data = $.param(data);


  $.ajax({
    type: 'GET',
    url: 'sort=',
    data: data,
    dataType: 'json',
    success: function (data) {
      success(data);
    }
  });
}

function searchAjax() {
  var data = $('#search').serialize();
  $.ajax({
    type: 'GET',
    url: 'search=',
    data: data,
    dataType: 'json',
    success: function (data) {
      success(data);
    }
  })
}