_ = require('lodash');

module.exports = {
	addOffset (videoId, offset) {
		const video = document.getElementById(videoId);
		if (!!video) {
			const currentTrack = _.filter(video.textTracks, { mode: 'showing' })[0];
			_.each(currentTrack.cues, (cue) => {
				cue.startTime += offset || 0.5;
				cue.endTime += offset || 0.5;
			});
			return true;
		} else {
			return false;
		}
	},
	removeOffset (videoId, offset) {
		const video = document.getElementById(videoId);
		if (!!video) {
			const currentTrack = _.filter(video.textTracks, { mode: 'showing' })[0];
			_.each(currentTrack.cues, (cue) => {
				cue.startTime -= offset || 0.5;
				cue.endTime -= offset || 0.5;
			});
			return true;
		} else {
			return false;
		}
	},
	moveUp (videoId) {
		const video = document.getElementById(videoId);
		if (!!video) {
			const currentTrack = _.filter(video.textTracks, { mode: 'showing' })[0];
			_.each(currentTrack.cues, (cue) => {
				cue.line -= 1;
			});
			return true;
		} else {
			return false;
		}
	},
	moveDown (videoId) {
		const video = document.getElementById(videoId);
		if (!!video) {
			const currentTrack = _.filter(video.textTracks, { mode: 'showing' })[0];
			_.each(currentTrack.cues, (cue) => {
				cue.line += 1;
			});
			return true;
		} else {
			return false;
		}
	},
	moveLeft (videoId, percent) {
		const video = document.getElementById(videoId);
		if (!!video) {
			const currentTrack = _.filter(video.textTracks, { mode: 'showing' })[0];
			_.each(currentTrack.cues, (cue) => {
				cue.position -= percent || 5;
			});
			return true;
		} else {
			return false;
		}
	},
	moveRight (videoId, percent) {
		const video = document.getElementById(videoId);
		if (!!video) {
			const currentTrack = _.filter(video.textTracks, { mode: 'showing' })[0];
			_.each(currentTrack.cues, (cue) => {
				cue.position += percent || 5;
			});
			return true;
		} else {
			return false;
		}
	},
	setFontSize (fontSize) {
		const css = document.createElement('style');
		css.type = 'text/css';
		css.innerHTML = `::cue { font-size: ${fontSize}px; }`;
		document.body.appendChild(css);
	}
};
