$(window).on('scroll', function(){
    if($(this).scrollTop()>400){
        $('#up').fadeIn()
    }   else{
        $('#up').fadeOut()
    }
});

$('#up').on('click', function(){
    $('html,body').animate({scrollTop: 0},500)
});

$('#about_link').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop: $('#about').offset().top}, 1000)
})

$('#inbox_link').on('click',function(e){
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $('#inbox').offset().top
    }, 1000)
})

document.getElementById('checkbox-menu').checked = false;