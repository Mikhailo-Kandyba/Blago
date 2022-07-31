$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".header-content").toggleClass('show-menu');
    $("body").toggleClass('overflow-hidden');
});