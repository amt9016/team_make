$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 200){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 600;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


$(function(){ 
$(".three").on("mouseover",function(){
      $(this).css('opacity','0.5');
});
//マウスアウトしたときに元の色に戻る
$(".three").on("mouseout",function(){
      $(this).css('opacity','1');
	      return false;
});
});

$(function(){ 

$(window).scroll(function () {
    // クラスを追加するwindowの位置を設定
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;
    
    // eachでliを順番に処理
    $(".irh li").each(function (i) {
        if(effectPos > $(this).offset().top){
            var that = this;

            // 0.2s毎にずれて表示
            setTimeout(function () {
               $(that).addClass("fadein");
            }, 400 * i);
        }
    });
	 });
});
$(function(){
  $("button").click(function(){
	  $(".toggle").slideToggle(200);
	  return false;
  });
});

$(function(){
  $(".hum").click(function(){
	  $(".toggle").slideUp(200);
	  return false;
  });
});	
