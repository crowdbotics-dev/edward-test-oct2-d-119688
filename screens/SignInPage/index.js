import { StyleSheet } from "react-native";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from "react-native";

const SignInScreen = () => {
  return <SafeAreaView style={_styles.CKWdAAlr}>
      <View style={_styles.YNqJwRgo}>
        <View style={_styles.BWWCjRKJ}>
          <Text style={_styles.ruPyTFwY}>Sign In</Text>
        </View>
        <View style={_styles.YIeQKDuH}>
          <Text style={_styles.BqKhhJAm}>Create an account</Text>
          <Text style={_styles.diPuNlVG}>Email</Text>
          <TextInput placeholder="Enter your email" style={_styles.lMzCLdkh} />
          <Text style={_styles.BvCkmtlh}>Password</Text>
          <TextInput placeholder="Enter your password" secureTextEntry={true} style={_styles.xhiIiOEv} />
          <Text style={_styles.BvCkmtlh}>Confirm Password</Text>
          <TextInput placeholder="Confirm your password" secureTextEntry={true} style={_styles.xhiIiOEv} />
          <TouchableOpacity style={_styles.JLQnFmcq}>
            <Text style={_styles.uMJhpANY}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.mQPnCeqM}>
            <Text style={_styles.TbpVUEQF}>Sign In with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.EWjcayuf}>
            <Text style={_styles.tgHCJkqZ}>Sign In with Google</Text>
          </TouchableOpacity>
          <Text style={_styles.BqKhhJAm}>
            Already have an account? <Text style={_styles.BqKhhJAm}>Sign In</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>;
};

export default SignInScreen;

const _styles = StyleSheet.create({
  CKWdAAlr: {
    flex: 1,
    backgroundColor: "#fff"
  },
  YNqJwRgo: {
    flex: 1,
    paddingHorizontal: 20
  },
  BWWCjRKJ: {
    alignItems: "center",
    marginTop: 50
  },
  ruPyTFwY: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  YIeQKDuH: {
    marginTop: 50
  },
  diPuNlVG: {
    fontSize: 16,
    marginBottom: 10
  },
  lMzCLdkh: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  BvCkmtlh: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10
  },
  xhiIiOEv: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10
  },
  JLQnFmcq: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 5
  },
  uMJhpANY: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  mQPnCeqM: {
    marginTop: 20,
    backgroundColor: "#3b5998",
    paddingVertical: 10,
    borderRadius: 5
  },
  TbpVUEQF: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  EWjcayuf: {
    marginTop: 20,
    backgroundColor: "#db4a39",
    paddingVertical: 10,
    borderRadius: 5
  },
  tgHCJkqZ: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  },
  gOzZyqFY: {
    marginTop: 20
  },
  BqKhhJAm: {
    color: "#007bff",
    textAlign: "center",
    fontSize: 16,
    textDecorationLine: "underline"
  }
});