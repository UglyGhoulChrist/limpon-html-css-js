$(window).on('load', function () {
    $preloader = $('.loader'),
        $loader = $preloader.find('.demo');
    $loader.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});