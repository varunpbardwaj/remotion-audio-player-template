import { Img, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const Album: React.FC<{ album: string; backgroundColor: string }> = ({
  album,
  backgroundColor,
}) => {
  const frame = useCurrentFrame();

  const { width } = useVideoConfig();

  const rotate = interpolate(frame, [0, 1], [0, 1]);

  return (
    <div
      style={{
        position: "absolute",
        top: "35%",
        left: "50%",
        transform: "translate(-50%, -35%)",
      }}
    >
      <Img
        src={album}
        alt="album"
        style={{
          width: width / 1.5,
          borderRadius: `${width / 2}%`,
          border: `50px solid ${backgroundColor}`,
          transform: `rotate(${rotate}deg)`,
        }}
      />
    </div>
  );
};

export default Album;
