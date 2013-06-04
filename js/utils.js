var utils = {
	getDefaultLocale: function() {
		return (navigator.userLanguage||navigator.browserLanguage||navigator.language).substr(0,2);
	}
}