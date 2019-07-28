$(document).ready(function(){
    $('.hamburger').on('click', function(){
        console.log("toggle");
        $('.menu').toggleClass('show');
    });

    $('.exit-cancel').on('click', function(){
        // toggle class show on the menu
        $('.menu').toggleClass('show');
    });
});