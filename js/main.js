if(window.matchMedia('(min-width: 768px)').matches){
  $( "#datepicker" ).datepicker({
      numberOfMonths: 2,
      minDate: 0
  });
  $( "#datepicker2").datepicker({
      numberOfMonths: 2,
      minDate: 0
  });
  $( "#datepicker3").datepicker({
      numberOfMonths: 2,
      minDate: 0
  });
  $( "#datepicker4").datepicker({
      numberOfMonths: 2,
      minDate: 0
  });
}
if(window.matchMedia('(max-width: 767px)').matches){
  $( "#datepicker" ).datepicker({
      minDate: 0
  });
  $( "#datepicker2").datepicker({
      minDate: 0
  });
  $( "#datepicker3").datepicker({
      minDate: 0
  });
  $( "#datepicker4").datepicker({
      minDate: 0
  });
}

var review_stars = $('.j-rating a');
$(review_stars).hover(function () {
    $(this).parent().find(review_stars).removeClass('is-hover is-active m-select m-active');
    $(this).addClass('is-hover');
    var thisStar = $(this).parent().find(review_stars);
    $(thisStar).each(function () {
        $(this).addClass('is-active');
        if ( $(this).hasClass('is-hover') ) {
            return false;
        }
    });
}, function () {
    var value = $(this).parent().find('input[type=hidden]').val();
    $(this).parent().find(review_stars).removeClass('is-hover is-active m-select m-active');
    var thisStar = $(this).parent().find(review_stars);
    if( value >= 1 ) {
        $(thisStar).each(function () {
            $(this).addClass('m-select');
            if ($(this).data('index') == value) {
                $(this).addClass('m-active');
                return false;
            }
        });
    }
});
$(review_stars).click(function () {
    $(this).addClass('m-active');
    var thisStar = $(this).parent().find(review_stars);
    $(thisStar).each(function () {
        $(this).addClass('m-select');
        if ( $(this).hasClass('m-active') ) {
            return false;
        }
    });
    $(this).parent().find('input[type=hidden]').val(parseInt($(this).data('index')));
    return false;
});

$('.sorting-btn').click(function(e) {
  e.preventDefault()
  var data = $(this).attr('data-tab');
  $('.tab-pane').hide()
  $('' + data).show()
  $('.sorting-btn').removeClass('active')
  $(this).addClass('active')
});

$(document).ready(function(){
  $('.card-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    thumbs: true,
    thumbsPrerendered: true
  });
});