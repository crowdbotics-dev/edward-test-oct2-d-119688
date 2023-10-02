import { StyleSheet } from "react-native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';

const SignInScreen = () => {
  return <SafeAreaView style={_styles.ZVeJcyns}>
      <View style={_styles.rppbNwpy}>
        <View style={_styles.plseFnEF}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={_styles.YuSVAZRx} />
          <Text style={_styles.swwZbyyy}>Sign In</Text>
        </View>
        <View style={_styles.GWmspbYU}>
          <Text style={_styles.MgxBJWqB}>Email</Text>
          <TextInput placeholder="Enter your email" style={_styles.SzJZaNSu} />
          <Text style={_styles.aYcAzuiz}>Password</Text>
          <TextInput placeholder="Enter your password" secureTextEntry={true} style={_styles.pUGXqxZW} />
          <TouchableOpacity style={_styles.mHImgApr}>
            <Text style={_styles.uqnWAajC}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.kqUpCAlw}>
            <Text style={_styles.CFJalmxm}>Sign In with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.vbbFCVFJ}>
            <Text style={_styles.iHmJotlU}>Sign In with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.zexLunLf}>
            <Text style={_styles.TnfflghK}>Create an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>;
};

export default SignInScreen;

const _styles = StyleSheet.create({
  ZVeJcyns: {
    flex: 1,
    backgroundColor: "#fff"
  },
  rppbNwpy: {
    flex: 1,
    paddingHorizontal: 20
  },
  plseFnEF: {
    alignItems: "center",
    marginTop: 50
  },
  YuSVAZRx: {
    width: 150,
    height: 150
  },
  swwZbyyy: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  GWmspbYU: {
    marginTop: 50
  },
  MgxBJWqB: {
    fontSize: 16,
    marginBottom: 10
  },
  SzJZaNSu: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  aYcAzuiz: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10
  },
  pUGXqxZW: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  mHImgApr: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 5
  },
  uqnWAajC: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  kqUpCAlw: {
    marginTop: 20,
    backgroundColor: "#3b5998",
    paddingVertical: 10,
    borderRadius: 5
  },
  CFJalmxm: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  vbbFCVFJ: {
    marginTop: 20,
    backgroundColor: "#db4a39",
    paddingVertical: 10,
    borderRadius: 5
  },
  iHmJotlU: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  zexLunLf: {
    marginTop: 20
  },
  TnfflghK: {
    color: "#007bff",
    textAlign: "center",
    fontSize: 16
  }
});