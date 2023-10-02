import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUpScreen = () => {
  return <SafeAreaView style={_styles.cgDXzeEm}>
      <View style={_styles.RnhAZNmn}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.uVBciVZY} />
        <TextInput placeholder="Email" style={_styles.ZsLYOdMg} />
        <TextInput placeholder="Password" secureTextEntry={true} style={_styles.wfijNcKN} />
        <TouchableOpacity style={_styles.IlVkDJks}>
          <Text style={_styles.ahrBLNsN}>Sign Up with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.JHzlngxw}>
          <Text style={_styles.eKOLBqVR}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.OVqLLeIF}>
          <Text style={_styles.WQMigZPb}>Sign Up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={_styles.kaeHbSCI}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default SignUpScreen;

const _styles = StyleSheet.create({
  cgDXzeEm: {
    flex: 1
  },
  RnhAZNmn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  uVBciVZY: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  ZsLYOdMg: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  wfijNcKN: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  IlVkDJks: {
    width: "80%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  ahrBLNsN: {
    color: "white",
    fontSize: 18
  },
  JHzlngxw: {
    width: "80%",
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  eKOLBqVR: {
    color: "white",
    fontSize: 18
  },
  OVqLLeIF: {
    width: "80%",
    height: 50,
    backgroundColor: "gray",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  WQMigZPb: {
    color: "white",
    fontSize: 18
  },
  kaeHbSCI: {
    color: "blue",
    fontSize: 18
  }
});