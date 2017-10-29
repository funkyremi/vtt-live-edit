# vtt-live-edit


[![CircleCI](https://circleci.com/gh/funkyremi/vtt-live-edit.svg?style=shield)](https://circleci.com/gh/funkyremi/vtt-live-edit)
[![Known Vulnerabilities](https://snyk.io/test/github/funkyremi/vtt-live-edit/badge.svg)](https://snyk.io/test/github/funkyremi/vtt-live-edit)
[![npm version](https://img.shields.io/npm/v/vtt-live-edit.svg)](https://www.npmjs.com/package/vtt-live-edit)
[![Dependency Status](https://david-dm.org/funkyremi/vtt-live-edit.svg)](https://david-dm.org/funkyremi/vtt-live-edit)


Live edit VTT subtitles (delay, sync, position, style...) on html5 native player.


## Demonstration

![Alt text](/demo.png?raw=true "Demo application")


## Installation
```
npm install vtt-live-edit --save
```


## Documentation

The library modify the currently showing subtitle track of a video (selected by the video id)

__addOffset__

Add an offset to the currently showing subtitle track. Default is 500ms.

`addOffset(<video id> [, offset in second]);`

__removeOffset__

Remove an offset to the currently showing subtitle track. Default is 500ms.

`removeOffset(<video id> [, offset in second]);`

__moveLeft__

Move the subtitle to the left. Default is 5%.

`moveLeft(<video id> [, percent to move]);`

__moveRight__

Move the subtitle to the right. Default is 5%.

`moveRight(<video id> [, percent to move]);`

__moveUp__

Move the subtitle up (line by line).

`moveUp(<video id>);`

__moveDown__

Move the subtitle down (line by line).

`moveDown(<video id>);`

__setFontSize__

Set the subtitles font size

`setFontSize(<font size in px>);`

__setFontColor__

Set the subtitles font color

`setFontColor(<font color value>);`


## Usage

``` html
<video id="video">
    <source src="video.mp4" type="video/mp4"/>
    <track kind="subtitles" label="default" src="subtitle.vtt" default>
</video>
```

``` js
const vtt = require('vtt-live-edit');
// or import vtt from 'vtt-live-edit';

vtt.addOffset('video', 0.5);    // Add 500ms offset
vtt.removeOffset('video', 0.5); // Remove 500ms offset
vtt.moveLeft('video', 5);       // Move subtitle 5% left
vtt.moveRight('video', 5);      // Move subtitle 5% right
vtt.moveUp('video');            // Move subtitle one line up
vtt.moveDown('video');          // Move subtitle one line down
vtt.setFontSize(20);            // Set subtitle size to 20px
vtt.setFontColor('#bbb');       // Set subtitle size to #BBB
```

## License

MIT
