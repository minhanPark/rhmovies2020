# movie app 2020

노마드코더의 리액트 네이티브 강의를 보며 따라 만든 movie app 입니다.

## 완성 모습

완성 모습의 이미지입니다.  
![movie](https://user-images.githubusercontent.com/29043491/84287835-5db9b480-ab7b-11ea-967a-c74ef5b8c3c4.jpg)
![tv](https://user-images.githubusercontent.com/29043491/84287840-5e524b00-ab7b-11ea-85a8-4a39e02eee4d.jpg)  

![search](https://user-images.githubusercontent.com/29043491/84287824-5abec400-ab7b-11ea-925b-af07d1d6234a.jpg)
![detail](https://user-images.githubusercontent.com/29043491/84287833-5d211e00-ab7b-11ea-8f1f-f094feedea84.jpg)  

![discover](https://user-images.githubusercontent.com/29043491/84287830-5c888780-ab7b-11ea-919e-7f18c7523ff6.jpg)

## 네비게이션

네비게이션은 하단에 탭 네비게이션, 그리고 영화나 tv쇼를 클릭했을 때 스택 네비게이션이 나타납니다.

```
yarn add @react-navigation/bottom-tabs
```

위와 같이 다운로드 할 수 있다.

```js
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

export default () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="탭 네임" component={탭에서 사용할 컴포넌트} />
            <Tabs.Screen name="탭 네임" component={탭에서 사용할 컴포넌트} />
        </Tabs.Navigator>
    )
}
```

위와 같은 형태로 탭 네비게이션을 정의할 수 있다.

이 위에 스택 네비게이션을 쌓는 방법은 무엇일까?

```
yarn add @react-navigation/stack
```

위와 같이 스택 네비게이션을 다운로드 받는다.

```js
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="탭 네비게이션 이름" component={생성한 탭 네비게이션} />
        <Stack.Screen name="디테일" component={컴포넌트} />
    </Stack.Navigator>
)
```

위와 같은 형태로 스택 네비게이션의 스크린에 만든 탭 네비게이션과 위로 쌓을 다른 컴포넌트(예제에서는 Detail 컴포넌트)를 전달하면 탭 네비게이션 위에 다른 컴포넌트가 쌓이는 형태가 된다.

## 리액트 네이티브의 애니메이션

Animated를 이용하면 컴포넌트의 움직임, 색상, 투명도 등이 변경되서 사용자에게 액티브한 경험을 줄 수 있다.  
한 가지 값을 사용하는 value와 x축과 y축을 사용하는 valueXY가 있다.  
프로젝트 안에서는 screens/Fav/Presenter 를 보면 확인할 수 있다.

```js
// screens/Fav/Presenter.js

import { PanResponder, Animated } from "react-native";

export default () => {
  // 프로젝트 안에서는 x, y를 둘다 사용하기 때문에 ValueXY를 사용한다.
  const position = new Animated.ValueXY();
};
```

**PanResponder의 역할**은 무엇일까?

PanResponder를 통해서 사용자와 제스처와 이벤트를 확인할 수 있다.  
코드내에서는 제스처 값 중에서 dx와 dy를 사용했는데, 해당 값은 사용자가 클릭한 부분을 (0, 0)으로 보고 좌우 상하로 이동한 거리를 나타내는데 사용한다.

**interpolate의 개념**  
값을 변경시킬 때 사용하는 것이 interpolate이다.

```js
const rotationValues = position.x.interpolate({
  inputRange: [-100, 0, 100],
  outputRange: ["-5deg", "0deg", "5deg"],
  extrapolate: "clamp",
});
```

코드를 확인해보면 inputRange와 outputRange, extrapolate를 사용한 것을 볼 수 있는데,  
들어오는 값이 [-100, 0, 100]일때 이 비율에 맞게 ["-5deg", "0deg", "5deg"]으로 변경시키라는 의미가 된다. "clamp" 값의 효과는 inputRange의 양 범위를 최대한의 값으로 주겠다는 의미가 된다.
