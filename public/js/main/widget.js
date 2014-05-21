var ants = ants || {};
	ants.is_ipad =ants.is_ipad || /(iPad|iPod|iPhone)/i.test(navigator.userAgent.toLowerCase());
	ants.is_mob = ants.is_mob || /(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i.test(navigator.userAgent.toLowerCase());
	ants.ie_lte8 = ants.ie_lte8 || /IE \./i;
	ants.core = ants.core || {}
	ants.core.$ = ants.core.$  || (ants.is_mob ?  "zepto" : "jquery");
	//console.log(ants.core.$);
	require.config({
		baseUrl:"/js",
		paths:{
			jquery:"core/jquery",
			underscore:"core/underscore.min",
			zepto:"core/zepto"
		},

		shim:{
			"jquery":{
				exports:"$"
			},
			"underscore":{
				exports:"_"
			},
			"zepto":{
				exports:"$"
			}

		}


	});

	
require(["jquery","modules/carousel"],function($,cr){

	$("#carousel").ants_carousel();

	// console.info($(document).lmk);

	// $(document).lmk();
	// $(document).lmk.good();
	// //$(document).lmk().good();
	

	// console.log($(document).lmk.meto);

});
