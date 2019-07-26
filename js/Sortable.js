$(function () {
    //成員管理者移動
    $("#admin-move,#member-move").sortable({
        axis: "x",
        connectWith: "#admin-move,#member-move"
    });
    $("#admin-move,#member-move").disableSelection();
    //列表移動
    $("#work-total-move").sortable({
        axis: "x", items: ".work-total",cancel:".dropright"});
    $("#work-total-move").disableSelection();
    //卡片互相移動
    $(".work-card").on("taphold",function(){
        $("#work-body-move-1,#work-body-move-2").sortable({
            connectWith: "#work-body-move-1,#work-body-move-2",items:'.work-card'});
        $("#work-body-move-1,#work-body-move-2").disableSelection();
      });
    // $("#work-body-move-1,#work-body-move-2").sortable({
    //     connectWith: "#work-body-move-1,#work-body-move-2",items:'.work-card'});
    // $("#work-body-move-1,#work-body-move-2").disableSelection();
    //input、textarea可以點選拖曳也可以編輯
    $('input').on('click', function(e) { 
        $(this).trigger({ 
         type: 'mousedown', 
         which: 3 
        }); 
    }); 
    $('input').on('mousedown', function(e) { 
        if(e.which == 3){ 
         $(this).focus(); 
        } 
    }); 
    $('textarea').on('mousedown', function(e) { 
         $(this).focus(); 
    }); 
});
