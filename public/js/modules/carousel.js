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

                prev, next, vw, $v, $items, that = $(this),cw = 0,ci=0,ti=0;


            function t_left() {

                if(ci=== 0){

                    prev.css({"display":"none"});

                    $v.children(opt.cont_list).css({
                    "-webkit-transform":"translate("+ 0 +"px)" , "-webkit-transition":"all 1s  ease-in-out .5s",
                    "-moz-transform":"translate("+ 0 +"px)" , "-moz-transition":"all 1s  ease-in-out .5s",
                    "-ms-transform":"translate("+ 0 +"px)" , "-ms-transition":"all 1s  ease-in-out .5s",
                    "-o-transform":"translate("+ 0 +"px)" , "-o-transition":"all 1s  ease-in-out .5s",
                    "transform":"translate("+ 0 +"px)" , "transition":"all 1s  ease-in-out .5s"
                });


                }

                 next.css({"display":"block"});

                 ci--;

                 if(ci===0){   prev.css({"display":"none"}); }

                $v.children(opt.cont_list).css({
                    "-webkit-transform":"translate("+ -ci*vw +"px)" , "-webkit-transition":"all 1s  ease-in-out .5s",
                    "-moz-transform":"translate("+ -ci*vw +"px)" , "-moz-transition":"all 1s  ease-in-out .5s",
                    "-ms-transform":"translate("+ -ci*vw +"px)" , "-ms-transition":"all 1s  ease-in-out .5s",
                    "-o-transform":"translate("+ -ci*vw +"px)" , "-o-transition":"all 1s  ease-in-out .5s",
                    "transform":"translate("+ -ci*vw +"px)" , "transition":"all 1s  ease-in-out .5s"
                });

                

            }
 
            function t_right() {

                   if(ci=== (ti-1)){
                    next.css({"display":"none"});
                    $v.children(opt.cont_list).css({
                    "-webkit-transform":"translate("+ 0 +"px)" , "-webkit-transition":"all 1s  ease-in-out .5s",
                    "-moz-transform":"translate("+ 0 +"px)" , "-moz-transition":"all 1s  ease-in-out .5s",
                    "-ms-transform":"translate("+ 0 +"px)" , "-ms-transition":"all 1s  ease-in-out .5s",
                    "-o-transform":"translate("+ 0 +"px)" , "-o-transition":"all 1s  ease-in-out .5s",
                    "transform":"translate("+ 0 +"px)" , "transition":"all 1s  ease-in-out .5s"
                    });
                }
                prev.css({"display":"block"});

                ci++;
                   if(ci=== (ti-1)){
                    next.css({"display":"none"});

                    }

                $v.children(opt.cont_list).css({
                    "-webkit-transform":"translate("+ -ci*vw +"px)" , "-webkit-transition":"all 1s  ease-in-out .5s",
                    "-moz-transform":"translate("+ -ci*vw +"px)" , "-moz-transition":"all 1s  ease-in-out .5s",
                    "-ms-transform":"translate("+ -ci*vw +"px)" , "-ms-transition":"all 1s  ease-in-out .5s",
                    "-o-transform":"translate("+ -ci*vw +"px)" , "-o-transition":"all 1s  ease-in-out .5s",
                    "transform":"translate("+ -ci*vw +"px)" , "transition":"all 1s  ease-in-out .5s"
                });

                  

            }

            function init() {

                // mobile or pc 
                $v = that.children(opt.view);

                vw = $v.width();

                $items = $v.children(opt.cont_list).children(opt.cont_item);

                $navs = that.children(opt.nav).children(opt.nav_item);

                prev = $v.children(opt.prev);

                next = $v.children(opt.next);

                prev.css({"display":"none"});

                ti=$items.size();

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

  //   var  lmk = function(){  console.log("say lmk "); };

  //   //$.fn.lmk = function(){  console.log("say lmk "); };

  // lmk.prototype.greet=function(){


  //       console.log("say hello ");


  //   };



  //   lmk.prototype.good=function(){


  //       console.log("you a  hello ");


  //   };

  //  lmk.prototype.meto={"bb":"you a  bb"};

  //  lmk.prototype.constructor=lmk

  //  $.fn.lmk = lmk;

});