void function ($, undefined) {
  var $main = $('main')

  function render(items) {
    $main.empty()
    items.forEach(function (item) {
      $('<section>')
        .append($('<img>', { src: item.image }))
        .append($('<h3>', { text: item.title }))
        .append($('<p>', { class: 'price', text: item.price }))
        .append($('<p>', { class: 'remark', text: item.remark }))
        .appendTo($main)
    })
  }

  render([
    {
      "title": "iPhone 5S",
      "image": "https://www.apple.com/cn/iphone-5s/images/buystrip_product.png",
      "price": "1300",
      "remark": "买一送一"
    }
  ]);
} (Zepto)
