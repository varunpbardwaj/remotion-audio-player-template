import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

const Controller: React.FC<{ backgroundColor: string }> = ({
  backgroundColor,
}) => {
  const frame = useCurrentFrame();

  const { width, durationInFrames, fps } = useVideoConfig();

  const controllerWidth = interpolate(
    (frame * 100) / durationInFrames,
    [0, 1],
    [0, 1]
  );

  const songMintutes = Math.floor(durationInFrames / fps / 60);
  const songSeconds = Math.ceil(durationInFrames / fps - songMintutes * 60);

  const currentMintutes = Math.floor(frame / fps / 60);
  const currentSeconds = Math.ceil(frame / fps - currentMintutes * 60);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "85%",
          fontSize: "40px",
          fontFamily: "sans-serif",
        }}
      >
        {currentMintutes}:{currentSeconds < 10 && "0"}
        {currentSeconds}
      </div>
      <div
        style={{
          position: "absolute",
          top: "85%",
          right: 100,
          fontSize: "40px",
          fontFamily: "sans-serif",
        }}
      >
        {songMintutes}:{songSeconds < 10 && "0"}
        {songSeconds}
      </div>
      <div
        style={{
          position: "absolute",
          top: "90%",
          width: width - 200,
          height: 15,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${controllerWidth}%`,
            height: 15,
            backgroundColor,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "90%",
          display: "flex",
          width: width - 175,
        }}
      >
        <div
          style={{
            width: `${controllerWidth}%`,
            height: 15,
          }}
        />
        <div
          style={{
            backgroundColor,
            width: 50,
            height: 50,
            borderRadius: "50%",
            marginTop: "-15px",
            marginLeft: "-25px",
          }}
        />
      </div>
    </>
  );
};

export default Controller;
