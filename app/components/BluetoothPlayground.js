import React from "react";
import RNBluetoothClassic from "react-native-bluetooth-classic";
import { Icon, Card, Text } from "react-native-elements";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import { useState, useEffect } from "react";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    name: "Device #0",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    name: "Device #1",
  },
  {
    id: "3ac68afc-c621-48d3-a4f6-fbd91hz97f63",
    name: "Device #2",
  },
];

function InfoLineBoolean(props){
  const pick_icon = (prop) => {
    if (prop) {
      return "thumbs-up";
    }
    return "thumbs-down";
  };
  console.log()
  return (       
    <View style={styles.infoLine} wrapperStyle={{}}>
          <Text>{props.name} : </Text>         
          <Icon
            name={pick_icon(props.setting)}
            color="#bc6666"
            type="feather"
            size={20}
          />
      </View>
      
  );
};

const CardDevice = (props) => {
  return (
  <Card containerStyle={{}} wrapperStyle={{}}>
    <Card.Title>{props.name}</Card.Title>
    <Card.Divider />
    <View
      style={{
        position: "relative",
        alignItems: "center",
      }}
    >
      <Icon name="smartphone" color="#2222dd" type="feather" size={20} />
      <Text>{props.id}</Text>
    </View>
  </Card>
  )
}

function InfoLineDevices(props){
      const renderItem = ({ item }) => <CardDevice name={item.name} id={item.id} />;
      const _data = props.content.length > 0 ? props.content : DATA;
      return (
        <FlatList
          horizontal
          style={styles.containerDevices}
          data={_data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      );
};


const BluetoothPlayground = ({}) => {
  const [bluetoothAvailable, setBluetoothAvailability] = useState(false);
  const [bluetoothEnabled, isBluetoothEnabled] = useState(false);
  const [pairedDevices, setPairedDevices] = useState([]);
  const [connectedDevices, setConnectedDevices] = useState([]);

  //isBluetoothEnabled
  useEffect(() => {
    try {
      console.log("GET INFO FROM LIBRARY...");
      async function get_bluetooth_availability() {
        console.log("GET Availability");
        const available = await RNBluetoothClassic.isBluetoothAvailable();
        setBluetoothAvailability(available);
      }

      async function get_bluetooth_enable() {
        console.log("GET Enable");
        const enabled = await RNBluetoothClassic.isBluetoothEnabled();
        isBluetoothEnabled(enabled);
      }
      
      async function get_paired_devices() {
        console.log("GET Paired Devices");
        const paired_devices = await RNBluetoothClassic.getBondedDevices();      
        
        setPairedDevices(paired_devices);
      }
      async function get_connected_devices(){
        console.log("GET Connected Devices");
        const connected_devices = await RNBluetoothClassic.getConnectedDevices();
        //ipad => 
        console.log("connected_dev : ");
        console.log(connected_devices);
        setConnectedDevices(connected_devices);
      }


      get_bluetooth_availability();
      get_bluetooth_enable();
      get_paired_devices();
      get_connected_devices();

      //open bluetooth settings
      RNBluetoothClassic.openBluetoothSettings();
    } catch (e) {
      console.log("Problem with library");
    }

    return () => {
      // called when the component unmounts
    };
  }, []);

  return (
    <>
      <InfoLineBoolean setting={bluetoothAvailable} name="available" />
      <InfoLineBoolean setting={bluetoothEnabled} name="enabled" />
      <View style={styles.devicesList}>
        <InfoLineDevices content={pairedDevices} />
      </View>
      <View style={styles.devicesList}>
        <InfoLineDevices content={connectedDevices} />
      </View>
    </>
  );
};



const styles = StyleSheet.create({
  infoLine: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  devicesList: {
    flexDirection: "row",
    width: "100%",
  },
  containerDevices: {},
});


export { BluetoothPlayground };
