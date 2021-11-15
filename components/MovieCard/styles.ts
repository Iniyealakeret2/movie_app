import styled from "styled-components/native";

export const ImageContainer = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  padding-horizontal: 20px;
  margin-bottom: 20px;
`;

export const MovieImage = styled.Image`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 450px;
  resize-mode: cover;
  border-radius: 20px;
`;

export const Container = styled.View``;

export const TextContainer = styled.View`
  width: 100%;
  padding-vertical: 10px;
  background-color: #f4f4f4;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const MovieText = styled.Text`
  font-size: 20px;
  text-align: center;
`;
