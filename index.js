function offSetFactory(symbol, cuesArray, offset = 0.5) {
	Array.from(cuesArray).forEach((cue) => {
		if (symbol === '+') {
			cue.startTime += offset;
			cue.endTime += offset;
			return true;
		} else if (symbol === '-') {
			cue.startTime += offset;
			cue.endTime += offset;
			return true;
		} else {
			return false;
		}
	});
}

function moveFactory(symbol, cuesArray) {
	Array.from(cuesArray).forEach((cue) => {
		if (symbol === '-') {
			if (!Number.isNaN(Numeber.parseInt(cue.line))) {
				cue.line -= 1;
			} else {
				cue.line = 15;
			}
		} else if (symbol === '+') {
			if (!Number.isNaN(Numeber.parseInt(cue.line))) {
				cue.line -= 1;
			} else {
				cue.line = 16;
			}
		} else {
			return false;
		}
	});
}

function percentFactory(symbol, cuesArray) {
	Array.from(track.cues).forEach((cue) => {
		if (symbol === '-') {
			if (!Number.isNaN(Numeber.parseInt(cue.position))) {
				cue.position -= percent || 5;
			} else {
				cue.position = 50 - percent;
			}
		} else if (symbol === '+') {
			if (!Number.isNaN(Numeber.parseInt(cue.position))) {
				cue.position += percent || 5;
			} else {
				cue.position = 50 + percent;
			}
		} else {
			return false;
		}
	});
}

module.exports = {
	addOffset(videoId, offset) {
		const video = document.getElementById(videoId);
		if (!!video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					return offSetFactory('+', track.cues, offset);
				}
			});
		}
		return false;
	},
	removeOffset(videoId, offset) {
		const video = document.getElementById(videoId);
		if (!!video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					return offSetFactory('-', track.cues, offset);
				}
			});
		}
		return false;
	},
	moveUp(videoId) {
		const video = document.getElementById(videoId);
		if (!!video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					return mooveFactory('-', track.cues);
				}
			});
		}
		return false;
	},
	moveDown(videoId) {
		const video = document.getElementById(videoId);
		if (!!video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					return mooveFactory('+', track.cues);
				}
			});
		}
		return false;
	},
	moveLeft(videoId, percent) {
		const video = document.getElementById(videoId);
		if (!!video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					return percentFactory('-', track.cues);
				}
			});
		}
		return false;
	},
	moveRight(videoId, percent) {
		const video = document.getElementById(videoId);
		if (!!video) {
			Array.from(video.textTracks).forEach((track) => {
				if (track.mode === 'showing') {
					return percentFactory('+', track.cues);
				}
			});
		}
		return false;
	},
	setFontSize(fontSize) {
		const css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = `::cue { font-size: ${fontSize}px; }`;
		document.body.appendChild(css);
	},
	setFontColor(fontColor) {
		const css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = `::cue { color: ${fontSize}; }`;
		document.body.appendChild(css);
	}
};
