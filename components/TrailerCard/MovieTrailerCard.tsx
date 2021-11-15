import { Container, TrailerTitle } from "./styles";
import YoutubePlayer from "react-native-youtube-iframe";
import React, { useState, useCallback } from "react";
import { Button, View, Alert } from "react-native";
import { Result } from "../../Interface/VideosData";

const MovieTrailerCard: React.FC<Result> = ({ id, name }) => {
  const [playing, setPlaying] = useState(false);
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  };
  return (
    <Container>
      <YoutubePlayer width={300} height={300} play={true} videoId={`${id}`} />
      {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
    </Container>
  );
};
export default MovieTrailerCard;
