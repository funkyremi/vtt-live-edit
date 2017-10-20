# vtt-live-edit

Live edit VTT subtitles (delay, sync, position, style...) on html5 native player.

```
npm install vtt-live-edit
```

## Usage

``` js
const vtt = require('vtt-live-edit')

vtt.addOffset('video', 0.5);		// Add 500ms offset to the currently showing vtt track
vtt.removeOffset('video', 0.5);		// Remove 500ms offset to the currently showing vtt track
vtt.moveLeft('video', 5);			// Move subtitle 5% left to the currently showing vtt track
vtt.moveRight('video', 5);			// Move subtitle 5% right to the currently showing vtt track
vtt.moveUp('video');				// Move subtitle one line up to the currently showing vtt track
vtt.moveDown('video');				// Move subtitle one line down to the currently showing vtt track
```

## License

MIT