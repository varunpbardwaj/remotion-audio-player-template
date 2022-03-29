import { AbsoluteFill } from "remotion";
import AudioPlayer from "../components/Audio";
import Album from "../components/Album";
import Artist from "../components/Artist";
import Song from "../components/Song";
import Controller from "../components/Controller";
import Movie from "../components/Movie";
import Visualizer from "../components/Visualizer";

const VideoPlayer: React.FC<{
  primaryColor: string;
  secondaryColor: string;
  audio: string;
  album: string;
  song: string;
  artist: string;
  movie: string;
}> = ({ primaryColor, secondaryColor, audio, album, song, artist, movie }) => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: primaryColor,
      }}
    >
      <AudioPlayer audio={audio} />
      <Album album={album} backgroundColor={secondaryColor} />
      <Song song={song} />
      <Artist artist={artist} />
      <div
        style={{
          padding: "0px 100px",
        }}
      >
        <Controller backgroundColor={secondaryColor} />
      </div>
      <div />
      <Movie movie={movie} />
      <Visualizer audio={audio} backgroundColor={secondaryColor} />
    </AbsoluteFill>
  );
};

export default VideoPlayer;
