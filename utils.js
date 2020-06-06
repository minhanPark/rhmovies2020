export const trimText = (text = "", limit) =>
  text.length > limit ? `${text.slice(0, limit - 3)}...` : text;

export const formatDate = (date) => {
  // non-debug 모드일 때 리액트 네이티브는 자바스크립트코어 엔진을 사용하고, 이때 date가 작동안함
  // 그러나 디버그 모드일때는 크롬v8엔진을 사용하고 이때는 date 작동함
  // ios에서는 작동함
  const theDate = new Date(date);
  return theDate.toLocaleDateString("ko-KR");
};
