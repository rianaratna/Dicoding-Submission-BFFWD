import './script/component/app-bar.js';
let appBar = $('app-bar');
if(!appBar) {
    appBar = $('app-bar').appendTo('header');
}

function navScroll() {
    
    const navContainer = $('app-bar').outerHeight(); 
    const mainBottom = $('.hero').offset().top + $('.hero').height() - navContainer;


    $('jumbotron').position.top = $('.hero').offset().top;

    $(window).on('scroll', function() {
        const stop = Math.round($(window).scrollTop());
    
        if(stop > mainBottom) {
            $('app-bar').addClass('scroll');
        }
        else {
            $('app-bar').removeClass('scroll');
        }
    })
    
    const x = window.matchMedia("(min-width: 56rem)");

    const appBar = $('app-bar')[0];
    const shadowRoot = appBar.shadowRoot;
    const filterButton = $(shadowRoot).find('.filter-button');

    filterButton.on('click', function() {
        if(filterButton.hasClass('display')) {
            return;
        }
        else {
            filterButton.addClass('display');

            if(x.matches) {
                $('recipe-container').css({"flex": "0 0 72%"});
            } else {
                return;
            }
        }
    } )

    $('.close-button').on('click', function() {
        if($('.filter-container').hasClass('display')) {
            $('.filter-container').removeClass('display');

            if(x.matches) {
                $('.recipe-container').css({"flex": "0 0 100%"});
            } else {
                return;
            }
        }
        else {
            return;
        }
    } )
}

export default navScroll;


