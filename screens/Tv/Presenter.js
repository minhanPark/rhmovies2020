import React from "react";
import ScrollContainer from "../../components/ScrollContainer";
import HorizontalSlider from "../../components/HorizontalSlider";
import Vertical from "../../components/Vertical";
import Horizontal from "../../components/Horizontal";
import styled from "styled-components/native";
import List from "../../components/List";

const Container = styled.View`
  margin-top: 30px;
`;

export default ({ refreshFn, loading, popular, topRated, today }) => (
  <ScrollContainer refreshFn={refreshFn} loading={loading}>
    <Container>
      <HorizontalSlider title="Popular Shows">
        {popular.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
            isTv={true}
          />
        ))}
      </HorizontalSlider>
      <HorizontalSlider title="Top Rated">
        {topRated.map((show) => (
          <Vertical
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            votes={show.vote_average}
            isTv={true}
          />
        ))}
      </HorizontalSlider>
      <List title="Airing Today">
        {today.map((show) => (
          <Horizontal
            id={show.id}
            key={show.id}
            poster={show.poster_path}
            title={show.name}
            overview={show.overview}
            isTv={true}
          />
        ))}
      </List>
    </Container>
  </ScrollContainer>
);
