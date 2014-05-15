var ants = ants || {};
	ants.is_ipad =ants.is_ipad || (navigator.userAgent.match(/(iPad|iPod|iPhone)/i)!= null);
	ants.is_mob = ants.is_mob || navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i) != null;
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

});
