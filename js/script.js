$('.about_items > div').on('click', function(){
    $(this).children('.about_icon').toggleClass('about_rotate-icon');
    $(this).parent('.about_items').toggleClass('change-color')
    $(this).next('.about_text').slideToggle(300);
}) 

$('#open-modal').on('click', function(){
    $('.modal-overlay').fadeIn()
});

