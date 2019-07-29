$(function () {
    $(window).width();
    //成員管理者移動
    $("#admin-move,#member-move").sortable({
        axis: "x",
        connectWith: "#admin-move,#member-move"
    });
    $("#admin-move,#member-move").disableSelection();
    //列表移動

    //卡片互相移動
    if ($(window).width() < 1024) {

        $(".work-card").mousedown(function (e) {
            clearTimeout(this.downTimer);

            this.downTimer = setTimeout(function () {
                $("#work-body-move-1,#work-body-move-2").sortable({
                    connectWith: "#work-body-move-1,#work-body-move-2"
                });
                $("#work-body-move-1,#work-body-move-2").disableSelection();
            }, 1000);
        }).mouseup(function (e) {
            clearTimeout(this.downTimer);
        });
        // $(".work-total").mousedown(function (e) {
        //     clearTimeout(this.downTimer);
        //     this.downTimer = setTimeout(function () {
        //         $("#work-total-move").sortable({
        //             axis: "x", items: ".work-total", cancel: ".dropright"
        //         });
        //         $("#work-total-move").disableSelection();
        //     }, 2000);
        // }).mouseup(function (e) {
        //     clearTimeout(this.downTimer);
        // });
    }
    else {
        $("#work-body-move-1,#work-body-move-2").sortable({
            connectWith: "#work-body-move-1,#work-body-move-2"
        });
        
        $("#work-body-move-1,#work-body-move-2").disableSelection();

        $("#work-total-move").sortable({
            axis: "x", items: ".work-total", cancel: ".dropright"
        });
        $("#work-total-move").disableSelection();

    }


    //input、textarea可以點選拖曳也可以編輯
    $('input').on('click', function () {
        $(this).focus();
    });
    $('textarea').on('click', function () {
        $(this).focus();
    });

});