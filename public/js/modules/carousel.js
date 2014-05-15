define((ants.is_mob ? ['zepto','underscore'] : ['jquery','underscore']) ,function($,_){


		var $  = $ , _ = _ ;

		var ants  = ants || {} ;

		// ants.carousel = ants.carousel || function(options){

			



		// };


	$.fn.extend({"ants_carousel":function(options){

			var  setings = {

				"view":".carousel-cont-view", // viewport

				"cont-list":".carousel-cont-list",

				"cont-item":".carousel-cont-item",

				"prev":".carousel-prev", // btn left

				"next":".caroousel-next",// btn right

				"nav":".carousel-nav",

				"nav-item":".caroousel-nav-item",

				"btn_switch":false , // switch to show or hide  btn left and right , hide default 

				"nav_switch":true , // switch to show or hide nav 

				"delay":2000, // time to switch 

				"currentIndex":0 // make window show the content index default 0 
			},

			opt =  $.extend({} , setings , options), prev , next , that = $(this);

			 function init(){

			 // mobile or pc 

			(!$.jquery) ?  function(){} : function(){

				var btns = that.children(opt.view);

				prev = btns.children(opt.prev) , next= btns.children(opt.next);

				prev.on("click ",t_left();

				next.on('click',t_right());

			}


			 }


			 function t_left(){



			 }

			 function t_right(){



			 }



			 init();

			}



	});




});