import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Slider, Text, Icon } from 'react-native-elements';

type SlidersComponentProps = {};

const SliderVolume: React.FunctionComponent<SlidersComponentProps> = () => {
const [value, setValue] = useState(0);

const interpolate = (start: number, end: number) => {
  let k = (value - 0) / 100; // 0 =>min  && 10 => MAX
  return Math.ceil((1 - k) * start + k * end) % 256;
};

const color = () => {
  let r = interpolate(200, 20);
  let g = interpolate(20, 200);
  let b = interpolate(50, 150);
  return `rgb(${r},${g},${b})`;
};

return (
  <>
      <Slider
        style={{width: "100%"}}
        value={value}
        onValueChange={setValue}
        maximumValue={100}
        minimumValue={0}
        step={1}
        allowTouchTrack
        trackStyle={{ height: 5, backgroundColor: 'yellow' }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
        thumbProps={{
          children: (
            <Icon
              name="volume-1"
              type="feather"
              size={40}
              reverse
              containerStyle={{ bottom: 40, right: 20 }}
              color={color()} tvParallaxProperties={undefined}            />
          ),
        }}
      />
      <Text style={{ paddingTop: 40, fontSize: 40 }}>{value}</Text>
    </>
);
};

const styles = StyleSheet.create({
contentView: {
  padding: 20,
  width: '100%',
  justifyContent: 'center',
  alignItems: 'stretch',
},
subHeader: {
  backgroundColor : "#2089dc",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10
}
});

export { SliderVolume };