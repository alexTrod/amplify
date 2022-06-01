
import { View, StyleSheet } from "react-native";
import { ListInput } from "../components/ListInput";
import { ListOutput } from "../components/ListOutput";
import { ContainerDivider } from "../components/ContainerDivider";
import { SliderVolume } from "../components/SliderVolume";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const ControlCenter = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.containerList}>
          <Icon
            name="plus"
            type="feather"
            size={20}
            onPress={() => navigation.navigate("BluetoothControl")}
          />
          <ListInput />
        </View>
        <ContainerDivider />
        {/**<View style={styles.containerSlider}>
                                          <SliderVolume />
                                    </View>*/}
        <View style={styles.containerInfo}>
          <SliderVolume />
        </View>
        <ContainerDivider />
        <View style={styles.containerList}>
          <ListOutput />
        </View>
      </View>
    );
}
export {ControlCenter};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: "5%",
  },
  containerList: {
    flex: 2.5,
    backgroundColor: "#DB4",
  },
  containerInfo: {
    flex: 5,
  },
  containerSlider: {
    flex: 0.5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
});
