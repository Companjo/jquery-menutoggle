/***************************************************************************************
*
*	jQuery Menu Toggle
* 	Author: Yassin Akhachab
*	W: www.yassinakhachab.com
*	Tested jQuery versions: 1.9.1
*	Version: 1.0
*	Last update: 2013-05-16
*	Github project: 
*
 ***************************************************************************************/

 (function ( $ ) {

	$.fn.menutoggle = function( options ) {
		var settings = $.extend({
		"handler": null, 
		"effect": "none",  
		"speed": 0
		}, options );


		$this = this;
		if(settings.handler != null)
		{
			console.log("Handler given");
			switch(settings.effect)
			{
				case 'none':
					$(settings.handler).click(function(){
						$($this.selector).toggle();
					});
				break;
				case 'fade':
					$(settings.handler).click(function(){
						$($this.selector).fadeToggle(settings.speed);
					});
				break;
				case 'slide':
					$(settings.handler).click(function()
					{
						$($this.selector).slideToggle(settings.speed);
					});
				break;
			}
		}else{
			console.log("Handler is required!");
		}
	}
}( jQuery ));