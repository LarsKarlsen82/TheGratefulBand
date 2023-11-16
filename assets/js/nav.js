let navOffset = $("#nav-bar").offset().top;
let navBar = $("#nav-bar");

let $win = $(window).scroll(function() {
    if ( $win.scrollTop() > navOffset ) {
      navBar.addClass('nav-bar-scrolled').removeClass('nav-bar-top');
    } 
    else if( $win.scrollTop() == 0 ) {
      navBar.addClass('nav-bar-top').removeClass('nav-bar-scrolled');
    }
});