define((ants.is_mob ? ['zepto', 'underscore'] : ['jquery', 'underscore']), function($, _) {


    var $ = $,
        _ = _;

    var ants = ants || {};

    $.fn.extend({
        "ants_carousel": function(options) {

            var setings = {

                "view": ".carousel-view", // viewport

                "cont_list": ".carousel-cont-list",

                "cont_item": ".carousel-cont-item",

                "prev": ".carousel-prev", // btn left

                "next": ".carousel-next", // btn right

                "nav": ".carousel-nav",

                "nav_item": ".carousel-nav-item",

                "btn_switch": false, // switch to show or hide  btn left and right , hide default 

                "nav_switch": true, // switch to show or hide nav 
                "delay": 2000, // time to switch 

                "currentIndex": 0 // make window show the content index default 0 
            },

                opt = $.extend({}, setings, options),

                prev, next, vw, $v, $items, that = $(this);




            function t_left() {

                console.log("messageleft");

            }

            function t_right() {

                console.log("messageright");

            }


            function init() {

                // mobile or pc 
                $v = that.children(opt.view);

                vw = $v.width();

                $items = $v.children(opt.cont_list).children(opt.cont_item);

                $navs = $that.children(opt.nav).children(opt.nav_item);

                prev = $v.children(opt.prev);

                next = $v.children(opt.next);

                if (!that.jquery) {


                    $v.on("swipeLeft", t_left);

                    $v.on("swipeRight", t_right);



                } else {

                    prev.on("click", t_left);

                    next.on("click", t_right);

                }


            }


            init();

        }



    });




});