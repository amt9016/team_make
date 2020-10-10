$(function () {
  $(window).scroll(function () {
    $(".fadein").each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});

//トマト⇔生産者の顔のスライドショー（横スクロール）

$(function () {
  //スクロールの方向マイナス１の時は左、1の時は右
  var dir = -1;
  //スクロールのインターバル（何秒ごとにスクロールさせるか。3000ミリ秒に設定）
  var interval = 5000;
  //スクロールのスピード（500ミリ秒に設定）
  var duration = 1000;
  //タイマー用の変数
  var timer;
  //リストの順番変更（2番目を一番最初にする）
  $("#slide ul").prepend($("#slide li:last-child"));
  //リストの位置を変更（画像1枚分ずらす）
  $("#slide ul").css("left", -480);
  //何ミリ秒（変数intervalの値）ごとにスライドタイマー（）関数を実行
  timer = setInterval(slideTimer, interval);

  //slideTimer（）関数
  function slideTimer() {
    //スクロール方向の判断
    if (dir == -1) {
      //画像1枚分左へスクロール
      $(".test ul").animate({ left: "-=480px" }, duration, function () {
        //リストの順番を変更
        $(this).append($(".test li:first-child"));
        //リストの位置を変更
        $(this).css("left", -480);
      });
    } else {
      //画像1枚分右へスクロール
      $(".test ul").animate({ left: "+=480px" }, duration, function () {
        //リストの順番を変更
        $(this).prepend($(".test li:last-child"));
        //リストの位置を変更
        $(this).css("left", -480);
        //左方向へリセット
        dir = -1;
      });
    }
  }
  //関数の中身・・・画像1枚分左へスクロール
  $("#slide ul").animate({ left: "+=480px" }, duration, function () {
    //リストの順番を変更
    $(this).append($("#slide li:first-child"));
    //リストの位置を変更
    $(this).css("left", -480);
    //左方向へリセット
    dir = -1;
  });
  //前へ戻るボタン
  $("#prevBtn").click(function () {
    //スクロール方向の切り替え（右）
    dir = 1;
    //タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    //初回の関数実行
    slideTimer();
  });
  //次へ進むボタン
  $("#nextBtn").click(function () {
    //スクロール方向の切り替え（左）
    dir = -1;
    //タイマーを停止して再スタート
    clearInterval(timer);
    timer = setInterval(slideTimer, interval);
    //初回の関数実行
    slideTimer();
  });
});

//マウスアウトしたときに元の色に戻る
$(".three").on("mouseout", function () {
  $(this).css("opacity", "1");
  return false;
});

$(function () {
  $(window).scroll(function () {
    // クラスを追加するwindowの位置を設定
    var scrollTop = $(this).scrollTop();
    var scrollBottom = scrollTop + $(this).height();
    var effectPos = scrollBottom - 50;

    // eachでliを順番に処理
    $(".irh li").each(function (i) {
      if (effectPos > $(this).offset().top) {
        var that = this;

        // 0.2s毎にずれて表示
        setTimeout(function () {
          $(that).addClass("fadein");
        }, 300 * i);
      }
    });
  });
});
