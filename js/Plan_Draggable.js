var elements = document.getElementsByClassName("work-card");
for (var i = 0; i < elements.length; i++) {
    elements[i].ontouchstart = function () {
        clearTimeout(this.downTimer);
        this.downTimer = setTimeout(function () {
            $("#work-body-move-1,#work-body-move-2").sortable({
                disabled: false,
                connectWith: "#work-body-move-1,#work-body-move-2"
            });
            $("#work-body-move-1,#work-body-move-2").disableSelection();
        }, 1000)
    };
    elements[0].ontouchend = function () {
        clearTimeout(this.downTimer);
        $("#work-body-move-1,#work-body-move-2").sortable({ disabled: true });
    };
}

$(document).ready(function () {
    $(window).width();
    //成員管理者移動
    //列表移動
    $("#admin-move,#member-move").sortable({
        axis: "x", connectWith: "#admin-move,#member-move", opacity: 0.7, items: ".member-img-trash"
    });
    $("#admin-move,#member-move").disableSelection();
    // if ($(window).width() < 1024) {
    //     $('.work-card').mousedown(function (event) {
    //         clearTimeout(this.downTimer);
    //         this.downTimer = setTimeout(function () {
    //             alert('a')
    //             $("#work-body-move-1,#work-body-move-2").sortable({
    //                 disabled: false,
    //                 connectWith: "#work-body-move-1,#work-body-move-2"
    //             });
    //             $("#work-body-move-1,#work-body-move-2").disableSelection();
    //         }, 1000);
    //     }).mouseup(function (e) {
    //         clearTimeout(this.downTimer);
    //         alert('b')
    //         $("#work-body-move-1,#work-body-move-2").sortable({ disabled: true });
    //     });
    // }
    // else {
    //     $("#work-body-move-1,#work-body-move-2").sortable({
    //         connectWith: "#work-body-move-1,#work-body-move-2"
    //     });

    //     $("#work-body-move-1,#work-body-move-2").disableSelection();

    //     $("#work-total-move").sortable({
    //         axis: "x", items: ".work-total", cancel: ".drpdown"
    //     });
    //     $("#work-total-move").disableSelection();
    // }

    // $("#work-body-move-1,#work-body-move-2").sortable({
    //     connectWith: "#work-body-move-1,#work-body-move-2"
    // });
    // $("#work-body-move-1,#work-body-move-2").disableSelection();
    //卡片互相移動
    // if ($(window).width() < 1024) {

    //     $(".work-card").mousedown(function (e) {

    //         clearTimeout(this.downTimer);
    //         this.downTimer = setTimeout(function () {
    //         }, 1000);
    //     }).mouseup(function (e) {
    //         clearTimeout(this.downTimer);
    //     });
    //     $(".work-total").mousedown(function (e) {
    //         clearTimeout(this.downTimer);
    //         this.downTimer = setTimeout(function () {
    //             $("#work-total-move").sortable({
    //                 axis: "x", items: ".work-total", cancel: "#work-body-move-1,#work-body-move-2,.drpdown"
    //             });
    //             $("#work-total-move").disableSelection();
    //         }, 2000);
    //     }).mouseup(function (e) {
    //         clearTimeout(this.downTimer);
    //     });
    // }
    // else {
    //     $("#work-body-move-1,#work-body-move-2").sortable({
    //         connectWith: "#work-body-move-1,#work-body-move-2"
    //     });

    //     $("#work-body-move-1,#work-body-move-2").disableSelection();

    //     $("#work-total-move").sortable({
    //         axis: "x", items: ".work-total", cancel: ".drpdown"
    //     });
    //     $("#work-total-move").disableSelection();

    // }


    //input、textarea可以點選拖曳也可以編輯
    $('input').on('click', function () {
        $(this).focus();
    });
    $('textarea').on('click', function () {
        $(this).focus();
    });

});
