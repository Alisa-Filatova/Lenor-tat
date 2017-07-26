function scrollToAnchor(event) {
    event.preventDefault();

    var scrollTop = 0;
    var documentHight = $(document).height();
    var windowHeight = $(window).height();

    if($(this.hash).offset().top > documentHight - windowHeight) {
        scrollTop = documentHight - windowHeight;
    } else {
        scrollTop = $(this.hash).offset().top;
    }

    $('html, body').animate({ scrollTop: scrollTop }, 700, 'swing');
}

$('.slider-btn').on('click', scrollToAnchor);

var $paginatorItem = $('.promo__paginator-item');

$paginatorItem.on('click', function() {
    var classActive = 'promo__paginator-item_active';

    $(this)
        .siblings()
        .removeClass(classActive)
        .end()
        .addClass(classActive);

    scrollToAnchor.apply(this, arguments);
});

$('.main-nav__link_index').on('click', function() {
    scrollToAnchor.apply(this, arguments);
});

var $reviews = $('#reviews');
var $reviewsItems = $reviews.find('.reviews-item');
var $reviewPaginatorItems = $reviews.find('.reviews__paginator-item');
var reviewItemClassVisible = 'reviews-item_visible';
var reviewPaginatorClassActive = 'reviews__paginator-item_active';

$reviewPaginatorItems.on('click', function() {
    var $this = $(this);

    $this
        .siblings()
        .removeClass(reviewPaginatorClassActive)
        .end()
        .addClass(reviewPaginatorClassActive);

    var index = $this.index();

    $reviewsItems
        .siblings()
        .removeClass(reviewItemClassVisible)
        .end()
        .eq(index)
        .addClass(reviewItemClassVisible);
});

$reviews.find('.reviews__slider_left').on('click', function(event) {
    event.preventDefault();

    var currentIndex = $reviews.find('.' + reviewItemClassVisible).index('.reviews-item');

    $reviewsItems
        .siblings()
        .removeClass(reviewItemClassVisible)

    $reviewPaginatorItems
        .siblings()
        .removeClass(reviewPaginatorClassActive);

    if (currentIndex === 0) {
        $reviewsItems
            .last()
            .addClass(reviewItemClassVisible);

        $reviewPaginatorItems
            .eq($reviewsItems.length - 1)
            .addClass(reviewPaginatorClassActive);
    } else {
        $reviewsItems.eq(currentIndex - 1).addClass(reviewItemClassVisible);

        $reviewPaginatorItems
            .eq(currentIndex - 1)
            .addClass(reviewPaginatorClassActive);
    }
});

$reviews.find('.reviews__slider_right').on('click', function(event) {
    event.preventDefault();

    var currentIndex = $reviews.find('.' + reviewItemClassVisible).index('.reviews-item');

    $reviewsItems
        .siblings()
        .removeClass(reviewItemClassVisible);

    $reviewPaginatorItems
        .siblings()
        .removeClass(reviewPaginatorClassActive);

    if (currentIndex === $reviewsItems.length - 1) {
        $reviewsItems
            .first()
            .addClass(reviewItemClassVisible);

        $reviewPaginatorItems
            .eq(0)
            .addClass(reviewPaginatorClassActive);
    } else {
        $reviewsItems
            .eq(currentIndex + 1)
            .addClass(reviewItemClassVisible);

        $reviewPaginatorItems
            .eq(currentIndex + 1)
            .addClass(reviewPaginatorClassActive);
    }
});

var $section = $('.scroll-spy');

$section.on('scrollSpy:enter', function() {
    var sectionId = $(this).attr('id');
    $paginatorItem.filter('[data-id="' + sectionId + '"]')
        .addClass('promo__paginator-item_active')
        .siblings()
        .removeClass('promo__paginator-item_active');
});

$section.scrollSpy();
