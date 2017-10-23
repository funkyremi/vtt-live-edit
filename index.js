module.exports = {
	addOffset (videoId, offset) {
		const video = document.getElementById(videoId);
		if (video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					Array.from(track.cues).forEach((cue) => {
						cue.startTime += offset || 0.5;
						cue.endTime += offset || 0.5;
					});
					return true;
				}
			});
		}
		return false;
	},
	removeOffset (videoId, offset) {
		const video = document.getElementById(videoId);
		if (video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					Array.from(track.cues).forEach((cue) => {
						cue.startTime -= offset || 0.5;
						cue.endTime -= offset || 0.5;
					});
					return true;
				}
			});
		}
		return false;
	},
	moveUp (videoId) {
		const video = document.getElementById(videoId);
		if (video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					Array.from(track.cues).forEach((cue) => {
						if (!isNaN(cue.line)) {
							cue.line -= 1;
						} else {
							cue.line = 15;
						}
					});
					return true;
				}
			});
		}
		return false;
	},
	moveDown (videoId) {
		const video = document.getElementById(videoId);
		if (video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					Array.from(track.cues).forEach((cue) => {
						if (!isNaN(cue.line)) {
							cue.line += 1;
						} else {
							cue.line = 16;
						}
					});
					return true;
				}
			});
		}
		return false;
	},
	moveLeft (videoId, percent) {
		const video = document.getElementById(videoId);
		if (video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					Array.from(track.cues).forEach((cue) => {
						if (!isNaN(cue.position)) {
							cue.position -= percent || 5;
						} else {
							cue.position = 50 - percent;
						}
					});
					return true;
				}
			});
		}
		return false;
	},
	moveRight (videoId, percent) {
		const video = document.getElementById(videoId);
		if (video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					Array.from(track.cues).forEach((cue) => {
						if (!isNaN(cue.position)) {
							cue.position += percent || 5;
						} else {
							cue.position = 50 + percent;
						}
					});
					return true;
				}
			});
		}
		return false;
	},
	setFontSize (fontSize) {
		const css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = `::cue { font-size: ${fontSize}px; }`;
		document.body.appendChild(css);
	},
	setFontColor (fontColor) {
		const css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = `::cue { color: ${fontColor}; }`;
		document.body.appendChild(css);
	}
};
