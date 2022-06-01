import { StyleSheet, Image, View } from "react-native";
import { Card,  Text } from "react-native-elements";

const CardInput = (props) => {
    return (
        <Card containerStyle={{}} wrapperStyle={{}}>
          <Card.Title>{props.title}</Card.Title>
          <View
            style={{
              position: "relative",
            }}
          >
            <Image
              style={{ width: "100%", height: 30 }}
              resizeMode="contain"
              source={require('../assets/images/icon_input_1.jpg')}
            />
          </View>
        </Card>
      );
}

const styles = StyleSheet.create({

});

export { CardInput };