import React, { useState, useEffect } from "react";
import Presenter from "./Presenter";
import { movieApi, tvApi } from "../../api";

export default ({
  navigation,
  route: {
    params: { id, title, backgroundImage, poster, votes, overview, isTv },
  },
}) => {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({
    loading: true,
    result: {
      title,
      backgroundImage,
      poster,
      overview,
      votes,
    },
  });
  const getData = async () => {
    const [getDetail, getDetailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    setDetail({
      loading: false,
      result: {
        ...getDetail,
        title: getDetail.title || getDetail.name,
        backgroundImage: getDetail.backdrop_path,
        poster: getDetail.poster_path,
        overview: getDetail.overview,
        votes: getDetail.votes_average,
      },
    });
  };

  useEffect(() => {
    getData();
  }, [id]);
  React.useLayoutEffect(() => {
    navigation.setOptions({ title });
  });
  return <Presenter {...detail} />;
};
