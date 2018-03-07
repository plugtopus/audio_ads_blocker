(function () {
	if (typeof (AudioPlayer) == 'function') {
		AudioPlayer.prototype._adsIsAllowed = function (t, i) {
			return 1;
		};
	}
})();