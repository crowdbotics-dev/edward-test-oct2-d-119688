import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const SignUpScreen = () => {
  return <SafeAreaView style={_styles.RnZWVVHC}>
      <View style={_styles.WPDYjgbp}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.bWTiwnsz} />
        <TextInput placeholder="Email" style={_styles.esVGRlWt} />
        <TextInput placeholder="Password" secureTextEntry={true} style={_styles.jEJLTnrF} />
        <TouchableOpacity style={_styles.iecHVpCS}>
          <Text style={_styles.EKTtMLhM}>Sign Up with Email</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.NdfjinFw}>
          <Text style={_styles.MScIoNdV}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={_styles.JQSUiRPi}>
          <Text style={_styles.tssCEWup}>Sign Up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={_styles.cViiGvgw}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

export default SignUpScreen;

const _styles = StyleSheet.create({
  RnZWVVHC: {
    flex: 1
  },
  WPDYjgbp: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bWTiwnsz: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  esVGRlWt: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  jEJLTnrF: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20
  },
  iecHVpCS: {
    width: "80%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  EKTtMLhM: {
    color: "white",
    fontSize: 18
  },
  NdfjinFw: {
    width: "80%",
    height: 50,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  MScIoNdV: {
    color: "white",
    fontSize: 18
  },
  JQSUiRPi: {
    width: "80%",
    height: 50,
    backgroundColor: "gray",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  tssCEWup: {
    color: "white",
    fontSize: 18
  },
  cViiGvgw: {
    color: "blue",
    fontSize: 18
  }
});