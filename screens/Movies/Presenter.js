import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { Dimensions, ActivityIndicator, ScrollView } from "react-native";
import Slide from "../../components/Movies/Slide";
import Title from "../../components/Title";
import Vertical from "../../components/Vertical";

const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

const Container = styled.View``;

const SlideContainer = styled.View`
  width: ${WIDTH}px;
  height: ${HEIGHT / 4}px;
  margin-bottom: 40px;
`;

export default ({ loading, nowPlaying, popular }) => (
  <ScrollView
    style={{ backgroundColor: "black" }}
    contentContainerStyle={{
      flex: 1,
      justifyContent: loading ? "center" : "flex-start",
    }}
  >
    {loading ? (
      <ActivityIndicator color="white" size="large" />
    ) : (
      <>
        <SlideContainer>
          <Swiper controlsEnabled={false} loop timeout={3}>
            {nowPlaying.map((movie) => (
              <Slide
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                votes={movie.vote_average}
                backgroundImage={movie.backdrop_path}
                poster={movie.poster_path}
              />
            ))}
          </Swiper>
        </SlideContainer>
        <Container>
          <Title title={"Popular Movies"} />
          <ScrollView
            horizontal
            style={{ marginTop: 20 }}
            contentContainerStyle={{ paddingLeft: 30 }}
            showsVerticalScrollIndicator={false}
          >
            {popular.map((movie) => (
              <Vertical
                key={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                votes={movie.vote_average}
              />
            ))}
          </ScrollView>
        </Container>
      </>
    )}
  </ScrollView>
);
