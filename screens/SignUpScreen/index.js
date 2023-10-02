import React from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SignUpScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create an account</Text>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry={true} style={[styles.input, styles.passwordInput]} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up with Email</Text>
        </TouchableOpacity>
        <Text style={styles.or}>or</Text>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={styles.buttonText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
          <Text style={styles.buttonText}>Sign Up with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Already have an account? <Text style={styles.underline}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  passwordInput: {
    marginBottom: 20
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20
  },
  buttonText: {
    color: "white",
    fontSize: 18
  },
  googleButton: {
    backgroundColor: "#87CEFA"
  },
  facebookButton: {
    backgroundColor: "#87CEFA"
  },
  or: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  loginText: {
    color: "blue",
    fontSize: 18
  },
  underline: {
    textDecorationLine: 'underline'
  }
});
export default SignUpScreen;