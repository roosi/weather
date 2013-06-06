var utils = {
	getDefaultLocale: function() {
		return (navigator.userLanguage||navigator.browserLanguage||navigator.language).substr(0,2);
	},
	
	checkMobile: function() {
		var sw=window.innerWidth
			|| document.documentElement.clientWidth
			|| document.body.clientWidth;

		var sh=window.innerHeight
			|| document.documentElement.clientHeight
			|| document.body.clientHeight;
		
		var breakpoint = 640;
		return (sw > breakpoint) ? false : true;
	}
}