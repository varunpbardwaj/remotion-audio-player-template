import { Audio as AudioTag } from "remotion";

const Audio: React.FC<{ audio: string }> = ({ audio }) => {
  return <AudioTag src={audio} />;
};

export default Audio;
