$('.about_items > div').on('click', function(){
    $(this).children('.about_icon').toggleClass('about_rotate-icon');
    $(this).parent('.about_items').toggleClass('change-color');
    $(this).next('.about_text').slideToggle(300);
}) ;

$('.forFeatures_items > div').on('click', function(){
        $(this).next('.forFeatures_text').slideToggle(300);
        $(this).parent('.forFeatures_items').toggleClass('change-color-line');
        $(this).children('.forFeatures-inscription').toggleClass('change-color-text')
}) 



