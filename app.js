void function ($, undefined) {
  var render = function () {
    var $article = $('article')
    
    return function render(items) {
      $article.empty()
      items.forEach(function (item) {
        $('<section>').append(
          $('<div>', { class: 'in-section' })
            .append($('<img>', { src: item.image }))
            .append($('<h3>', { text: item.title }))
            .append($('<p>', { class: 'price', text: item.price }))
            .append($('<p>', { class: 'remark', text: item.remark }))
        ).appendTo($article)
        $article.width(items.length * $(window).width())
      })

      setTimeout(function () {iScroll.refresh()}, 0)
    }
  } ()

  var iScroll = new IScroll('body', {
    scrollX: true,
    scrollY: false,
    snap: true
  })

  void function (adjustWidth) {
    adjustWidth()
    $(window).on('resize', adjustWidth)
  } (function () {
    var sheets = document.styleSheets
    var sheet = null
    for (var i = 0, l = sheets.length; i < l; i++) {
      if (sheets[i].title == 'section-width') {
        sheet = sheets[i]
        break;
      }
    }

    return sheet ? function () {
      sheet.cssRules[0].style.width = window.innerWidth + 'px'
      setTimeout(function () {iScroll.refresh()}, 0)
    } : function () {}
  } ())

  render([
    {
      "title": "iPhone 5S",
      "image": "http://images.apple.com/cn/iphone-5s/images/buystrip_product.png",
      "price": "1300",
      "remark": "买一送一"
    },
    {
      "title": "iPhone 5C",
      "image": "http://images.apple.com/cn/iphone-5c/images/buystrip_product.png",
      "price": "1000",
      "remark": "买一送二"
    }
  ]);
} (Zepto)
