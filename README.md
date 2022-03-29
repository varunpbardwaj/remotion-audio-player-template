# An Audio Player

###### A Reusable audio player template created using <a href="https://www.remotion.dev/">Remotion</a>.
<br/>
<img src="https://raw.githubusercontent.com/varunpbardwaj/remotion-audio-player-template/main/src/assets/images/cover.png">

Click here to <a href="https://bardwaj.me/remotion/neenaadena">watch</a> video.

<br />

### Template Structure

```
src/
├── assets/
│   ├── audio/
│   │   └── audio.mp3
│   ├── fonts/
│   │   └── fonts.css
│   └── images/
│       └── album.jpeg
└── config/
    └── index.ts
```

replace audio in <b>src/assets/audio</b> and album image in <b>src/assets/images/album.jpeg</b> of your choice and edit <b>src/config/index.ts</b> to generate new video.

The template configuration,

```
{
  durationInFrames: 2100, //song duration in secs * fps; in this example 70 seconds * 30 fps = 2100
  fps: 30,

  primaryColor: "#C3A887",
  secondaryColor: "#393130",

  song: "Neenaade Naa",
  artist: "Armaan Malik",
  movie: "Yuvarathnaa",
}
```

<br />

### Commands

##### Preview
```bash
yarn start
```
##### Render video(generates video in out folder)
```bash
yarn build
```

<br />

