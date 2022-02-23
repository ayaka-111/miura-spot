//メニュー
//スクロールをするとハンバーガーメニューに変化するための設定を関数でまとめる
function FixedAnime() {
  //ヘッダーの高さを取得
  var headerH = $('.page-header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if (scroll >= headerH){//ヘッダーの高さ以上までスクロールしたら
      $('.openbtn1').addClass('fadeDown');//.openbtnにfadeDownというクラス名を付与して
      $('.page-header').addClass('dnone');//#headerにdnoneというクラス名を付与
    }else{//それ以外は
      $('.openbtn1').removeClass('fadeDown');//fadeDownというクラス名を除き
      $('.page-header').removeClass('dnone');//dnoneというクラス名を除く
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  FixedAnime();//スクロールをするとハンバーガーメニューに変化するための関数を呼ぶ
});


//ボタンをクリックした際のアニメーションの設定
$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".page-header").toggleClass('panelactive');//ヘッダーにpanelactiveクラスを付与
});
$("#nav li a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $(".page-header").removeClass('panelactive');//ヘッダーのpanelactiveクラスも除去
});


//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
    $('#nav li a').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top-0;
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});

//アコーディオン部分
//ドロップダウンの設定を関数でまとめる
function mediaQueriesWin(){
  var width = $(window).width();
  if(width <= 768) {//横幅が768px以下の場合
    $(".has-sub>a").off('click'); //has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
    $(".has-sub>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
      var parentElem =  $(this).parent();// aタグから見た親要素の<li>を取得し
      $(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
      $(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
      return false;//リンクの無効化
    });
  }else{//横幅が768px以上の場合
    $(".has-sub>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
    $(".has-sub>a").removeClass('active');//activeクラスを削除
    $('.has-sub').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
  }
}

// ページがリサイズされたら動かしたい場合の記述
$(window).resize(function() {
  mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
  mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
});




  //page top
   //スクロールした際の動きを関数でまとめる
  function PageTopAnime() {
      var scroll = $(window).scrollTop();
      if (scroll >= 150){//上から150pxスクロールしたら
        $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
        $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
      }else{
        if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
          $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
          $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
        }
      }
    }
    // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
      PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });

    // ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
      PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
    });

    // #page-topをクリックした際の設定
    $('#page-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0//ページトップまでスクロール
        }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
        return false;//リンク自体の無効化
    });
