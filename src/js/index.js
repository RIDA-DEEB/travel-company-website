import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/popper.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../sass/style.scss';

// لتغير خصائص القائمة عند النزول إلى الأسفل noTransparrent إضافة الخاصية 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("#navBar").addClass("noTransparrent");
    } else {
      $("#navBar").removeClass("noTransparrent");
    }
  });
  // تحرك الصفحة بين عناصر القائمة ضمن فترة زمنية محددة
  $(document).ready(function () {
    $("a.scroll").on('click', function (event) {
  
      var hash = this.hash;
  
      $('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800, function () { });
  
    });

});


var $links = $(".item-links");

$links.click(function (e) {
    $links.removeClass("active");
    var clickedLink = e.target;
    clickedLink = $(clickedLink);
    var position = clickedLink.attr("data-pos");
    var translateValue = "translate3d("+ position * -12.5 +"%, 0px, 0)";
    $("#wrapper").css({
        transform: translateValue
    });

    clickedLink.addClass("active");

});

$($links[0]).addClass("active"); 