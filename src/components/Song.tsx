const Song: React.FC<{ song: string }> = ({ song }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        top: "65%",
        textAlign: "center",
        transform: "translateY(-66%)",
        fontSize: "60px",
        fontFamily: "Manrope",
        fontWeight: 600,
      }}
    >
      {song}
    </div>
  );
};

export default Song;
