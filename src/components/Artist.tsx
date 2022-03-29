const Artist: React.FC<{ artist: string }> = ({ artist }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        top: "67%",
        textAlign: "center",
        fontSize: "47px",
        fontFamily: "Manrope",
        fontWeight: 500,
      }}
    >
      {artist}
    </div>
  );
};

export default Artist;
