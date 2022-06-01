import { StyleSheet, Image, View } from "react-native";
import { Card,  Text } from "react-native-elements";

const CardOutput = (props) => {
    return (
        <Card containerStyle={{}} wrapperStyle={{}}>
          <Card.Title>{props.title}</Card.Title>
          <View
            style={{
              position: "relative",
              alignItems: "center"
            }}
          >
            <Image
              style={{ width: "100%", height: 30 }}
              resizeMode="contain"
              source={require('../assets/images/icon_output_1.jpg')}
            />
          </View>
        </Card>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export { CardOutput };