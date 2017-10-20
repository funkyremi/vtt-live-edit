_ = require('lodash');

module.exports = {
	addOffset (videoId, offset) {
		const video = document.getElementById(videoId);
		if (!!video) {
			const currentTrack = _.filter(video.textTracks, { mode: 'showing' })[0];
			_.each(currentTrack.cues, (cue) => {
				cue.startTime += offset;
				cue.endTime += offset;
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
				cue.startTime -= offset;
				cue.endTime -= offset;
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
				cue.position -= percent;
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
				cue.position += percent;
			});
			return true;
		} else {
			return false;
		}
	},
};
