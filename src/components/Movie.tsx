const Movie: React.FC<{ movie: string }> = ({ movie }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        top: "11%",
        textAlign: "center",
        fontSize: "78px",
        fontFamily: "Manrope",
        fontWeight: 700,
      }}
    >
      {movie}
    </div>
  );
};

export default Movie;
