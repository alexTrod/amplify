import * as React from "react";
import { Divider } from "react-native-elements";

const ContainerDivider = () => {
  return (
    <Divider
      style={{ width: "80%", margin: 40 }}
      color="#444"
      subHeader=""
      subHeaderStyle={{}}
      width={5}
      orientation="horizontal"
    />
  );
}

export {ContainerDivider};