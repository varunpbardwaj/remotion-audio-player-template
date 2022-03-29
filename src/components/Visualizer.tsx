import { useCurrentFrame, useVideoConfig } from "remotion";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";

const Visualizer: React.FC<{
  audio: string;
  backgroundColor: string;
}> = ({ audio, backgroundColor }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const audioData = useAudioData(audio);

  if (!audioData) {
    return null;
  }

  const visualization = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 256,
  });
  return (
    <div>
      {visualization.map((v) => {
        return (
          <div
            style={{
              width: 2000 * v,
              height: 25,
              backgroundColor: backgroundColor,
            }}
          />
        );
      })}
    </div>
  );
};

export default Visualizer;
