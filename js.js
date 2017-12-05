
$().ready(function () {
    yjj.m.moreProduct(); //滑动显示更多产品隐藏界面
    yjj.m.message(); //点击打开消息隐藏界面
    yjj.m.changeSkin(); //点击打开换肤隐藏界面
    yjj.m.preView(); //预览皮肤
    // yjj.m.cookie();
    yjj.m.content();//内容栏和设置切换
    yjj.m.goToTop();//返回顶部
});
//使用了单例模式，yjj为命名空间，存放使用到的变量和方法，好处是整个项目只有一个对象，方法和变量分开，保证后期修改时不会出现同名的函数和变量，便于维护
var yjj = {
    //存放变量
    v: {
        moreProcducts_down_list: $('#moreProcducts_down_list'),
        moreProduct: $('#moreProcducts'),
        message:$('#message'),
        message_downList:$('#message_downList')
    },
    //存放方法
    m: {
        //更多产品滑动出现
        moreProduct: function moreProduct() {
            yjj.v.moreProduct.on('mouseover', function () {
                yjj.v.moreProcducts_down_list.fadeIn(300);
            });
            yjj.v.moreProcducts_down_list.on('mouseover', function () {
                yjj.v.moreProcducts_down_list.show();
            });
            yjj.v.moreProcducts_down_list.on('mouseout', function () {
                yjj.v.moreProcducts_down_list.hide();
            });
        },
        // 设置下拉菜单
        message: function () {
            yjj.v.message.on('click', function (event) {
                if (event.target === this) {
                    yjj.v.message_downList.toggle();
                    event.stopPropagation();
                }
            });
            yjj.v.message_downList.on('click', function () {
                yjj.v.message_downList.show();
                event.stopPropagation();
            });
            $('body').on('click', function () {
                yjj.v.message_downList.hide();
            });
        },
        // 点击打开和关闭换肤界面换肤界面的方法
        changeSkin: function () {
            $('#skin').on('click', function () {
                $('#header_hidden').slideDown(300);
                return false;
            });
            $('#header_hidden_header_slideUp').on('click', function () {
                $('#header_hidden').slideUp(300);
            });
            $('#header_hidden').on('click', function () {
                return false;
            });
            $('body').on('click', function () {
                $('#header_hidden').slideUp(300);
            });
        },
        //预览皮肤和cookie保存选中
        preView: function () {
            $('#header_hidden_body_skin table td img').each(function () {
                var address = $(this).attr('src');
                $(this).on('mouseover', function () {
                    $('#header_hidden_body_reservation img').attr('src', address);
                });
                $(this).on('click', function () {
                    $("#container").css({
                        "background-image": "url(" + address + ")"
                    });
                    document.cookie = address;
                    console.log(window.getComputedStyle(document.getElementById('container'),null).backgroundImage,document.cookie);
                });
            });
        },
        content:function () {
            $('#tab_attention').on('click', function () {
                $(this).css({
                    "background": "rgba(255,255,255,0.3)"
                });
                $('#tab_recommend,#tab_nav').css({
                    "background": "rgba(255,255,255,0.6)"
                });
                $('#content_attention').css({
                    'display': 'block'
                });
                $('#content_recommend,#content_nav').css({
                    'display': 'none'
                });
            });
            //点击“推荐”触发的事件
            $('#tab_recommend').on('click', function () {
                $(this).css({
                    "background": "rgba(255,255,255,0.3)"
                });
                $('#tab_attention,#tab_nav').css({
                    "background": "rgba(255,255,255,0.6)"
                });
                $('#content_recommend').css({
                    'display': 'block'
                });
                $('#content_attention,#content_nav').css({
                    'display': 'none'
                });
            });
            //点击“导航”触发的事件
            $('#tab_nav').on('click', function () {
                $(this).css({
                    "background": "rgba(255,255,255,0.3)"
                });
                $('#tab_recommend,#tab_attention').css({
                    "background": "rgba(255,255,255,0.6)"
                });
                $('#content_nav').css({
                    'display': 'block'
                });
                $('#content_recommend,#content_attention').css({
                    'display': 'none'
                });
            });
            // 点击"设置"触发的事件
            $('#tab_setting').on('click', function () {
                $("#content_setting_hidden").slideToggle(300);
                event.stopPropagation();
            });
            $("#content_setting_hidden").on('click', function () {
                event.stopPropagation();
            });
            $('body').on('click', function () {
                $("#content_setting_hidden").slideUp(300);
            });
        },
        goToTop:function () {
            $(window).scroll(function () {
                if ($(window).scrollTop() > 0) {
                    $('#goToTop').fadeIn(300);
                }
                else $('#goToTop').fadeOut(300);
            });
            var left = $('#content_recommend_right').offset().left;
            var width = $(window).width() + 945;
            var widthless = width / 2;
            $(window).scroll(function () {
                if ($(window).scrollTop() >= 332) {
                    $('#content_recommend_right').css({
                        'position': 'fixed',
                        'top': '0',
                        'left': left
                    });
                }
                else {
                    $('#content_recommend_right').css({
                        'position': 'absolute',
                        'left': 620,
                        'top': '732'
                    });
                }
            });
            $('#goToTop').on('click', function () {
                $("html").animate({scrollTop: 0}, 500);
            });
        }
    }
};
// cookie:function () {
//     if (document.cookie) {
//         $("#container").css({
//             "background-image": "url("+document.cookie+")"
//         });
//         console.log(window.getComputedStyle(document.getElementById('container'),null).backgroundImage);
//     }
//     else {
//         $("#container").css({
//             "background-image": "url(\"baiduSkin_bg/829.jpg\")"
//         });
//     }
// }

