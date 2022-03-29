import { Composition } from "remotion";
import AudioPlayer from "./compositions/AudioPlayer";
import { config } from "./config";
import audio from "./assets/audio/audio.mp3";
import album from "./assets/images/album.jpeg";
import "./assets/fonts/fonts.css";

export const RemotionVideo: React.FC = () => {
  return (
    <Composition
      id="AudioPlayer"
      component={AudioPlayer}
      durationInFrames={config.durationInFrames}
      fps={config.fps}
      width={1080}
      height={1920}
      defaultProps={{
        primaryColor: config.primaryColor,
        secondaryColor: config.secondaryColor,
        audio,
        album,
        song: config.song,
        artist: config.artist,
        movie: config.movie,
      }}
    />
  );
};
