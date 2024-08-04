//HTMLドキュメントが読み込み完了した時にコンソールへ表示される
$(window).on('load',()=>{
    console.log('loadイベントが発生しました');
});

$(function(){
    //scrollした時にコンソールへ表示される
    $(window).on('scroll',()=>{
        console.log('scrollイベントが発生しました');
    });
});