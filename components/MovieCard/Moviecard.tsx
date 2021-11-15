import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IMAGE_URL } from "../../Constant/Constants";
import { Result } from "../../Interface/Data";
import {
  Container,
  ImageContainer,
  MovieImage,
  MovieText,
  TextContainer,
} from "./styles";

const Moviecard: React.FC<Result> = ({
  adult,
  backdrop_path,
  genre_ids,
  id,
  original_language,
  original_title,
  overview,
  popularity,
  poster_path,
  release_date,
  title,
  video,
  vote_average,
  vote_count,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate("DetailsScreen", {
          title: title,
          poster_path: poster_path,
          original_title: original_title,
          vote_average: vote_average,
          overview: overview,
          release_date: release_date,
          id: id,
          backdrop_path: backdrop_path,
          popularity: popularity,
        })
      }
    >
      <Container>
        <ImageContainer>
          <MovieImage source={{ uri: IMAGE_URL + poster_path }} />
        </ImageContainer>
        <TextContainer>
          <MovieText>{title}</MovieText>
        </TextContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default Moviecard;
