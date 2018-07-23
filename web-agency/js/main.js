
$('.sl').slick({

    autoplay:true,
    autoplaySpeed:3000,
    speed:400,
    dots:true,
    arrows:false,
});




$('.button__ask').click(function () {



    if($('.button__ask__span').css('display','none')){
        $('.button__ask__span').css('display','block');
        $('.button__ask__span_minus').css('display','none')
    }
        $(this).find('.button__ask__span').css('display', 'none');
        $(this).find('.button__ask__span_minus').css('display', 'block');

});




var btn_title = document.querySelectorAll('.button__ask');
var disc = document.querySelectorAll('.ask__block');

for (var i = 0; i < btn_title.length; i++) {
    btn_title[i].addEventListener('click', fun_open);




    function fun_open(event) {
        for (var i = 0; i < btn_title.length; i++) {
            disc[i].classList.remove('ask__block_show');
            btn_title[i].classList.remove('ask__color');




            if (btn_title[i] == event.currentTarget) {
                disc[i].classList.toggle('ask__block_show');
                btn_title[i].classList.toggle('ask__color');


            }
        }

    }

}



