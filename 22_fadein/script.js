$(function() {
  // jQueryを記述
  // $("P").fadeIn();

  //速度指定(ミリ秒)
  // $("P").fadeIn(3000);

  // 終了後の処理を指定
  $("P").fadeIn(function() {
    $(this).css("color", "#f00");
  })
});